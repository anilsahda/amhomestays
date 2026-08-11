import React from 'react'
import { whiteRoseData } from '../../data/whiteRoseData'

export function WhiteRoseBedrooms() {
  const { bedrooms } = whiteRoseData

  return (
    <section className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (6 cols on desktop - Bedrooms Image) */}
          <div className="md:col-span-6 w-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src={bedrooms.image}
                alt="Comfortable Bedrooms with Scenic Views"
                title="DSC07033-HDR (3)"
                className="w-full h-auto object-cover max-h-[480px] rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column (6 cols on desktop - Heading & Text) */}
          <div className="md:col-span-6 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {bedrooms.title}
            </h2>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>
                Each of the{' '}
                <strong className="font-semibold text-gray-800">4 spacious bedrooms</strong>{' '}
                is thoughtfully designed to provide maximum comfort and relaxation. Large windows welcome natural light and offer beautiful views of the surrounding hills, creating a peaceful atmosphere for restful nights and refreshing mornings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteRoseBedrooms
