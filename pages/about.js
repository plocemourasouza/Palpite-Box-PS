import React from 'react'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

export default function about() {
  return (
    <React.Fragment>
      <PageTitle title="Sobre" />
      <h1>sobre novo</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </React.Fragment>
  )
}
