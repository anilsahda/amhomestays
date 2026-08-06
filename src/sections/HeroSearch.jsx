import React from 'react'
import { MapPin, Calendar, Users, Search } from 'lucide-react'
import Button from '../components/common/Button'

export function HeroSearch() {
  return (
    <div className="w-full bg-white rounded-2xl p-4 sm:p-6 shadow-xl shadow-stone-900/5 border border-stone-200/80">
      <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center">
        
        {/* Destination Input */}
        <div className="lg:col-span-4 flex flex-col gap-1.5 p-3 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-amber-500/50 transition-colors">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            Destination
          </label>
          <select className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer">
            <option value="kumarhatti">Kumarhatti, Himachal Pradesh</option>
            <option value="kasauli">Kasauli, Himachal Pradesh</option>
            <option value="solan">Solan, Himachal Pradesh</option>
          </select>
        </div>

        {/* Dates Select */}
        <div className="lg:col-span-4 flex flex-col gap-1.5 p-3 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-amber-500/50 transition-colors">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-700" />
            Check-In — Check-Out
          </label>
          <input
            type="text"
            readOnly
            value="Select Travel Dates"
            className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer"
          />
        </div>

        {/* Guests Select */}
        <div className="lg:col-span-2 flex flex-col gap-1.5 p-3 rounded-xl bg-stone-50 border border-stone-200/60 hover:border-amber-500/50 transition-colors">
          <label className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            Guests
          </label>
          <select className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer">
            <option value="2-adults">2 Guests</option>
            <option value="4-adults">4 Guests</option>
            <option value="6-adults">6+ Guests</option>
          </select>
        </div>

        {/* Search Submit Button */}
        <div className="lg:col-span-2 h-full flex items-end">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full h-[52px] rounded-xl font-semibold shadow-md shadow-amber-900/20"
          >
            <Search className="w-4 h-4 stroke-[2.5]" />
            <span>Search</span>
          </Button>
        </div>

      </form>
    </div>
  )
}

export default HeroSearch
