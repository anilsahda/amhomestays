import React, { useState } from 'react'
import {
  Calendar,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Wind,
  Bath,
  Tv,
  Wifi,
  Users,
  Bed,
  Shirt,
  CheckCircle2,
} from 'lucide-react'

export function BookingResultCard() {
  // 1. Booking controls state
  const [checkInDate, setCheckInDate] = useState('2026-08-11')
  const [checkOutDate, setCheckOutDate] = useState('2026-08-12')
  const [guests, setGuests] = useState(1)
  const [rooms, setRooms] = useState(1)

  // Popover state
  const [isGuestsOpen, setIsGuestsOpen] = useState(false)
  const [isRoomsOpen, setIsRoomsOpen] = useState(false)

  // Photo Gallery Modal state
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activePhotoIndex, setActivePhotoIndex] = useState(2) // Defaults to 3 / 5 matching screenshot

  const galleryPhotos = [
    'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-668-Room1.jpg',
    'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-396-Bathroom.jpg',
    'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-518-First-Floor.jpg',
    'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-88-Leaving.jpg',
    'https://s3.ap-south-1.amazonaws.com/buzz.beconf.test/b810beea1f/vacation-rental-196-Pool.jpg',
  ]

  const handleNextPhoto = () => {
    setActivePhotoIndex((prev) => (prev + 1) % galleryPhotos.length)
  }

  const handlePrevPhoto = () => {
    setActivePhotoIndex((prev) => (prev - 1 + galleryPhotos.length) % galleryPhotos.length)
  }

  // 2. Interactive booking flow stages:
  // stage 0: closed, stage 1: rate plan shown (clicking "Book"), stage 2: checkout form & summary shown (clicking "BOOK NOW")
  const [bookingStage, setBookingStage] = useState(0)

  // Traveller form state
  const [title, setTitle] = useState('Mr')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [specialRequests, setSpecialRequests] = useState('')
  const [coupon, setCoupon] = useState('')
  const [isPayNowChecked, setIsPayNowChecked] = useState(true)
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false)

  // Format ISO date (YYYY-MM-DD) to DD/MM/YYYY for control display
  const formatDateForDisplay = (isoStr) => {
    if (!isoStr) return ''
    const parts = isoStr.split('-')
    if (parts.length !== 3) return isoStr
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }

  // Handle check-in change & validate checkout
  const handleCheckInChange = (e) => {
    const val = e.target.value
    if (!val) return
    setCheckInDate(val)
    if (val >= checkOutDate) {
      const d = new Date(val)
      d.setDate(d.getDate() + 1)
      setCheckOutDate(d.toISOString().split('T')[0])
    }
  }

  // Handle checkout change
  const handleCheckOutChange = (e) => {
    const val = e.target.value
    if (!val) return
    if (val > checkInDate) {
      setCheckOutDate(val)
    }
  }

  const handleConfirmBooking = (e) => {
    e.preventDefault()
    setIsBookingConfirmed(true)
  }

  return (
    <div className="w-full bg-[#eef0f2] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* 1. Top Card: Property Title & Search Controls */}
        <div className="bg-white rounded-sm shadow-xs p-6 border border-stone-200/80">
          
          {/* Header Line with Maroon Divider */}
          <div className="flex flex-wrap items-baseline gap-1.5 pb-2.5 mb-5 border-b-2 border-[#641f54]">
            <h1 className="text-xl sm:text-2xl font-normal text-stone-900 tracking-tight">
              Amber Moon by WunderHomes
            </h1>
            <span className="text-xs text-stone-500 font-normal">
              , Haripur, Solan, Himachal Pradesh, Solan, , 9350584611
            </span>
          </div>

          {/* 4 Booking Controls Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-1">
            
            {/* Control 1: Checkin Date */}
            <div className="relative flex flex-col border-b border-stone-300 pb-1 cursor-pointer group">
              <label className="text-[11px] font-normal text-stone-500 mb-0.5 pointer-events-none">
                Checkin Date
              </label>
              <div className="flex items-center justify-between py-1 pointer-events-none">
                <span className="text-sm text-stone-800 font-normal">
                  {formatDateForDisplay(checkInDate)}
                </span>
                <Calendar className="w-4 h-4 text-[#641f54]" />
              </div>
              <input
                type="date"
                value={checkInDate}
                onChange={handleCheckInChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                aria-label="Checkin Date"
              />
            </div>

            {/* Control 2: Checkout Date */}
            <div className="relative flex flex-col border-b border-stone-300 pb-1 cursor-pointer group">
              <label className="text-[11px] font-normal text-stone-500 mb-0.5 pointer-events-none">
                Checkout Date
              </label>
              <div className="flex items-center justify-between py-1 pointer-events-none">
                <span className="text-sm text-stone-800 font-normal">
                  {formatDateForDisplay(checkOutDate)}
                </span>
                <Calendar className="w-4 h-4 text-[#641f54]" />
              </div>
              <input
                type="date"
                value={checkOutDate}
                min={checkInDate}
                onChange={handleCheckOutChange}
                className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                aria-label="Checkout Date"
              />
            </div>

            {/* Control 3: Guests */}
            <div className="relative flex flex-col border-b border-stone-300 pb-1 cursor-pointer">
              <label className="text-[11px] font-normal text-stone-500 mb-0.5">
                Guests
              </label>
              <button
                type="button"
                onClick={() => {
                  setIsGuestsOpen(!isGuestsOpen)
                  setIsRoomsOpen(false)
                }}
                className="flex items-center justify-between py-1 w-full text-left focus:outline-none cursor-pointer"
              >
                <span className="text-sm text-stone-800 font-normal">{guests}</span>
                <ChevronDown className={`w-4 h-4 text-stone-600 transition-transform ${isGuestsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Guests Dropdown */}
              {isGuestsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsGuestsOpen(false)} />
                  <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-white border border-stone-200 rounded-sm shadow-lg max-h-48 overflow-y-auto py-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => {
                          setGuests(num)
                          setIsGuestsOpen(false)
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#641f54]/10 transition-colors ${
                          guests === num ? 'font-bold text-[#641f54] bg-[#641f54]/5' : 'text-stone-700'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Control 4: Rooms */}
            <div className="relative flex flex-col border-b border-stone-300 pb-1 cursor-pointer">
              <label className="text-[11px] font-normal text-stone-500 mb-0.5">
                Rooms
              </label>
              <button
                type="button"
                onClick={() => {
                  setIsRoomsOpen(!isRoomsOpen)
                  setIsGuestsOpen(false)
                }}
                className="flex items-center justify-between py-1 w-full text-left focus:outline-none cursor-pointer"
              >
                <span className="text-sm text-stone-800 font-normal">{rooms}</span>
                <ChevronDown className={`w-4 h-4 text-stone-600 transition-transform ${isRoomsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Rooms Dropdown */}
              {isRoomsOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsRoomsOpen(false)} />
                  <div className="absolute top-full left-0 right-0 mt-1 z-20 bg-white border border-stone-200 rounded-sm shadow-lg max-h-48 overflow-y-auto py-1">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => {
                          setRooms(num)
                          setIsRoomsOpen(false)
                        }}
                        className={`w-full text-left px-3 py-1.5 text-xs hover:bg-[#641f54]/10 transition-colors ${
                          rooms === num ? 'font-bold text-[#641f54] bg-[#641f54]/5' : 'text-stone-700'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>

        {/* 2. Property Result Card */}
        <div className="bg-white rounded-sm shadow-xs p-6 border border-stone-200/80 flex flex-col gap-6">
          
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column: Image with "View photos (5)" overlay */}
            <div className="relative md:w-[340px] lg:w-[380px] shrink-0 rounded-sm overflow-hidden aspect-[4/3] self-start">
              <img
                src={galleryPhotos[0]}
                alt="Amber Moon Room"
                className="w-full h-full object-cover"
              />
              <div
                onClick={() => setIsGalleryOpen(true)}
                className="absolute bottom-3 left-3 bg-black/75 text-white px-3 py-1.5 rounded-sm text-xs flex items-center gap-1.5 font-normal shadow-md cursor-pointer hover:bg-black/85 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>View photos ({galleryPhotos.length})</span>
              </div>
            </div>

            {/* Right Column: Title, Subtitle, Divider, Amenities, Price & Book */}
            <div className="flex-1 flex flex-col justify-between pt-1">
              <div>
                {/* Main Heading */}
                <h2 className="text-2xl font-normal text-stone-900 tracking-tight">
                  Vacation Rental
                </h2>
                {/* Subheading */}
                <p className="text-xs text-stone-500 mt-1 mb-3">
                  Vacation Rental
                </p>

                {/* Maroon Divider */}
                <div className="h-[1.5px] bg-[#641f54] mb-6 w-full" />

                {/* Amenities 3-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-xs text-stone-800 font-normal">
                  <div className="flex items-center gap-2.5">
                    <Wind className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Air Conditioner</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Bath className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Bathroom</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Shirt className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Iron</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Tv className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Microwave</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Bed className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Double Bed</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Up to 11 guests</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Tv className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>TV</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Wifi className="w-4 h-4 text-stone-700 shrink-0" />
                    <span>Complimentary WiFi</span>
                  </div>
                </div>
              </div>

              {/* Price & Book CTA Button Row */}
              <div className="mt-8 pt-4 border-t border-stone-200/90 flex flex-wrap items-center justify-end gap-5">
                <button
                  type="button"
                  onClick={() => setBookingStage(bookingStage === 0 ? 1 : 0)}
                  className="bg-[#641f54] hover:bg-[#521844] text-white px-5 py-2 rounded-sm text-sm font-medium flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Book</span>
                  {bookingStage > 0 ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* 3. Stage 1: Rate Plan Box & Reservation Policy (Shows when Book button is clicked) */}
        {bookingStage >= 1 && (
          <div className="space-y-6">
            
            {/* Rate Plan Box */}
            <div className="bg-white border border-[#e6d8e2] rounded-sm p-4 flex flex-wrap items-center justify-between gap-4 shadow-xs">
              <div>
                <h3 className="text-base font-normal text-stone-900">Rooms Only</h3>
                <p className="text-xs text-stone-400">Rooms Only</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <span className="text-stone-400 line-through text-sm sm:text-base block">
                    ₹ 30,000.00
                  </span>
                  <span className="text-stone-900 font-medium text-lg sm:text-xl block">
                    ₹ 25,500.00
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingStage(2)}
                  className="bg-[#641f54] hover:bg-[#521844] text-white px-5 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                >
                  BOOK NOW
                </button>
              </div>
            </div>

            {/* Reservation & Cancellation Policy Box */}
            <div className="bg-white border border-stone-200/80 rounded-sm overflow-hidden shadow-xs">
              <div className="bg-[#e6d8e2] px-4 py-2.5 border-b border-[#d6c4d0]">
                <h4 className="text-xs font-bold text-stone-800">
                  Reservation &amp; Cancellation Policy :
                </h4>
              </div>
              <div className="p-4 text-xs text-stone-600 space-y-2">
                <ul className="list-disc list-inside space-y-1.5">
                  <li>Check-in time is 1PM, Check-out time is 11AM</li>
                  <li>Early Checkin and Late Checkout will be charged Extra.</li>
                  <li>
                    Cancellation can be done upto 24 hours before checkin using the link on email. No Cancellation or refund will be processed.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        )}

        {/* 4. Stage 2: Checkout Step — Traveller Information & Your Selection Summary (Shows when BOOK NOW is clicked) */}
        {bookingStage === 2 && (
          <div className="pt-2">
            
            {isBookingConfirmed ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-sm p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-2xl font-bold text-emerald-900">Booking Confirmed!</h3>
                <p className="text-sm text-emerald-700">
                  Thank you, {name || 'Guest'}! Your reservation request for Amber Moon by WunderHomes has been submitted successfully.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsBookingConfirmed(false)
                      setBookingStage(0)
                    }}
                    className="bg-[#641f54] text-white px-6 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider"
                  >
                    Back to Stays
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleConfirmBooking} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column: Traveller Information */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Traveller Information Card */}
                  <div className="bg-white border border-stone-200/80 rounded-sm overflow-hidden shadow-xs">
                    <div className="bg-[#e6d8e2] px-4 py-2.5 border-b border-[#d6c4d0]">
                      <h3 className="text-sm font-normal text-stone-800">
                        Traveller Information
                      </h3>
                    </div>

                    <div className="p-6 space-y-4">
                      {/* Title & Name Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                        <div className="sm:col-span-1">
                          <label className="text-[10px] text-stone-400 block mb-1">Title</label>
                          <select
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full bg-transparent border-b border-stone-300 py-1 text-xs text-stone-800 focus:outline-none focus:border-[#641f54]"
                          >
                            <option value="Mr">Mr</option>
                            <option value="Ms">Ms</option>
                            <option value="Mrs">Mrs</option>
                          </select>
                        </div>
                        <div className="sm:col-span-3">
                          <label className="text-[10px] text-stone-400 block mb-1">Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-transparent border-b border-stone-300 py-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641f54]"
                          />
                        </div>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="text-[10px] text-stone-400 block mb-1">Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="Phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-transparent border-b border-stone-300 py-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641f54]"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[10px] text-stone-400 block mb-1">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent border-b border-stone-300 py-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641f54]"
                        />
                      </div>

                      {/* Special Requests */}
                      <div>
                        <label className="text-[10px] text-stone-400 block mb-1">Special Requests</label>
                        <textarea
                          rows={2}
                          placeholder="Special Requests"
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-transparent border-b border-stone-300 py-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641f54] resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Coupon & Pay Checkbox Row */}
                  <div className="space-y-4">
                    <div className="bg-white border border-stone-200/80 rounded-sm p-4 flex items-center justify-between gap-4">
                      <input
                        type="text"
                        placeholder="Coupon"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        className="bg-transparent border-b border-stone-300 py-1 px-1 text-xs text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#641f54] flex-1 max-w-xs"
                      />
                      <button
                        type="button"
                        className="bg-[#641f54] hover:bg-[#521844] text-white px-6 py-1.5 rounded-sm text-xs font-semibold cursor-pointer transition-colors"
                      >
                        Apply
                      </button>
                    </div>

                    <div className="bg-[#e6d8e2]/60 border border-[#d6c4d0] rounded-sm p-3 flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        id="pay-now"
                        checked={isPayNowChecked}
                        onChange={(e) => setIsPayNowChecked(e.target.checked)}
                        className="accent-[#641f54] w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="pay-now" className="text-xs text-stone-800 font-medium cursor-pointer">
                        Pay ₹29,187.30 Now
                      </label>
                    </div>

                    {/* Confirm Booking CTA */}
                    <button
                      type="submit"
                      className="w-full bg-[#641f54] hover:bg-[#521844] text-white py-3 rounded-sm text-sm font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
                    >
                      Confirm Booking
                    </button>
                  </div>

                </div>

                {/* Right Column: Your Selection Summary */}
                <div className="lg:col-span-5">
                  <div className="bg-white border border-stone-200/80 rounded-sm overflow-hidden shadow-xs sticky top-24">
                    
                    <div className="bg-[#e6d8e2] px-4 py-2.5 border-b border-[#d6c4d0]">
                      <h3 className="text-sm font-normal text-stone-800">
                        Your Selection
                      </h3>
                    </div>

                    <div className="p-4 space-y-3 text-xs text-stone-700">
                      <div className="flex justify-between items-center">
                        <span className="text-stone-500 font-normal">Check in</span>
                        <span className="font-semibold text-stone-900">: 11 Aug 26, Tue 1PM</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-stone-500 font-normal">Check out</span>
                        <span className="font-semibold text-stone-900">: 12 Aug 26, Wed 11AM</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-stone-500 font-normal">Room</span>
                        <span className="font-semibold text-stone-900">: Vacation Rental x ({rooms})</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-stone-500 font-normal">Rateplan</span>
                        <span className="font-semibold text-stone-900">: Rooms Only</span>
                      </div>

                      <div className="flex justify-between items-center">
                        <span className="text-stone-500 font-normal">Guests</span>
                        <span className="font-semibold text-stone-900">: {guests}</span>
                      </div>

                      {/* Divider */}
                      <div className="border-t border-[#641f54]/30 my-3" />

                      <div className="flex justify-between items-center">
                        <span className="text-stone-600">Amount</span>
                        <span className="font-semibold text-stone-900">: ₹25,500.00</span>
                      </div>

                      <div className="flex justify-between items-center text-stone-600">
                        <span>Pay Now Discount (-)</span>
                        <span className="font-semibold text-stone-900">: ₹765.00</span>
                      </div>

                      <div className="flex justify-between items-center text-stone-600">
                        <span>Net Amount</span>
                        <span className="font-semibold text-stone-900">: ₹24,735.00</span>
                      </div>

                      <div className="flex justify-between items-center text-stone-600">
                        <span>Taxes</span>
                        <span className="font-semibold text-stone-900">: ₹4,452.30</span>
                      </div>

                      {/* Total Amount Bar */}
                      <div className="bg-[#641f54] text-white px-4 py-2.5 rounded-xs flex justify-between items-center font-bold text-sm mt-4">
                        <span>Total Amount</span>
                        <span>: ₹29,187.30</span>
                      </div>

                    </div>

                  </div>
                </div>

              </form>
            )}

          </div>
        )}

      </div>

      {/* 5. Photo Gallery Lightbox Popup Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          {/* Overlay Click to Close */}
          <div
            className="absolute inset-0"
            onClick={() => setIsGalleryOpen(false)}
          />

          {/* Modal Container */}
          <div className="relative z-10 bg-white rounded-md shadow-2xl p-4 sm:p-6 max-w-3xl w-full mx-auto flex flex-col items-center">
            {/* Top Right Close Button */}
            <button
              type="button"
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-3 right-3 text-[#641f54] hover:bg-[#641f54]/10 p-1.5 rounded-full transition-colors cursor-pointer"
              aria-label="Close photo popup"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Main Image View Area with Prev/Next Arrows */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] bg-stone-100 rounded-sm overflow-hidden flex items-center justify-center my-2">
              {/* Left Arrow */}
              <button
                type="button"
                onClick={handlePrevPhoto}
                className="absolute left-2 sm:left-4 z-20 text-[#641f54] bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
              </button>

              {/* Current Photo */}
              <img
                src={galleryPhotos[activePhotoIndex]}
                alt={`Amber Moon photo ${activePhotoIndex + 1}`}
                className="w-full h-full object-cover rounded-sm"
              />

              {/* Right Arrow */}
              <button
                type="button"
                onClick={handleNextPhoto}
                className="absolute right-2 sm:right-4 z-20 text-[#641f54] bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6 stroke-[2.5]" />
              </button>
            </div>

            {/* Bottom Counter Indicator matching screenshot: 3 / 5 */}
            <div className="text-xs font-medium text-stone-600 mt-2">
              {activePhotoIndex + 1} / {galleryPhotos.length}
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default BookingResultCard

