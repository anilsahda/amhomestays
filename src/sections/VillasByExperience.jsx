import React from 'react'
import { villasByExperienceData } from '../data/villasByExperienceData'
import ExperienceCard from '../components/common/ExperienceCard'
import Button from '../components/common/Button'

export function VillasByExperience() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Discover Villas by Experience
          </h2>
        </div>

        {/* 4-Column Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {villasByExperienceData.map((item) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>

        {/* Bottom Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="black" size="lg" className="px-8 font-semibold" href="/booking">
            Book Now
          </Button>
          <Button variant="orange" size="lg" className="px-8 font-semibold" href="/request-a-quote">
            Request a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}

export default VillasByExperience
