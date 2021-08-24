import React from 'react'
import Image from 'next/image'
import logoPBox from '../../public/img/logo_paplpitebox.png'
import Link from 'next/link'

export default function Header() {
  return (
    <React.Fragment>
      <header
        className="flex flex-col h-24 p-5
                 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700"
      >
        <div className="flex container m-auto items-center justify-between pl-5 pr-5">
          <div className="w-20">
            <Link href="/">
              <a>
                <Image src={logoPBox} alt="Palpite-Box" />
              </a>
            </Link>
          </div>
          <div>
            <p className="text-sm sm:text-lg md:text-2xl text-white font-semibold text-shadow-md">
              Sua opinião é muito importante
            </p>
          </div>
        </div>
      </header>
      <nav className="flex flex-col h-8 bg-blue-200 shadow-md">
        <div className="flex container mx-auto my-auto items-center justify-between pl-5 pr-5">
          <Link href="/about">
            <a className="text-sm font-semibold text-shadow-md text-gray-600 hover:text-gray-800">
              Saiba mais sobre o Palpite-Box
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-sm font-semibold text-shadow-md text-gray-600 hover:text-gray-800">
              Contato
            </a>
          </Link>
        </div>
      </nav>
    </React.Fragment>
  )
}
