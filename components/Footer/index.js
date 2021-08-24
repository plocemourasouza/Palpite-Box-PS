import Image from 'next/image'
import logoDevPleno from '../../public/img/logo_devpleno.png'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="h-24 mt-6 absolute md:bottom-0 w-full">
      <footer className="flex flex-col h-24 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-400">
        <div className="flex container m-auto items-center justify-between px-5">
          <div>
            <p className="text-sm text-white font-semibold text-shadow-md">
              <span className="hidden md:inline">
                Projeto desenvolvido por:
              </span>{' '}
              Paulo Souza /
              <span>
                <Link href="https://www.linkedin.com/in/psouza/">
                  <a className="hover:text-blue-200"> Linkedin </a>
                </Link>
              </span>
              /
              <span>
                <Link href="https://github.com/plocemourasouza">
                  <a className="hover:text-blue-200"> Github</a>
                </Link>
              </span>
            </p>
          </div>
          <div className="w-32">
            <Image src={logoDevPleno} alt="DevPleno" />
          </div>
        </div>
      </footer>
    </div>
  )
}
