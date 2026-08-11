import React from 'react'
import Button from '../../components/common/Button'
import { whiteRoseData } from '../../data/whiteRoseData'

export function WhiteRoseHero() {
  const { hero } = whiteRoseData

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols on desktop - text and buttons) */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              {hero.title}
            </h1>

            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                Nestled amidst the serene landscapes of Dagshai, Himachal Pradesh,{' '}
                <strong className="font-semibold text-gray-800">The White Rose Villa</strong> is a spacious and elegant mountain retreat designed for families, friends, and group getaways. With{' '}
                <strong className="font-semibold text-gray-800">4 beautifully appointed bedrooms</strong>, the villa comfortably accommodates{' '}
                <strong className="font-semibold text-gray-800">up to 12 guests</strong>, offering the perfect blend of comfort, privacy, and scenic beauty.
              </p>
              <p>
                Surrounded by peaceful hills and fresh mountain air, The White Rose Villa provides a relaxing escape where guests can unwind, reconnect, and create lasting memories. Whether you’re planning a family vacation, a weekend retreat, or a special celebration, this villa offers everything needed for a memorable stay.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-start gap-4">
              <a
                href={hero.bookNowUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="black" size="md">
                  Book Now
                </Button>
              </a>
              <Button variant="orange" size="md" href="/request-a-quote">
                Request a Quote
              </Button>
            </div>
          </div>

          {/* Right Column (5 cols on desktop - property hero image) */}
          <div className="md:col-span-5 w-full h-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src={hero.image}
                alt="The White Rose Villa Exterior"
                title="the white rose"
                className="w-full h-auto object-cover max-h-[480px] rounded-2xl transition-transform duration-300 hover:scale-[1.01]"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteRoseHero
