import React, { useEffect } from 'react'
import Navbar from '../components/layout/Navbar'
import RequestQuoteStandaloneForm from '../sections/RequestQuoteStandaloneForm'
import Footer from '../components/layout/Footer'

export function RequestQuotePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-4">
        <RequestQuoteStandaloneForm />
      </main>
      <Footer />
    </div>
  )
}

export default RequestQuotePage
