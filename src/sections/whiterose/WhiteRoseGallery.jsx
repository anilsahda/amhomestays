import React from 'react'
import ImageCarousel from '../../components/common/ImageCarousel'
import Button from '../../components/common/Button'
import { whiteRoseData } from '../../data/whiteRoseData'

export function WhiteRoseGallery() {
  const { gallery } = whiteRoseData

  return (
    <section className="py-10 md:py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Gallery Carousel */}
        <div className="w-full mb-8">
          <ImageCarousel images={gallery.images} />
        </div>

        {/* See More Photos Button */}
        <a 
          href={gallery.morePhotosUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button variant="black" size="md">
            See More Photos
          </Button>
        </a>
      </div>
    </section>
  )
}

export default WhiteRoseGallery
