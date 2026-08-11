import React, { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import { Phone, MessageCircle } from 'lucide-react'

// Villa background images for slideshow
const heroImages = [
  'https://images.pexels.com/photos/28300250/pexels-photo-28300250.jpeg',
  'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-668-Room1.jpg',
  'https://www.wunderhomes.in/wp-content/uploads/2026/01/the-white-rose-1.png',
  'https://www.wunderhomes.in/wp-content/uploads/2025/11/Untitled-design-2025-11-05T105959.980.png',
  'https://www.wunderhomes.in/wp-content/uploads/2026/06/DSC07009-HDR-scaled.jpg',
  'https://www.wunderhomes.in/wp-content/uploads/2026/06/DSC07006-HDR-scaled.jpg',
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Change image every 4.5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      
      {/* Background Animated Slideshow (Ken Burns Zoom & Crossfade) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-stone-900">
        {heroImages.map((imgUrl, index) => {
          const isActive = index === currentImageIndex
          return (
            <img
              key={imgUrl}
              src={imgUrl}
              alt={`Wunder Homes Villa background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out transform ${
                isActive
                  ? 'opacity-100 scale-110 duration-[5000ms]'
                  : 'opacity-0 scale-100 duration-1000'
              }`}
            />
          )
        })}

        {/* Dark Overlay Tint */}
        <div className="absolute inset-0 bg-black/25 z-10" />
      </div>

      {/* Centered Frosted Glass Overlay Card */}
      <div className="relative z-20 w-full max-w-4xl mx-4 px-6 py-12 sm:px-12 sm:py-16 bg-white/15 backdrop-blur-md rounded-2xl shadow-2xl border border-white/60 text-center">
        <HeroContent />
      </div>

      {/* Floating Action Buttons (Call & WhatsApp) at bottom-right */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="tel:+919350584611"
          aria-label="Call Us"
          className="w-12 h-12 bg-blue-500 hover:bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <Phone className="w-5 h-5 fill-white text-white" />
        </a>
        <a
          href="https://wa.me/919350584611"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact on WhatsApp"
          className="w-12 h-12 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        >
          <MessageCircle className="w-6 h-6 fill-white text-white" />
        </a>
      </div>

    </section>
  )
}

export default Hero
