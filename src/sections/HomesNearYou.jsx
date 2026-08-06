import React from 'react'
import { homesNearYouData } from '../data/homesNearYouData'
import HomeNearYouCard from '../components/common/HomeNearYouCard'

export function HomesNearYou() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
            Homes near you
          </h2>
        </div>

        {/* 2-Column Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {homesNearYouData.map((home) => (
            <HomeNearYouCard
              key={home.id}
              title={home.title}
              location={home.location}
              image={home.image}
              link={home.link}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomesNearYou
