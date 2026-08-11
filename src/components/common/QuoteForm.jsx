import React, { useState } from 'react'
import { CheckCircle } from 'lucide-react'

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [fullName, setFullName] = useState('')
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#b89535]/10 border border-[#b89535]/30 rounded-lg p-8 text-center space-y-4 max-w-xl mx-auto my-8 animate-fadeIn">
        <CheckCircle className="w-12 h-12 text-[#b89535] mx-auto" />
        <h3 className="text-xl font-bold text-stone-800">Quote Request Received!</h3>
        <p className="text-sm text-stone-600">
          Thank you{fullName ? `, ${fullName}` : ''}! Your request has been received. Our stay manager will reach out to you with custom pricing shortly.
        </p>
        <button
          type="button"
          onClick={() => {
            setIsSubmitted(false)
            setFullName('')
            setIsCaptchaChecked(false)
          }}
          className="text-xs font-semibold text-[#b89535] hover:underline cursor-pointer pt-2"
        >
          Submit another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5 text-left">
      
      {/* Row 1: Full Name & Email Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            required
            placeholder="Enter your full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 placeholder-stone-400 bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 placeholder-stone-400 bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Phone Number & Check-in Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Phone Number
          </label>
          <input
            type="tel"
            required
            placeholder="Enter your phone number"
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 placeholder-stone-400 bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Check-in Date
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Check-out Date & Total Guests */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Check-out Date
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Total Guests
          </label>
          <input
            type="number"
            min="1"
            required
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Adults & Children (Optional) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Adults
          </label>
          <input
            type="number"
            min="1"
            required
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors"
          />
        </div>

        <div>
          <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
            Children (Optional)
          </label>
          <input
            type="number"
            min="0"
            className="w-full px-4 py-2.5 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 5: Message */}
      <div>
        <label className="block text-[13px] font-normal text-stone-600 mb-1.5">
          Message
        </label>
        <textarea
          rows={6}
          className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:border-[#b89535] text-sm text-stone-800 bg-white transition-colors resize-y min-h-[160px]"
        />
      </div>

      {/* reCAPTCHA Widget Box matching reference screenshot */}
      <div className="pt-2">
        <div className="border border-stone-300 bg-stone-50/60 rounded-xs p-3 w-[270px] flex items-center justify-between shadow-2xs">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={isCaptchaChecked}
              onChange={(e) => setIsCaptchaChecked(e.target.checked)}
              className="w-5 h-5 rounded-xs accent-[#b89535] cursor-pointer"
            />
            <span className="text-xs text-stone-700 font-normal">I'm not a robot</span>
          </label>

          <div className="flex flex-col items-center justify-center pl-2">
            <div className="w-6 h-6 text-sky-500 flex items-center justify-center font-bold text-xs">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
            </div>
            <span className="text-[9px] text-stone-400 font-semibold tracking-tighter uppercase">reCAPTCHA</span>
          </div>
        </div>
      </div>

      {/* Submit Button matching reference screenshot */}
      <div className="pt-3">
        <button
          type="submit"
          className="bg-[#b89535] hover:bg-[#a2822a] text-white px-8 py-2.5 rounded-full text-sm font-medium transition-colors cursor-pointer shadow-xs"
        >
          Request a Quote
        </button>
      </div>

    </form>
  )
}

export default QuoteForm
