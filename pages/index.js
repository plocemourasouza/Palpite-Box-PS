import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import PageTitle from '../components/PageTitle'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Home() {
  const { data, error } = useSWR('/api/get-promo', fetcher)

  return (
    <div>
      <PageTitle title="Seja bem-vindo" />
      <main>
        <header className="text-center mt-10 md:mt-16">
          <p className="text-gray-700 text-md md:text-2xl font-bold text-shadow-md">
            Para atender melhor nossos clientes,
            <br /> estamos sempre abertos a ouvir a sua opinião.
          </p>
        </header>
        <div className="flex flex-col my-auto">
          <div className="px-6">
            <p className="text-gray-700 text-sm font-semibold text-center mt-12 md:mt-16">
              Sua participação gera valor para nossa empresa e benefícios para
              você.
            </p>
            <div className="flex flex-col items-center mt-16">
              <Link href="/form">
                <a className="text-white font-semibold text-shadow-md bg-gradient-to-b from-blue-500 via-blue-600 to-blue-500 px-6 py-4 rounded-lg shadow-lg hover:shadow">
                  Dar Opinião ou Sugestão
                </a>
              </Link>
            </div>
            {!data && (
              <p className="text-gray-700 text-sm text-center mt-16">
                Carregando...
              </p>
            )}
            {!error && data && data.showCupom && (
              <p className="text-gray-700 text-sm text-center mt-16 ">
                {data.message}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
