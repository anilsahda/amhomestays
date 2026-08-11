import React, { useState, useEffect } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './sections/Hero'
import HomesNearYou from './sections/HomesNearYou'
import VillaFeatures from './sections/VillaFeatures'
import AvailableThisWeekend from './sections/AvailableThisWeekend'
import VillasByExperience from './sections/VillasByExperience'
import PopularFacilities from './sections/PopularFacilities'
import CustomerReviews from './sections/CustomerReviews'
import ListYourVilla from './sections/ListYourVilla'
import RequestQuoteLocation from './sections/RequestQuoteLocation'
import AboutUs from './pages/AboutUs'
import AmberMoon from './pages/AmberMoon'
import WhiteRose from './pages/WhiteRose'
import Blog from './pages/Blog'
import BlogArticlePage from './pages/BlogArticlePage'
import BlogArticlePage2 from './pages/BlogArticlePage2'
import BlogArticlePage3 from './pages/BlogArticlePage3'
import BlogArticlePage4 from './pages/BlogArticlePage4'
import BookingPage from './pages/BookingPage'
import RequestQuotePage from './pages/RequestQuotePage'
import SearchResultsPage from './pages/SearchResultsPage'

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const normPath = (currentPath || '').toLowerCase().replace(/\/$/, '')
  const normHash = (window.location.hash || '').toLowerCase()

  if (
    normPath === '/search' ||
    normPath.startsWith('/search') ||
    window.location.search.includes('q=')
  ) {
    return <SearchResultsPage />
  }

  if (
    normPath === '/request-a-quote' ||
    normPath === '/request-quote' ||
    normPath.includes('request-a-quote') ||
    normHash === '#request-a-quote' ||
    normHash === '#contact'
  ) {
    return <RequestQuotePage />
  }

  if (currentPath === '/booking' || currentPath === '/book' || window.location.hash === '#booking' || window.location.hash === '#book') {
    return <BookingPage />
  }

  if (currentPath === '/about-us' || window.location.hash === '#about') {
    return <AboutUs />
  }

  if (
    normPath === '/ambermoon' ||
    normPath === '/amber-moon' ||
    normPath.includes('ambermoon') ||
    normPath.includes('amber-moon') ||
    normHash === '#ambermoon' ||
    normHash === '#amber-moon'
  ) {
    return <AmberMoon />
  }

  if (
    normPath === '/whiterose' ||
    normPath === '/white-rose' ||
    normPath.includes('whiterose') ||
    normPath.includes('white-rose') ||
    normHash === '#whiterose' ||
    normHash === '#white-rose'
  ) {
    return <WhiteRose />
  }

  if (currentPath.includes('why-kumarhatti-is-the-perfect-weekend-getaway') || window.location.hash === '#blog-article-2') {
    return <BlogArticlePage2 />
  }

  if (currentPath.includes('wake-up-to-mountain-views') || window.location.hash === '#blog-article-3') {
    return <BlogArticlePage3 />
  }

  if (currentPath.includes('vacation-rental-vs-hotel-in-himachal') || window.location.hash === '#blog-article-4') {
    return <BlogArticlePage4 />
  }

  if (currentPath.startsWith('/blog/') || window.location.hash.startsWith('#blog-article')) {
    return <BlogArticlePage />
  }

  if (currentPath === '/blog' || window.location.hash === '#blog') {
    return <Blog />
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <HomesNearYou />
        <VillaFeatures />
        <AvailableThisWeekend />
        <VillasByExperience />
        <PopularFacilities />
        <CustomerReviews />
        <ListYourVilla />
        <RequestQuoteLocation />
      </main>
      <Footer />
    </div>
  )
}

export default App

