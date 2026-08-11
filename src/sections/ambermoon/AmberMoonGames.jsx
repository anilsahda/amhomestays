import React from 'react'
import { amberMoonData } from '../../data/amberMoonData'

export function AmberMoonGames() {
  const { games } = amberMoonData

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Copy */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {games.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed">
              {games.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src={games.image}
                alt="Entertainment and Games Room at Amber Moon"
                className="w-full h-auto object-cover max-h-[480px] rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmberMoonGames
