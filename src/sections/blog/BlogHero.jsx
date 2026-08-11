import React from 'react'
import { blogData } from '../../data/blogData'

export function BlogHero() {
  const { hero } = blogData

  return (
    <section className="pt-8 pb-4 md:pt-12 md:pb-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl lg:text-4.5xl font-bold text-gray-900 leading-tight">
          {hero.title}
        </h1>
      </div>
    </section>
  )
}

export default BlogHero
