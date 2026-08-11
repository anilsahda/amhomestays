import React from 'react'
import { listYourVillaData } from '../data/listYourVillaData'
import ImageCarousel from '../components/common/ImageCarousel'
import Button from '../components/common/Button'

export function ListYourVilla() {
  const { title, subtitle, bulletPoints, carouselImages } = listYourVillaData

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Column: Information & Bullets */}
        <div className="flex flex-col text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight mb-2">
            {title}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-6">
            {subtitle}
          </p>

          {/* Bullet Points List */}
          <ul className="space-y-3 mb-8 text-sm sm:text-base text-gray-700 list-disc list-inside">
            {bulletPoints.map((pt) => (
              <li key={pt.id} className="leading-relaxed">
                <span>{pt.text}</span>
                {pt.boldText && <strong className="font-bold text-gray-900">{pt.boldText}</strong>}
                {pt.afterText && <span>{pt.afterText}</span>}
              </li>
            ))}
          </ul>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="black" size="md" className="px-8 font-semibold" href="/booking">
              Book Now
            </Button>
            <Button variant="orange" size="md" className="px-8 font-semibold" href="/request-a-quote">
              Request a Quote
            </Button>
          </div>
        </div>

        {/* Right Column: Image Carousel */}
        <div className="w-full">
          <ImageCarousel images={carouselImages} />
        </div>

      </div>
    </section>
  )
}

export default ListYourVilla
