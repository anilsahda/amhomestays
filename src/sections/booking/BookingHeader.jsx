import React from 'react'
import { MapPin, Clock, Phone, Mail, ShieldCheck } from 'lucide-react'
import { bookingData } from '../../data/bookingData'

export function BookingHeader() {
  const { property } = bookingData

  return (
    <div className="bg-stone-900 text-white border-b border-stone-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side: Property Identity */}
        <div className="flex items-start gap-4">
          {property.logo ? (
            <img
              src={property.logo}
              alt={property.name}
              className="w-14 h-14 object-contain rounded-xl bg-white p-1.5 shadow-md shrink-0 mt-1 md:mt-0"
            />
          ) : (
            <div className="w-14 h-14 rounded-xl bg-[#f05a22] flex items-center justify-center font-bold text-xl text-white shrink-0">
              WH
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#f05a22] bg-[#f05a22]/10 px-2.5 py-0.5 rounded-full border border-[#f05a22]/20">
                Direct Booking
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                Best Rate Guaranteed
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {property.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-stone-300 mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#f05a22]" />
                {property.address}
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Check-in: {property.checkInTime} | Check-out: {property.checkOutTime}
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Quick Support Contacts */}
        <div className="flex flex-wrap md:flex-col items-start md:items-end gap-3 text-xs text-stone-300 w-full md:w-auto pt-3 md:pt-0 border-t md:border-t-0 border-stone-800">
          <a
            href={`tel:${property.phone}`}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-750 px-3.5 py-2 rounded-lg text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#f05a22]" />
            <span className="font-semibold">{property.phone}</span>
          </a>
          <a
            href={`mailto:${property.email}`}
            className="flex items-center gap-2 bg-stone-800 hover:bg-stone-750 px-3.5 py-2 rounded-lg text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#f05a22]" />
            <span className="font-medium">{property.email}</span>
          </a>
        </div>

      </div>
    </div>
  )
}

export default BookingHeader
