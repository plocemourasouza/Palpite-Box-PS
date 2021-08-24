import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <div className="relative">{children}</div>
      <Footer />
    </div>
  )
}
