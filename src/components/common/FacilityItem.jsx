import React from 'react'

export function FacilityItem({ title, icon }) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow duration-200">
      {/* Icon Image */}
      <div className="w-9 h-9 shrink-0 flex items-center justify-center">
        <img src={icon} alt={title} className="w-full h-full object-contain" />
      </div>

      {/* Facility Title */}
      <h4 className="text-sm font-semibold text-gray-800">
        {title}
      </h4>
    </div>
  )
}

export default FacilityItem
