import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export default function contact() {
  return (
    <React.Fragment>
      <PageTitle title="Contato" />
      <h1>Contato</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
