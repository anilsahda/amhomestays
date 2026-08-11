import React from 'react'
import { whiteRoseData } from '../../data/whiteRoseData'

export function WhiteRoseKitchen() {
  const { kitchen } = whiteRoseData

  return (
    <section className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 cols on desktop - Heading & Text) */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {kitchen.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              {kitchen.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Column (6 cols on desktop - Kitchen Image) */}
          <div className="md:col-span-6 w-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src={kitchen.image}
                alt="Fully Equipped Modern Kitchen"
                title="DSC07006-HDR"
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

export default WhiteRoseKitchen
