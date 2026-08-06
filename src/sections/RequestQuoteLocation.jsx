import React from 'react'
import QuoteForm from '../components/common/QuoteForm'
import LocationMap from '../components/common/LocationMap'

export function RequestQuoteLocation() {
  return (
    <section id="contact" className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Request A Quote */}
        <div className="flex flex-col text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight mb-2">
            Request A Quote
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Complete the form below to receive your stay quote.
          </p>
          <QuoteForm />
        </div>

        {/* Right Column: Our Location */}
        <div className="flex flex-col text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight mb-6">
            Our Location
          </h3>
          <LocationMap />
        </div>

      </div>
    </section>
  )
}

export default RequestQuoteLocation
