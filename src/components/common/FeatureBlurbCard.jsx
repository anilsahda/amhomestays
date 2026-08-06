import React from 'react'

export function FeatureBlurbCard({ title, location, description, image, align = 'left' }) {
  const isCentered = align === 'center'

  return (
    <div className={`flex flex-col bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm transition-shadow duration-300 hover:shadow-md ${isCentered ? 'text-center' : 'text-left'}`}>
      {/* Feature Image */}
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[8/5] object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Feature Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {title}
        </h4>
        {location && (
          <p className="text-sm font-medium text-gray-700 mb-1">
            {location}
          </p>
        )}
        <p className="text-sm text-gray-600 leading-relaxed mt-1">
          {description}
        </p>
      </div>
    </div>
  )
}

export default FeatureBlurbCard
