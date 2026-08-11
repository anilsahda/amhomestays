import React, { useState } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'
import Logo from '../common/Logo'
import Button from '../common/Button'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'About Us', href: '/about-us' },
    { label: 'Amber Moon', href: '/ambermoon' },
    { label: 'White Rose', href: '/white-rose' },
    { label: 'Blog', href: '/blog' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      {/* Top Utility Contact Bar - Vibrant Orange matching screenshot */}
      <div className="bg-[#f05a22] text-white text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 sm:gap-10">
          <a
            href="tel:+919350584611"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <Phone className="w-3.5 h-3.5 fill-white text-white" />
            <span className="font-medium">+91 9350584611</span>
          </a>
          <a
            href="mailto:stay@wunderhomes.in"
            className="flex items-center gap-1.5 hover:opacity-90 transition-opacity"
          >
            <Mail className="w-3.5 h-3.5 fill-white text-white" />
            <span className="font-medium">stay@wunderhomes.in</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-800 hover:text-[#f05a22] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="black" size="md" href="/booking">
              Book Now
            </Button>
            <Button variant="orange" size="md" href="/request-a-quote">
              Request a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#f05a22] hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-3 py-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-base font-medium text-gray-800 hover:text-[#f05a22] hover:bg-orange-50 px-3 py-2.5 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-2.5 pt-4 mt-2 border-t border-gray-100">
            <Button variant="black" size="md" className="w-full justify-center" href="/booking">
              Book Now
            </Button>
            <Button variant="orange" size="md" className="w-full justify-center" href="/request-a-quote">
              Request a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
