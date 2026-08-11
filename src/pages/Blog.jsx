import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BlogHero from '../sections/blog/BlogHero'
import BlogGrid from '../sections/blog/BlogGrid'

export function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}

export default Blog
