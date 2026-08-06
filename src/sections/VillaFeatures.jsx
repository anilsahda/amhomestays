import React from 'react'
import { villaFeaturesData } from '../data/villaFeaturesData'
import FeatureBlurbCard from '../components/common/FeatureBlurbCard'

export function VillaFeatures() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* 3-Column Grid for Villa Feature Blurbs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {villaFeaturesData.map((item) => (
            <FeatureBlurbCard
              key={item.id}
              title={item.title}
              location={item.location}
              description={item.description}
              image={item.image}
              align={item.align}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default VillaFeatures
