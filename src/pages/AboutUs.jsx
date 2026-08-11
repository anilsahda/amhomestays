import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AboutWelcome from '../sections/AboutWelcome'
import PopularFacilities from '../sections/PopularFacilities'

export function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <AboutWelcome />
        <PopularFacilities/>
      </main>
      <Footer />
    </div>
  )
}

export default AboutUs
