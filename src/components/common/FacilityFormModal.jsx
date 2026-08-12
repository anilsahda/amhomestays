import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Button from './Button'

export function FacilityFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  mode = 'add',
}) {
  const [title, setTitle] = useState('')
  const [icon, setIcon] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData && mode === 'edit') {
      setTitle(initialData.title || initialData.name || '')
      setIcon(initialData.icon || '')
    } else {
      setTitle('')
      setIcon('')
    }
    setErrors({})
  }, [initialData, mode, isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const validate = () => {
    const newErrors = {}
    if (!title.trim()) newErrors.title = 'Facility title is required'
    if (!icon.trim()) newErrors.icon = 'Icon URL is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    onSubmit({
      title: title.trim(),
      icon: icon.trim(),
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-200 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-800 tracking-tight">
            {mode === 'edit' ? 'Edit Facility' : 'Add Facility'}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title Field */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Facility Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Free Car Parking"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-lg border ${
                errors.title ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#f05a22]'
              } text-sm text-gray-800 focus:outline-none transition-colors bg-white`}
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
          </div>

          {/* Icon URL Field */}
          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Icon Image URL <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="https://example.com/icon.png"
              value={icon}
              onChange={(e) => setIcon(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-lg border ${
                errors.icon ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#f05a22]'
              } text-sm text-gray-800 focus:outline-none transition-colors bg-white`}
            />
            {errors.icon && <p className="text-xs text-red-500 mt-1">{errors.icon}</p>}
          </div>

          {/* Image Preview if URL entered */}
          {icon.trim() && (
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-white p-1 rounded border border-gray-200">
                <img
                  src={icon}
                  alt="Preview"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://via.placeholder.com/32?text=?'
                  }}
                />
              </div>
              <span className="text-xs text-gray-600 truncate">{title || 'Icon Preview'}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <Button variant="orange" size="sm" type="submit" className="px-5 font-semibold">
              {mode === 'edit' ? 'Save Changes' : 'Add Facility'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FacilityFormModal
