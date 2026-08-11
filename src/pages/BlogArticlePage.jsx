import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ArticleHeader from '../sections/blog/ArticleHeader'
import ArticleFeaturedImage from '../sections/blog/ArticleFeaturedImage'
import ArticleIntro from '../sections/blog/ArticleIntro'
import ArticleSectionItem from '../sections/blog/ArticleSectionItem'
import { articleData } from '../data/articleData'

export function BlogArticlePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleHeader />
          <ArticleFeaturedImage />
          <ArticleIntro />
          {articleData.sections.map((section) => (
            <ArticleSectionItem key={section.id} section={section} />
          ))}
          <ArticleSectionItem section={articleData.whyStay} />
          <ArticleSectionItem section={articleData.stayWithWunderHomes} showDivider={false} />
          <ArticleSectionItem section={articleData.planYourGetaway} showDivider={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BlogArticlePage
