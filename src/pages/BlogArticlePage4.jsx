import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import ArticleHeader from '../sections/blog/ArticleHeader'
import ArticleFeaturedImage from '../sections/blog/ArticleFeaturedImage'
import ArticleIntro from '../sections/blog/ArticleIntro'
import ArticleSectionItem from '../sections/blog/ArticleSectionItem'
import { article4Data } from '../data/article4Data'

export function BlogArticlePage4() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleHeader article={article4Data} />
          <ArticleFeaturedImage image={article4Data.featuredImage} title={article4Data.title} />
          <ArticleIntro heading={article4Data.introHeading} paragraphs={article4Data.introduction} />
          {article4Data.sections.map((section) => (
            <ArticleSectionItem key={section.id} section={section} />
          ))}
          <ArticleSectionItem section={article4Data.finalThoughts} showDivider={false} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BlogArticlePage4
