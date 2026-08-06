import React from 'react'

export function GalleryCard({ title, image, link = '#' }) {
  return (
    <div className="relative overflow-hidden rounded-xl shadow-md group">
      {/* Clickable Image Container */}
      <a href={link} className="block overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[8/5] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      {/* Overlay Text Label matching .slide-text in original website */}
      <div className="absolute bottom-5 left-5 bg-black/40 backdrop-blur-xs text-white px-5 py-2.5 rounded-lg font-semibold text-lg sm:text-xl tracking-wide pointer-events-none">
        {title}
      </div>
    </div>
  )
}

export default GalleryCard
