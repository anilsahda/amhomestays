import React from 'react'

export function LocationMap() {
  return (
    <div className="w-full space-y-6 text-left">
      {/* Address Details */}
      <div className="text-sm text-gray-700 leading-relaxed">
        <strong className="text-base text-gray-900 font-bold block mb-1">Amber Moon</strong>
        <p>V2XR+6M8, Haripur,</p>
        <p>Himachal Pradesh 173209</p>
      </div>

      {/* Embedded Google Map */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <iframe
          src="https://www.google.com/maps?q=Amber+Moon,+V2XR+6M8,+Haripur,+Himachal+Pradesh+173209&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Wunder Homes Location Map"
        />
      </div>

      {/* Contact Details List */}
      <div className="space-y-3 pt-2 text-sm text-gray-800">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.wunderhomes.in/wp-content/uploads/2025/11/phone-call.png"
            alt="Phone"
            className="w-5 h-5 shrink-0"
          />
          <a href="tel:+919350584611" className="hover:underline font-medium text-gray-900">
            +91 9350584611
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.wunderhomes.in/wp-content/uploads/2025/11/mail.png"
            alt="Email"
            className="w-5 h-5 shrink-0"
          />
          <a href="mailto:info@wunderhomes.in" className="hover:underline font-medium text-gray-900">
            info@wunderhomes.in
          </a>
        </div>

        {/* Address */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.wunderhomes.in/wp-content/uploads/2025/11/placeholder-1.png"
            alt="Location Pin"
            className="w-5 h-5 shrink-0"
          />
          <span className="font-medium text-gray-900">
            Amber Moon, V2XR+6M8, Haripur, Himachal Pradesh 173209
          </span>
        </div>
      </div>
    </div>
  )
}

export default LocationMap
