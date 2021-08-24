import React, { useState } from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export default function Form() {
  const [pes, setPes] = useState({
    Nome: '',
    Email: '',
    Whatsapp: '',
    Indica: '',
    Texto: '',
    Ciente: true
  })

  const stopDefAction = evt => {
    evt.preventDefault()
  }

  const [success, setSuccess] = useState(false)
  const [retorno, setRetorno] = useState({})

  const sendData = async () => {
    stopDefAction
    try {
      const resp = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify(pes)
      })
      const data = await resp.json()
      setSuccess(true)
      setRetorno(data)
    } catch (err) {
      console.log(err)
    }
  }

  const onChange = evt => {
    const key = evt.target.name
    const value =
      evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value

    setPes(old => ({
      ...old,
      [key]: value
    }))
  }

  return (
    <React.Fragment>
      <PageTitle title="Pesquisa" />
      <header className="text-center mt-4 md:mt-16 md:mb-6">
        <p className="text-gray-700 text-xl md:text-2xl font-bold text-shadow-md">
          {!success && 'Críticas e Sugestões'}
          {success && 'Muito obrigado por sua participação'}
        </p>
      </header>
      <div className="flex flex-col items-center w-10/12 lg:w-8/12 mx-auto py-4 mt-2 border border-gray-100 rounded-md shadow-md">
        <div className="w-10/12 lg:w-10/12">
          {!success && (
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome do participante */}
                <label className="block">
                  <span className="text-gray-700">Seu nome:</span>
                  <input
                    type="text"
                    className="form-input mt-1 py-1 px-1 block w-full rounded-md bg-gray-50 border-gray-100 focus:border-gray-300 focus:bg-white focus:ring-0"
                    placeholder="Nome completo"
                    name="Nome"
                    onChange={onChange}
                    required
                  />
                </label>

                {/* E-mail do participante */}
                <label className="block">
                  <span className="text-gray-700">E-mail:</span>
                  <input
                    type="email"
                    className="form-input mt-1 py-1 px-1 block w-full rounded-md bg-gray-50 border-gray-100 focus:border-gray-300 focus:bg-white focus:ring-0"
                    placeholder="mail@mail.com"
                    name="Email"
                    onChange={onChange}
                  />
                </label>

                {/* Whatsapp do participante */}
                <label className="block">
                  <span className="text-gray-700">WhatsApp:</span>
                  <input
                    type="number"
                    className="form-input mt-1 py-1 px-1 block w-full rounded-md bg-gray-50 border-gray-100 focus:border-gray-300 focus:bg-white focus:ring-0"
                    placeholder="(55) 9 9999-9999"
                    name="Whatsapp"
                    onChange={onChange}
                  />
                </label>

                {/* Indicação Sim ou Não */}
                <label className="block text-center">
                  <span className="text-gray-700">
                    Você nos indicaria a um amigo?
                  </span>
                  <div className="flex mt-2">
                    <div className="flex items-center mx-auto space-x-2">
                      <label className="flex items-center space-x-1">
                        <input
                          type="radio"
                          className="form-radio"
                          value="S"
                          name="Indica"
                          onChange={onChange}
                        />
                        <span className="">Sim </span>
                      </label>
                      <label className="flex items-center space-x-1">
                        <input
                          type="radio"
                          className="form-radio"
                          value="N"
                          name="Indica"
                          onChange={onChange}
                        />
                        <span className="">Não</span>
                      </label>
                    </div>
                  </div>
                </label>

                {/* Texto para descrição da crítica ou sugestão */}
                <label className="block md:col-span-2">
                  <span className="text-gray-700">Sua crítica ou sugestão</span>
                  <textarea
                    className="mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
                    rows="4"
                    name="Texto"
                    onChange={onChange}
                  ></textarea>
                </label>

                {/* Checkbox aceite sobre utilização dos dados */}
                <div className="block md:col-span-2">
                  <div className="mt-2">
                    <label className="inline-flex items-center">
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        name="Ciente"
                        defaultChecked
                        onClick={onChange}
                      />
                      <span className="ml-2 text-xs">
                        Estou ciente que as informações coletadas não serão
                        compartilhadas com terceiros.
                      </span>
                    </label>
                  </div>
                </div>

                {/* Confirmar */}
                <div className="block md:col-span-2">
                  <div className="flex flex-col items-center">
                    <button
                      onClick={sendData}
                      className="text-white font-semibold text-shadow-md px-6 py-4
                        bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 
                        rounded-lg shadow-lg hover:shadow"
                    >
                      Confirmar
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}
          {success && (
            <React.Fragment>
              <div
                className="flex flex-col bg-yellow-100 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3 mt-40 mb-64 md:mb-52"
                role="alert"
              >
                <div className="flex flex-col items-center">
                  <p className="font-semibold">ID da participação</p>
                  <p className="font-bold">{retorno.Cupom}</p>
                  <p className="text-sm my-2 text-center">{retorno.Promo}</p>
                </div>
              </div>
              <div className="flex flex-col items-center mb-5">
                <Link href="/">
                  <a className="text-white font-semibold text-shadow-md bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 px-6 py-4 rounded-lg shadow-lg hover:shadow">
                    Concluir
                  </a>
                </Link>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}
