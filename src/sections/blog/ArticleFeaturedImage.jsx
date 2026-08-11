import React from 'react'
import { articleData } from '../../data/articleData'

export function ArticleFeaturedImage({ image = articleData.featuredImage, title = articleData.title }) {
  return (
    <div className="w-full mb-8 overflow-hidden rounded-xl shadow-sm">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover max-h-[520px] rounded-xl"
        loading="eager"
      />
    </div>
  )
}

export default ArticleFeaturedImage
