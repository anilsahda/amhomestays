import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhiteRoseHero from '../sections/whiterose/WhiteRoseHero'
import WhiteRoseLiving from '../sections/whiterose/WhiteRoseLiving'
import WhiteRoseKitchen from '../sections/whiterose/WhiteRoseKitchen'
import WhiteRoseBedrooms from '../sections/whiterose/WhiteRoseBedrooms'
import WhiteRoseGallery from '../sections/whiterose/WhiteRoseGallery'
import PopularFacilities from '../sections/PopularFacilities'
import WhiteRoseLocation from '../sections/whiterose/WhiteRoseLocation'

export function WhiteRose() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <WhiteRoseHero />
        <WhiteRoseLiving />
        <WhiteRoseKitchen />
        <WhiteRoseBedrooms />
        <WhiteRoseGallery />
        <PopularFacilities />
        <WhiteRoseLocation />
      </main>
      <Footer />
    </div>
  )
}

export default WhiteRose
