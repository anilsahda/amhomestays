import React from 'react'
import { Search } from 'lucide-react'

export function SearchInput({
  placeholder = 'Search by villa name, location...',
  icon: Icon = Search,
  className = '',
  ...props
}) {
  return (
    <div className={`relative flex items-center bg-stone-50 border border-stone-200 rounded-xl p-3 hover:border-[#f05a22]/50 transition-colors ${className}`}>
      {Icon && <Icon className="w-4 h-4 text-stone-400 shrink-0 mr-2.5" />}
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-sm font-medium text-stone-900 placeholder:text-stone-400 focus:outline-none"
        {...props}
      />
    </div>
  )
}

export default SearchInput
