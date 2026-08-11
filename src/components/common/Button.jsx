import React from 'react'

export function Button({
  children,
  variant = 'orange',
  size = 'md',
  className = '',
  type = 'button',
  href,
  target,
  rel,
  onClick,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none cursor-pointer'

  const variants = {
    black: 'bg-black hover:bg-stone-900 text-white shadow-sm active:bg-stone-800',
    orange: 'bg-[#f05a22] hover:bg-[#d84d1a] text-white shadow-sm active:bg-[#c24012]',
    outline: 'border-2 border-[#f05a22] text-[#f05a22] hover:bg-orange-50 active:bg-orange-100',
  }

  const sizes = {
    sm: 'text-xs px-4 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-8 py-3 gap-2.5',
  }

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.orange} ${sizes[size] || sizes.md} ${className}`

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={(e) => {
          if (onClick) onClick(e)
          if (!target && href.startsWith('/')) {
            window.location.href = href
          }
        }}
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
