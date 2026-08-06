import React from 'react'
import { availableWeekendData } from '../data/availableWeekendData'
import GalleryCard from '../components/common/GalleryCard'
import Button from '../components/common/Button'

export function AvailableThisWeekend() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Available This Weekend
          </h2>
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <Button variant="black" size="lg" className="px-8 font-semibold">
            Book Now
          </Button>
          <Button variant="orange" size="lg" className="px-8 font-semibold">
            Request a Quote
          </Button>
        </div>

        {/* 3-Column Collection Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {availableWeekendData.map((item) => (
            <GalleryCard
              key={item.id}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default AvailableThisWeekend
