import React from 'react'
import { blogData } from '../../data/blogData'

export function BlogGrid() {
  const { posts } = blogData

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Featured Image */}
                <div className="overflow-hidden aspect-[16/10] bg-gray-100">
                  <a href={post.link}>
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </a>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 leading-snug hover:text-[#f05a22] transition-colors">
                    <a href={post.link}>
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-0">
                <a
                  href={post.link}
                  className="text-[#2ea3f2] hover:text-[#1a76b8] font-medium text-sm transition-colors uppercase tracking-wide"
                >
                  read more
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogGrid
