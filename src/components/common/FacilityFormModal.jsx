import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Button from './Button'

export function FacilityFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
  mode = 'add',
  isSubmitting = false,
  apiError = null,
}) {
  const [title, setTitle] = useState('')
  const [appId, setAppId] = useState('')
  const [icon, setIcon] = useState('')
  const [iconFile, setIconFile] = useState(null)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initialData && mode === 'edit') {
      setTitle(initialData.name || initialData.title || '')
      setAppId(initialData.appId || '')
      setIcon(initialData.icon || '')
      setIconFile(null)
    } else {
      setTitle('')
      setAppId('')
      setIcon('')
      setIconFile(null)
    }
    setErrors({})
  }, [initialData, mode, isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isSubmitting) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, isSubmitting])

  if (!isOpen) return null

  const validate = () => {
    const newErrors = {}
    if (!title.trim()) newErrors.title = 'Facility name is required'
    if (mode === 'add' && !iconFile) newErrors.iconFile = 'Icon image file is required'
    if (mode === 'edit' && !icon.trim() && !iconFile) newErrors.icon = 'Icon is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const generatedAppId =
      appId.trim() ||
      title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]/g, '-')

    onSubmit({
      title: title.trim(),
      name: title.trim(),
      appId: generatedAppId,
      iconFile,
      icon: icon.trim(),
    })
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={() => !isSubmitting && onClose()}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-200 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-lg font-bold text-gray-800 tracking-tight">
            {mode === 'edit' ? 'Edit Facility' : 'Add Facility'}
          </h3>
          <button
            type="button"
            disabled={isSubmitting}
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {apiError && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-xs text-red-600 font-medium">
              {apiError}
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              Facility Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Swimming Pool"
              value={title}
              disabled={isSubmitting}
              onChange={(e) => setTitle(e.target.value)}
              className={`w-full px-3.5 py-2.5 rounded-lg border ${
                errors.title ? 'border-red-400 focus:ring-red-200' : 'border-gray-300 focus:border-[#f05a22]'
              } text-sm text-gray-800 focus:outline-none transition-colors bg-white disabled:bg-gray-50`}
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
              App ID <span className="text-gray-400 font-normal">(Auto-generated if empty)</span>
            </label>
            <input
              type="text"
              placeholder="e.g. pool1"
              value={appId}
              disabled={isSubmitting}
              onChange={(e) => setAppId(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg border border-gray-300 focus:border-[#f05a22] text-sm text-gray-800 focus:outline-none transition-colors bg-white disabled:bg-gray-50"
            />
          </div>

          {mode === 'add' ? (
            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Icon Image File <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                accept="image/*"
                disabled={isSubmitting}
                onChange={(e) => setIconFile(e.target.files[0] || null)}
                className={`w-full px-3 py-2 rounded-lg border ${
                  errors.iconFile ? 'border-red-400' : 'border-gray-300'
                } text-xs text-gray-700 focus:outline-none file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer disabled:opacity-50`}
              />
              {errors.iconFile && <p className="text-xs text-red-500 mt-1">{errors.iconFile}</p>}
            </div>
          ) : (
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-1.5">
                Replace Icon Image File <span className="text-gray-400 font-normal">(Optional)</span>
              </label>
              {icon && (
                <div className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-100 rounded-lg">
                  <div className="w-8 h-8 shrink-0 bg-white rounded flex items-center justify-center p-1 border border-gray-200">
                    <img src={icon} alt="Current preview" className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="text-xs text-gray-500 truncate flex-1">Current icon kept if no new file is chosen.</span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                disabled={isSubmitting}
                onChange={(e) => setIconFile(e.target.files[0] || null)}
                className="w-full px-3 py-2 rounded-lg border border-gray-300 text-xs text-gray-700 focus:outline-none file:mr-3 file:py-1 file:px-3 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200 cursor-pointer disabled:opacity-50"
              />
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-100">
            <button
              type="button"
              disabled={isSubmitting}
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <Button
              variant="orange"
              size="sm"
              type="submit"
              disabled={isSubmitting}
              className="px-5 font-semibold disabled:opacity-50"
            >
              {mode === 'edit'
                ? isSubmitting
                  ? 'Saving...'
                  : 'Save Changes'
                : isSubmitting
                ? 'Adding...'
                : 'Add Facility'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FacilityFormModal
