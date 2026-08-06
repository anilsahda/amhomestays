import React from 'react'
import Button from './Button'

export function ExperienceCard({ title, description, icon, link = '#' }) {
  return (
    <div className="flex flex-col items-center justify-between text-center bg-white p-6 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col items-center">
        {/* Experience Icon */}
        <div className="w-12 h-12 mb-4 flex items-center justify-center">
          <img src={icon} alt={title} className="max-w-full max-h-full object-contain" />
        </div>

        {/* Experience Title */}
        <h4 className="text-lg font-bold text-gray-800 tracking-wider mb-2">
          {title}
        </h4>

        {/* Experience Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Explore Action Button */}
      <a href={link} className="inline-block">
        <Button variant="orange" size="sm" className="px-6 py-2 rounded-full font-semibold">
          Explore
        </Button>
      </a>
    </div>
  )
}

export default ExperienceCard
