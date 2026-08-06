import React from 'react'
import { Star, MapPin, Sparkles } from 'lucide-react'

export function HeroImage() {
  return (
    <div className="relative w-full flex items-center justify-center">
      {/* Main Image Frame Container */}
      <div className="relative w-full aspect-[4/3] max-w-lg lg:max-w-none rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/15 border-4 border-white">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
          alt="Amber Moon & The White Rose Luxury Villas in Kumarhatti"
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

        {/* Top Right Luxury Badge */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold text-stone-900 flex items-center gap-1.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-700" />
          <span>Himachal Pradesh</span>
        </div>
      </div>

      {/* Floating Villa Highlight Overlay */}
      <div className="absolute bottom-6 left-6 right-6 sm:left-8 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 max-w-md">
        <div className="w-12 h-12 rounded-xl bg-amber-700 text-white flex items-center justify-center shrink-0 shadow-md">
          <Star className="w-6 h-6 fill-amber-300 text-amber-300" />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-700 uppercase tracking-wider">
            <span>Premium Homestays</span>
          </div>
          <h4 className="text-base font-bold text-gray-900 truncate">Amber Moon & The White Rose</h4>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <MapPin className="w-3 h-3 text-gray-400" />
            <span>Kumarhatti, Himachal Pradesh</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroImage
