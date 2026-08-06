import React from 'react'
import { MapPin, Star, CheckCircle2 } from 'lucide-react'
import Button from './Button'

export function PropertyCard({ property }) {
  if (!property) return null

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-stone-200/80 flex flex-col lg:flex-row hover:shadow-xl transition-shadow duration-300">
      
      {/* Property Image Showcase */}
      <div className="relative lg:w-1/2 aspect-[4/3] lg:aspect-auto overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {/* Top Floating Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold text-[#f05a22] shadow-sm uppercase tracking-wider">
          {property.badge}
        </div>
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-stone-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>{property.rating}</span>
          <span className="text-stone-400">({property.reviews})</span>
        </div>
      </div>

      {/* Property Details Content */}
      <div className="p-6 sm:p-8 lg:w-1/2 flex flex-col justify-between">
        <div>
          {/* Location Badge */}
          <div className="flex items-center gap-1.5 text-xs font-semibold text-[#f05a22] uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{property.location}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mb-3">
            {property.title}
          </h3>

          {/* Description */}
          <p className="text-stone-600 text-sm leading-relaxed mb-6">
            {property.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-3 mb-8">
            <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest">
              Villa Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {property.features.map((feat, index) => (
                <div key={index} className="flex items-start gap-2 text-xs font-medium text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-[#f05a22] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-stone-900">{feat.name}</span>
                    <span className="text-stone-500 font-normal text-[11px] line-clamp-1">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons matching Wunderhomes style */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-stone-100">
          <Button variant="black" size="md" className="flex-1 justify-center">
            Book Now
          </Button>
          <Button variant="orange" size="md" className="flex-1 justify-center">
            Request a Quote
          </Button>
        </div>
      </div>

    </div>
  )
}

export default PropertyCard
