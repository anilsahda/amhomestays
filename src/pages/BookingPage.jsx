import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import BookingResultCard from '../sections/booking/BookingResultCard'

export function BookingPage() {
  return (
    <div className="min-h-screen bg-[#eef0f2] text-gray-900 font-sans antialiased flex flex-col justify-between">
      <Navbar />
      <main className="flex-grow">
        {/* Booking Result UI matching reference screenshot */}
        <BookingResultCard />
      </main>
      <Footer />
    </div>
  )
}

export default BookingPage
