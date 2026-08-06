import React from 'react'

export function HomeNearYouCard({ title, location, image, link = '#' }) {
  return (
    <div className="flex flex-col group text-left">
      {/* Clickable Image Container */}
      <a href={link} className="block overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[8/5] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Card Content Text */}
      <div className="mt-3">
        <a href={link} className="inline-block">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
            {title}
          </h2>
        </a>
        <p className="text-sm text-gray-600 mt-1">
          <span>{location}</span>
        </p>
      </div>
    </div>
  )
}

export default HomeNearYouCard
