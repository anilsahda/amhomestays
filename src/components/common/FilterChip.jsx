import React from 'react'

export function FilterChip({
  label,
  isActive = false,
  onClick,
  className = '',
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
        isActive
          ? 'bg-[#f05a22] text-white shadow-sm'
          : 'bg-stone-100 text-stone-700 hover:bg-stone-200/80 hover:text-stone-900 border border-stone-200/60'
      } ${className}`}
    >
      {label}
    </button>
  )
}

export default FilterChip
