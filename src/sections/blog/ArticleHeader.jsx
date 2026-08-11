import React from 'react'
import { articleData } from '../../data/articleData'

export function ArticleHeader({ article = articleData }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-3">
        {article.title}
      </h1>
      <p className="text-sm text-gray-500 font-medium">
        <span className="published">{article.date}</span>
        <span className="mx-2 text-gray-300">|</span>
        <a
          href={article.categoryUrl}
          className="text-[#2ea3f2] hover:underline"
        >
          {article.category}
        </a>
      </p>
    </div>
  )
}

export default ArticleHeader
