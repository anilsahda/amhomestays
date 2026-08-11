import React from 'react'
import Button from '../components/common/Button'

export function AboutWelcome() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Headings, Text & CTAs */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to Wunder Homes
            </h1>
            
            <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
              <p>
                At Wunder Homes, we believe that every journey deserves a place that feels extraordinary. Nestled amidst the breathtaking landscapes of Himachal Pradesh, we offer thoughtfully curated luxury villas, cottages, and homestays designed to provide comfort, privacy, and unforgettable experiences.
              </p>
              <p>
                Whether you&apos;re seeking a peaceful mountain retreat, a family vacation, a romantic getaway, or a work-from-the-hills escape, our properties are carefully selected to ensure every stay is memorable and hassle-free.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="/booking" 
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

          {/* Right Column: Featured Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src="https://www.wunderhomes.in/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-21-at-11.52.46-AM-2.jpeg"
                alt="Wunder Homes Luxury Stay in Himachal Pradesh"
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

export default AboutWelcome
