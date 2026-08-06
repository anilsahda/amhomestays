import React from 'react'
import { popularFacilitiesData } from '../data/popularFacilitiesData'
import FacilityItem from '../components/common/FacilityItem'

export function PopularFacilities() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2">
            Popular Facilities
          </h2>
          <p className="text-sm sm:text-base text-gray-600">
            Explore the most loved facilities offered by our property.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {popularFacilitiesData.map((item) => (
            <FacilityItem
              key={item.id}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularFacilities
