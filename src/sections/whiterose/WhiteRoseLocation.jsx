import React from 'react'
import { whiteRoseData } from '../../data/whiteRoseData'
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6'

export function WhiteRoseLocation() {
  const { location } = whiteRoseData

  return (
    <section id="contact" className="py-12 md:py-16 bg-stone-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
          {location.title}
        </h3>

        {/* Embedded Responsive Google Map */}
        <div className="w-full overflow-hidden rounded-2xl shadow-sm mb-8 border border-gray-200">
          <iframe
            title="The White Rose Google Map Location"
            src={location.mapUrl}
            className="w-full h-72 sm:h-96 md:h-[420px] border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Info List */}
        <div className="flex flex-col gap-4 text-base text-gray-800">
          {/* Phone */}
          <div className="flex items-center gap-3">
            <img
              src={location.icons.phone}
              alt="Phone Icon"
              className="w-5 h-5 object-contain"
            />
            <a
              href={`tel:${location.phone.replace(/\s+/g, '')}`}
              className="hover:text-[#f05a22] transition-colors"
            >
              {location.phone}
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3">
            <img
              src={location.icons.email}
              alt="Email Icon"
              className="w-5 h-5 object-contain"
            />
            <a
              href={`mailto:${location.email}`}
              className="hover:text-[#f05a22] transition-colors"
            >
              {location.email}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <img
              src={location.icons.address}
              alt="Location Icon"
              className="w-5 h-5 object-contain mt-0.5"
            />
            <span>{location.address}</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4 mt-2 border-t border-gray-200">
            <span className="text-sm font-semibold text-gray-700">
              Follow us:
            </span>

            {location.socialLinks.map((social) => {
              const Icon =
                social.name === 'Facebook'
                  ? FaFacebookF
                  : social.name === 'Instagram'
                    ? FaInstagram
                    : social.name === 'YouTube'
                      ? FaYoutube
                      : FaXTwitter

              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-gray-600 hover:text-[#f05a22] transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhiteRoseLocation
