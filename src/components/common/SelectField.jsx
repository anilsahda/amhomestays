import React from 'react'

export function SelectField({
  label,
  icon: Icon,
  options = [],
  className = '',
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1.5 p-3 rounded-xl bg-stone-50 border border-stone-200 hover:border-[#f05a22]/50 transition-colors ${className}`}>
      {label && (
        <label className="text-[11px] font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
          {Icon && <Icon className="w-3.5 h-3.5 text-[#f05a22]" />}
          <span>{label}</span>
        </label>
      )}
      <select
        className="w-full bg-transparent text-sm font-semibold text-stone-900 focus:outline-none cursor-pointer"
        {...props}
      >
        {options.map((opt, index) => (
          <option key={index} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectField
