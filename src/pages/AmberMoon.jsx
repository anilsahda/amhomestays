import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import AmberMoonHero from '../sections/ambermoon/AmberMoonHero'
import AmberMoonKitchen from '../sections/ambermoon/AmberMoonKitchen'
import AmberMoonGames from '../sections/ambermoon/AmberMoonGames'
import AmberMoonLiving from '../sections/ambermoon/AmberMoonLiving'
import AmberMoonGallery from '../sections/ambermoon/AmberMoonGallery'
import PopularFacilities from '../sections/PopularFacilities'
import AmberMoonLocation from '../sections/ambermoon/AmberMoonLocation'

export function AmberMoon() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        <AmberMoonHero />
        <AmberMoonKitchen />
        <AmberMoonGames />
        <AmberMoonLiving />
        <AmberMoonGallery />
        <PopularFacilities />
        <AmberMoonLocation />
      </main>
      <Footer />
    </div>
  )
}

export default AmberMoon
