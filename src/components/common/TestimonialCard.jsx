import React from 'react'

export function TestimonialCard({ name, location, stars, review }) {
  // Render star ratings matching original ★★★★★ / ★★★★☆
  const fullStars = '★'.repeat(stars)
  const emptyStars = '☆'.repeat(5 - stars)

  return (
    <div className="bg-[#f9f9f9] rounded-[10px] p-5 shadow-xs text-left transition-transform duration-200 hover:-translate-y-1 flex flex-col justify-between">
      <div>
        {/* Reviewer Name */}
        <h4 className="text-lg font-bold text-[#333] mb-0.5">
          {name}
        </h4>

        {/* Location */}
        <div className="text-xs sm:text-sm text-[#777] mb-2">
          {location}
        </div>

        {/* Gold Star Rating */}
        <div className="text-[#f5b301] text-base mb-2">
          <span>{fullStars}</span>
          <span className="text-gray-300">{emptyStars}</span>
        </div>

        {/* Review Paragraph */}
        <p className="text-sm text-[#444] leading-relaxed">
          {review}
        </p>
      </div>
    </div>
  )
}

export default TestimonialCard
