import { GoogleSpreadsheet } from 'google-spreadsheet'
import moment from 'moment'
import { fromBase64 } from '../../utils/fromBase64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const genCupom = () => {
  const code = parseInt(moment().format('YYMMDDhmmssSSS'))
    .toString(16)
    .toUpperCase()
  return code.substr(0, 4) + '-' + code.substr(4, 4) + '-' + code.substr(8, 4)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    const sheet = doc.sheetsByIndex[1]
    const data = JSON.parse(req.body)

    const sheetConfig = doc.sheetsByIndex[2]
    await sheetConfig.loadCells('A3:B3')

    const monstrarPromocaoCell = sheetConfig.getCell(2, 0)
    const textoCell = sheetConfig.getCell(2, 1)

    let Cupom = ''
    let Promo = ''
    if (monstrarPromocaoCell.value === 'VERDADEIRO') {
      Cupom = genCupom()
      Promo = textoCell.value
    }

    //Nome Email Whatsapp Indica Cupon Ciente Data Promo Texto
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Indica: data.Indica,
      Cupom,
      Ciente: data.Ciente,
      Data: moment().format('DD/MM/YYYY h:mm:ss'),
      Promo,
      Texto: data.Texto
    })
    res.end(
      JSON.stringify({
        showCupom: Cupom !== '',
        Cupom,
        Promo
      })
    )
  } catch (err) {
    console.error(err)
    res.end('error')
  }
}
