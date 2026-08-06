import React from 'react'
import { featuredProperties } from '../data/properties'
import PropertyCard from '../components/common/PropertyCard'

export function FeaturedProperties() {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f05a22]">
            Exclusive Homestays
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight mt-2 mb-4">
            Featured Villas in Kumarhatti
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Discover our flagship mountain retreats — Amber Moon & The White Rose — crafted for privacy, luxury, and breathtaking hill views.
          </p>
        </div>

        {/* Property Cards Stack */}
        <div className="space-y-12">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedProperties
