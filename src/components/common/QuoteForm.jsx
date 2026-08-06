import React from 'react'

export function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
      </div>

      {/* Row 2: Phone & Check-in Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Check-in Date</label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
      </div>

      {/* Row 3: Check-out Date & Total Guests */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Check-out Date</label>
          <input
            type="date"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Total Guests</label>
          <input
            type="number"
            min="1"
            placeholder="Total guests"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
      </div>

      {/* Row 4: Adults & Children */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Adults</label>
          <input
            type="number"
            min="1"
            placeholder="Number of adults"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-700 mb-1">Children (Optional)</label>
          <input
            type="number"
            min="0"
            placeholder="Number of children"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800"
          />
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
        <textarea
          rows={4}
          placeholder="Your message or special requirements..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 text-sm text-gray-800 min-h-[120px]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full sm:w-auto px-8 py-3 rounded-full text-white font-medium text-base bg-gradient-to-r from-[#c9a24d] to-[#a07c2e] hover:opacity-95 transition-opacity cursor-pointer shadow-sm"
        >
          Request a Quote
        </button>
      </div>
    </form>
  )
}

export default QuoteForm
