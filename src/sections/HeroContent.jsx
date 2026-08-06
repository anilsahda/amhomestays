import React from 'react'
import Button from '../components/common/Button'

export function HeroContent() {
  return (
    <div className="flex flex-col items-center justify-center text-center
    ">
      {/* Subtitle */}
      <p className="text-xl sm:text-2xl font-bold text-stone-800 tracking-wide mb-2">
        Introducing
      </p>

      {/* Main Title matching screenshot */}
      <h1 className="text-2xl sm:text-2xl lg:text-6xl font-normal text-stone-800 tracking-tight mb-8">
        Wunder Homes
      </h1>

      {/* Search Input Bar matching screenshot */}
      <div className="w-full max-w-2xl mb-8">
        <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center bg-white/50 border border-stone-400 rounded-sm overflow-hidden shadow-inner">
          <input
            type="text"
            placeholder=""
            className="w-full px-4 py-2.5 text-stone-900 bg-transparent focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-stone-700 hover:bg-stone-800 text-white px-6 py-2.5 text-sm font-medium transition-colors cursor-pointer"
          >
            Search
          </button>
        </form>
      </div>

      {/* Two Action Pill Buttons matching screenshot */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button variant="black" size="lg" className="px-8">
          Book Now
        </Button>
        <Button variant="orange" size="lg" className="px-8">
          Request a Quote
        </Button>
      </div>
    </div>
  )
}

export default HeroContent
