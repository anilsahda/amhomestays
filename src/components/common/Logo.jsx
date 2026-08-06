import React from 'react'

export function Logo({ className = '' }) {
  return (
    <a href="#" className={`flex items-center gap-3 group cursor-pointer ${className}`}>
      {/* Flower / Mandala Icon */}
      <svg className="w-9 h-9 text-amber-900/80 stroke-[1.25]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4s4-1.8 4-4a4 4 0 0 0-4-4z" />
        <path d="M12 14a4 4 0 0 0-4 4c0 2.2 1.8 4 4 4s4-1.8 4-4a4 4 0 0 0-4-4z" />
        <path d="M2 12a4 4 0 0 0 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4a4 4 0 0 0-4 4z" />
        <path d="M14 12a4 4 0 0 0 4 4c2.2 0 4-1.8 4-4s-1.8-4-4-4a4 4 0 0 0-4 4z" />
        <path d="M4.93 4.93a4 4 0 0 0 0 5.66c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66a4 4 0 0 0-5.66 0z" />
        <path d="M13.41 13.41a4 4 0 0 0 0 5.66c1.56 1.56 4.1 1.56 5.66 0s1.56-4.1 0-5.66a4 4 0 0 0-5.66 0z" />
      </svg>
      {/* Stacked Serif Brand Name */}
      <div className="flex flex-col text-left font-serif leading-none tracking-widest text-stone-800">
        <span className="text-xl font-normal tracking-[0.2em]">WUNDER</span>
        <span className="text-[11px] tracking-[0.35em] text-stone-600 mt-1 pl-0.5">HOMES</span>
      </div>
    </a>
  )
}

export default Logo
