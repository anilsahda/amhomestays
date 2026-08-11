import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ArticleHeader from '../sections/blog/ArticleHeader'
import ArticleFeaturedImage from '../sections/blog/ArticleFeaturedImage'
import ArticleIntro from '../sections/blog/ArticleIntro'
import ArticleSectionItem from '../sections/blog/ArticleSectionItem'
import { article3Data } from '../data/article3Data'

export function BlogArticlePage3() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleHeader article={article3Data} />
          <ArticleFeaturedImage image={article3Data.featuredImage} title={article3Data.title} />
          <ArticleIntro paragraphs={article3Data.introduction} />
          {article3Data.sections.map((section) => (
            <ArticleSectionItem key={section.id} section={section} />
          ))}
          <ArticleSectionItem section={article3Data.stayWithWunderHomes} />
          <ArticleSectionItem section={article3Data.bookMountainEscape} showDivider={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BlogArticlePage3
