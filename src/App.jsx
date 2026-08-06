import React from 'react'
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

function App() {
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
