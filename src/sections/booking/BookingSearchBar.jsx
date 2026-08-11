import React, { useState } from 'react'
import { Calendar, Users, Tag, ChevronDown, Plus, Minus } from 'lucide-react'
import Button from '../../components/common/Button'

export function BookingSearchBar() {
  // Default dates: today and tomorrow formatted as YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0]
  const tomorrowStr = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const [checkIn, setCheckIn] = useState(todayStr)
  const [checkOut, setCheckOut] = useState(tomorrowStr)

  // Guest & Room state
  const [adults, setAdults] = useState(2)
  const [children, setChildren] = useState(0)
  const [rooms, setRooms] = useState(1)
  const [isGuestOpen, setIsGuestOpen] = useState(false)

  // Promo code state
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)

  const handleApplyPromo = (e) => {
    e.preventDefault()
    if (promoCode.trim()) {
      setAppliedPromo(promoCode.trim().toUpperCase())
    }
  }

  return (
    <div className="bg-stone-800 text-white border-b border-stone-700/80 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleApplyPromo} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 items-end">
          
          {/* 1. Check-In Date */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="check-in" className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#f05a22]" />
              Check-In Date
            </label>
            <input
              id="check-in"
              type="date"
              value={checkIn}
              min={todayStr}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f05a22] transition-colors cursor-pointer"
            />
          </div>

          {/* 2. Check-Out Date */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="check-out" className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#f05a22]" />
              Check-Out Date
            </label>
            <input
              id="check-out"
              type="date"
              value={checkOut}
              min={checkIn || todayStr}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-[#f05a22] transition-colors cursor-pointer"
            />
          </div>

          {/* 3. Guests & Rooms Dropdown */}
          <div className="lg:col-span-3 relative flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-[#f05a22]" />
              Guests & Rooms
            </label>
            <button
              type="button"
              onClick={() => setIsGuestOpen(!isGuestOpen)}
              className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white flex items-center justify-between hover:border-stone-600 focus:outline-none focus:border-[#f05a22] transition-colors cursor-pointer"
            >
              <span className="truncate">
                {adults} Adult{adults > 1 ? 's' : ''}, {children} Child{children !== 1 ? 'ren' : ''}, {rooms} Room{rooms > 1 ? 's' : ''}
              </span>
              <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${isGuestOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Stepper Popover */}
            {isGuestOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 z-30 bg-stone-900 border border-stone-700 rounded-2xl p-4 shadow-2xl space-y-4">
                {/* Adults */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">Adults</p>
                    <p className="text-[11px] text-stone-400">Ages 12+</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={adults <= 1}
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-xs font-bold text-white">{adults}</span>
                    <button
                      type="button"
                      disabled={adults >= 11}
                      onClick={() => setAdults(Math.min(11, adults + 1))}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between border-t border-stone-800 pt-3">
                  <div>
                    <p className="text-xs font-bold text-white">Children</p>
                    <p className="text-[11px] text-stone-400">Ages 0-11</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={children <= 0}
                      onClick={() => setChildren(Math.max(0, children - 1))}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-xs font-bold text-white">{children}</span>
                    <button
                      type="button"
                      disabled={children >= 6}
                      onClick={() => setChildren(Math.min(6, children + 1))}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between border-t border-stone-800 pt-3">
                  <div>
                    <p className="text-xs font-bold text-white">Rooms</p>
                    <p className="text-[11px] text-stone-400">Whole Homestay</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      type="button"
                      disabled={rooms <= 1}
                      onClick={() => setRooms(Math.max(1, rooms - 1))}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-4 text-center text-xs font-bold text-white">{rooms}</span>
                    <button
                      type="button"
                      disabled={rooms >= 1}
                      onClick={() => setRooms(1)}
                      className="w-7 h-7 rounded-full bg-stone-800 hover:bg-stone-700 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center text-white"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-800 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsGuestOpen(false)}
                    className="text-xs font-bold text-[#f05a22] hover:underline px-2 py-1"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* 4. Coupon / Promo Input & Apply CTA */}
          <div className="lg:col-span-3 flex flex-col gap-1.5">
            <label htmlFor="promo-code" className="text-xs font-semibold text-stone-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Tag className="w-3.5 h-3.5 text-[#f05a22]" />
                Promo / Coupon Code
              </span>
              {appliedPromo && (
                <span className="text-[11px] text-emerald-400 font-bold uppercase">
                  Applied: {appliedPromo}
                </span>
              )}
            </label>

            <div className="flex items-center gap-2">
              <input
                id="promo-code"
                type="text"
                value={promoCode}
                placeholder="Enter Coupon"
                onChange={(e) => setPromoCode(e.target.value)}
                className="w-full bg-stone-900 border border-stone-700 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-[#f05a22] transition-colors"
              />
              <Button type="submit" variant="orange" size="md" className="shrink-0 font-semibold px-4">
                Apply
              </Button>
            </div>
          </div>

        </form>
      </div>
    </div>
  )
}

export default BookingSearchBar
