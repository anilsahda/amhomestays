import React from 'react'
import Button from '../../components/common/Button'
import { amberMoonData } from '../../data/amberMoonData'

export function AmberMoonHero() {
  const { hero } = amberMoonData

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (7 cols on desktop - 3/5 width ratio) */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold text-gray-900 mb-6 leading-tight">
              {hero.title}
            </h1>

            <div className="space-y-4 text-gray-600 text-base leading-relaxed mb-8">
              <p>
                Nestled in a peaceful and scenic setting, <strong className="font-semibold text-gray-800">Amber Moon</strong> is an exclusive homestay designed for families, friends, and small groups seeking comfort, privacy, and modern amenities. The property features <strong className="font-semibold text-gray-800">3 beautifully furnished bedrooms</strong> and comfortably accommodates up to <strong className="font-semibold text-gray-800">8–10 guests</strong>, making it ideal for weekend getaways, celebrations, workations, and relaxing vacations.
              </p>
              <p>
                Amber Moon offers thoughtfully designed living spaces, including a spacious living room, a fully equipped modern kitchen, an entertainment and games room, and contemporary bathrooms. Every corner of the home has been crafted to provide guests with a warm, luxurious, and memorable stay experience.
              </p>
              <p>
                Whether you&apos;re planning a relaxing weekend retreat, a family vacation, or a peaceful work-from-the-hills experience, Amber Moon provides an exclusive setting where nature and modern comfort come together.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
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

          {/* Right Column (5 cols on desktop - 2/5 width ratio) */}
          <div className="md:col-span-5 w-full h-full flex items-center justify-center">
            <div className="overflow-hidden rounded-2xl shadow-md w-full">
              <img
                src={hero.image}
                alt="Amber Moon Cottage Exterior"
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

export default AmberMoonHero
