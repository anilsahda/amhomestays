import React from 'react'
import QuoteForm from '../components/common/QuoteForm'

export function RequestQuoteStandaloneForm() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        
        {/* Centered Header Title & Subtitle matching reference screenshot */}
        <h1 className="text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight mb-2">
          Request a Quote
        </h1>
        <p className="text-sm text-stone-500 mb-10">
          Complete the form below to receive your stay quote.
        </p>

        {/* Form Container (Form only, no location map) */}
        <div className="w-full">
          <QuoteForm />
        </div>

      </div>
    </section>
  )
}

export default RequestQuoteStandaloneForm
