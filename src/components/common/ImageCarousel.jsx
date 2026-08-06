import React, { useState } from 'react'

export function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-[800px] mx-auto overflow-hidden rounded-[10px] shadow-lg group">
      {/* Slides Track Container */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Slide ${index + 1}`}
            className="w-full shrink-0 aspect-[16/10] object-cover"
          />
        ))}
      </div>

      {/* Previous Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors"
        aria-label="Previous Slide"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-colors"
        aria-label="Next Slide"
      >
        ❯
      </button>
    </div>
  )
}

export default ImageCarousel
