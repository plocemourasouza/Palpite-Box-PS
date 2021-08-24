import { GoogleSpreadsheet } from 'google-spreadsheet'
import { fromBase64 } from '../../utils/fromBase64'

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY)
    })
    await doc.loadInfo()

    /** CARREGA AS INFORMAÇÕES DA PLANILHA */
    const sheet = doc.sheetsByIndex[2]
    await sheet.loadCells('A3:B3')
    const monstrarPromocaoCell = sheet.getCell(2, 0)
    const textoCell = sheet.getCell(2, 1)

    res.end(
      JSON.stringify({
        showCupom: monstrarPromocaoCell.value === 'VERDADEIRO',
        message: textoCell.value
      })
    )
  } catch (err) {
    console.log(err)
    res.end(
      JSON.stringify({
        showCupom: false,
        message: ''
      })
    )
  }
}
