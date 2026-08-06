import React, { useState } from 'react'
import { MapPin, Sparkles, Users, SlidersHorizontal, Search } from 'lucide-react'
import SelectField from '../components/common/SelectField'
import SearchInput from '../components/common/SearchInput'
import FilterChip from '../components/common/FilterChip'
import Button from '../components/common/Button'

export function PropertyFilter() {
  const [activeChip, setActiveChip] = useState('All Villas')

  const filterChips = [
    'All Villas',
    'Amber Moon',
    'White Rose',
    'Mountain View',
    'Private Balcony',
    'Games Room',
  ]

  const locationOptions = [
    { label: 'All Destinations', value: '' },
    { label: 'Kumarhatti, HP', value: 'kumarhatti' },
    { label: 'Kasauli, HP', value: 'kasauli' },
    { label: 'Solan, HP', value: 'solan' },
  ]

  const experienceOptions = [
    { label: 'All Experiences', value: '' },
    { label: 'X Series (Luxury)', value: 'x-series' },
    { label: 'Signature Villas', value: 'signature' },
    { label: 'Escapes (Couples/Small Family)', value: 'escapes' },
    { label: 'Celebrations', value: 'celebrations' },
  ]

  const capacityOptions = [
    { label: 'Any Guest Capacity', value: '' },
    { label: '1 - 2 Guests', value: '1-2' },
    { label: '3 - 5 Guests', value: '3-5' },
    { label: '6 - 10+ Guests', value: '6-10' },
  ]

  return (
    <section className="w-full bg-stone-50/60 py-12 px-4 sm:px-6 lg:px-8 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Title matching wunderhomes.in */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#f05a22]">
              Explore Stays
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight mt-1">
              Homes near you
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md">
            Find and filter luxury vacation rentals, mountain view villas, and private hillside homestays.
          </p>
        </div>

        {/* Filter Widget Box */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-stone-200/80">
          
          {/* Main Filter Inputs Controls Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 items-center mb-6">
            
            {/* Search Keyboard Input */}
            <div className="lg:col-span-4">
              <SearchInput placeholder="Search villa name or keyword..." />
            </div>

            {/* Destination Select Dropdown */}
            <div className="lg:col-span-3">
              <SelectField
                label="Location"
                icon={MapPin}
                options={locationOptions}
              />
            </div>

            {/* Experience Select Dropdown */}
            <div className="lg:col-span-3">
              <SelectField
                label="Experience"
                icon={Sparkles}
                options={experienceOptions}
              />
            </div>

            {/* Filter Action Submit Button */}
            <div className="lg:col-span-2 h-full flex items-end">
              <Button
                variant="orange"
                size="md"
                className="w-full h-[52px] rounded-xl font-semibold shadow-sm"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filter</span>
              </Button>
            </div>

          </div>

          {/* Quick Filter Category Chips */}
          <div className="flex items-center gap-2 pt-4 border-t border-stone-100 overflow-x-auto no-scrollbar">
            <span className="text-xs font-bold uppercase tracking-wider text-stone-400 mr-2 shrink-0">
              Quick Filters:
            </span>
            <div className="flex items-center gap-2 shrink-0">
              {filterChips.map((chip) => (
                <FilterChip
                  key={chip}
                  label={chip}
                  isActive={activeChip === chip}
                  onClick={() => setActiveChip(chip)}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default PropertyFilter
