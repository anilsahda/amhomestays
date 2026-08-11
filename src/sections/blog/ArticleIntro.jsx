import React from 'react'
import { articleData } from '../../data/articleData'

export function ArticleIntro({ paragraphs = articleData.introduction, heading }) {
  return (
    <div className="mb-8 text-gray-700 text-base sm:text-lg leading-relaxed">
      {heading && (
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-snug">
          {heading}
        </h2>
      )}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}

export default ArticleIntro
