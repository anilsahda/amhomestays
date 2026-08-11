import React, { useState } from 'react'
import { Check, Utensils, ShieldCheck, Tag, Info } from 'lucide-react'
import Button from '../../components/common/Button'

export function RatePlanDrawer({ isSelected, onSelectRoom }) {
  const [selectedMealPlan, setSelectedMealPlan] = useState('ep') // 'ep' = Rooms Only, 'cp' = Breakfast Included
  const [addExtraBed, setAddExtraBed] = useState(false)

  const basePrice = 25500
  const breakfastPrice = selectedMealPlan === 'cp' ? 2500 : 0
  const extraBedPrice = addExtraBed ? 2000 : 0

  const subtotal = basePrice + breakfastPrice + extraBedPrice
  const taxes = Math.round(subtotal * 0.18)
  const grandTotal = subtotal + taxes

  return (
    <div className="mt-4 pt-6 border-t border-stone-200 bg-stone-50/80 -mx-6 -mb-6 p-6 rounded-b-sm animate-fadeIn">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-stone-900 tracking-tight flex items-center gap-2">
          <Tag className="w-4 h-4 text-[#641f54]" />
          Available Rate Plans & Add-ons
        </h3>
        <span className="text-xs text-stone-500 font-normal">
          1 Night Stay • 1 Room
        </span>
      </div>

      {/* Rate Plan Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        
        {/* Rate Plan 1: Rooms Only (EP Plan) */}
        <div
          onClick={() => setSelectedMealPlan('ep')}
          className={`bg-white border rounded-md p-4 cursor-pointer transition-all ${
            selectedMealPlan === 'ep'
              ? 'border-[#641f54] ring-2 ring-[#641f54]/20 shadow-sm'
              : 'border-stone-200 hover:border-stone-300'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-stone-900 block">Rooms Only (EP Plan)</span>
              <span className="text-[11px] text-stone-500">Accommodation only, meals extra</span>
            </div>
            <input
              type="radio"
              name="ratePlan"
              checked={selectedMealPlan === 'ep'}
              onChange={() => setSelectedMealPlan('ep')}
              className="accent-[#641f54] cursor-pointer mt-1"
            />
          </div>

          <div className="space-y-1.5 text-xs text-stone-600 my-3">
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Complimentary High Speed WiFi</span>
            </div>
            <div className="flex items-center gap-1.5 text-stone-600">
              <ShieldCheck className="w-3.5 h-3.5 text-[#641f54]" />
              <span>Free cancellation up to 24 hrs prior to check-in</span>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between">
            <span className="text-[11px] text-stone-400">Base Rate</span>
            <span className="text-sm font-bold text-stone-900">₹ 25,500.00 <span className="text-[11px] font-normal text-stone-500">/ night</span></span>
          </div>
        </div>

        {/* Rate Plan 2: Room + Breakfast (CP Plan) */}
        <div
          onClick={() => setSelectedMealPlan('cp')}
          className={`bg-white border rounded-md p-4 cursor-pointer transition-all ${
            selectedMealPlan === 'cp'
              ? 'border-[#641f54] ring-2 ring-[#641f54]/20 shadow-sm'
              : 'border-stone-200 hover:border-stone-300'
          }`}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <span className="text-xs font-bold text-stone-900 block flex items-center gap-1.5">
                Room + Chef Breakfast (CP Plan)
                <span className="bg-amber-100 text-amber-800 text-[10px] px-2 py-0.5 rounded-full font-semibold">Popular</span>
              </span>
              <span className="text-[11px] text-stone-500">Includes fresh homemade chef breakfast</span>
            </div>
            <input
              type="radio"
              name="ratePlan"
              checked={selectedMealPlan === 'cp'}
              onChange={() => setSelectedMealPlan('cp')}
              className="accent-[#641f54] cursor-pointer mt-1"
            />
          </div>

          <div className="space-y-1.5 text-xs text-stone-600 my-3">
            <div className="flex items-center gap-1.5 text-amber-700 font-medium">
              <Utensils className="w-3.5 h-3.5" />
              <span>Includes Daily Breakfast for all guests</span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
              <Check className="w-3.5 h-3.5" />
              <span>Complimentary High Speed WiFi</span>
            </div>
          </div>

          <div className="pt-2 border-t border-stone-100 flex items-baseline justify-between">
            <span className="text-[11px] text-stone-400">Rate + Breakfast</span>
            <span className="text-sm font-bold text-stone-900">₹ 28,000.00 <span className="text-[11px] font-normal text-stone-500">/ night</span></span>
          </div>
        </div>

      </div>

      {/* Extra Services Checkbox */}
      <div className="bg-white border border-stone-200 rounded-md p-3.5 mb-6 flex items-center justify-between">
        <label className="flex items-center gap-2.5 cursor-pointer text-xs text-stone-800 font-medium">
          <input
            type="checkbox"
            checked={addExtraBed}
            onChange={(e) => setAddExtraBed(e.target.checked)}
            className="accent-[#641f54] w-4 h-4 rounded-xs cursor-pointer"
          />
          <span>Add Extra Mattress / Bedding (₹ 2,000.00 / night)</span>
        </label>
        <span className="text-xs font-semibold text-stone-600">
          {addExtraBed ? '+ ₹ 2,000.00' : 'Optional'}
        </span>
      </div>

      {/* Itemized Total Summary & Select Room CTA */}
      <div className="bg-white border border-stone-200 rounded-md p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-stone-500">Total Price (incl. GST):</span>
            <span className="text-xl font-bold text-[#641f54]">
              ₹ {grandTotal.toLocaleString('en-IN')}.00
            </span>
          </div>
          <p className="text-[11px] text-stone-400 flex items-center gap-1 mt-0.5">
            <Info className="w-3 h-3" />
            Includes 18% GST (₹ {taxes.toLocaleString('en-IN')}.00). No hidden fees.
          </p>
        </div>

        <Button
          type="button"
          variant="black"
          size="md"
          onClick={onSelectRoom}
          className="w-full sm:w-auto px-6 py-2.5 justify-center font-semibold text-sm bg-[#641f54] hover:bg-[#521844] text-white border-none"
        >
          {isSelected ? 'Room Selected ✓' : 'Select Room'}
        </Button>
      </div>

    </div>
  )
}

export default RatePlanDrawer
