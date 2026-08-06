import React from 'react'
import HeroContent from './HeroContent'
import { Phone, MessageCircle } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative w-full min-h-[620px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image of Luxury Villa Interior matching screenshot */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/28300250/pexels-photo-28300250.jpeg"
          alt="Wunder Homes Luxury Villa Interior"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle dark tint overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Centered Frosted Glass Overlay Card matching screenshot */}
      <div className="relative z-10 w-full max-w-4xl mx-4 px-6 py-12 sm:px-12 sm:py-16 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/60 text-center">
        <HeroContent />
      </div>

      {/* Floating Action Buttons (Call & WhatsApp) at bottom-right matching screenshot */}
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
