import React, { useEffect } from 'react'
import { X, AlertTriangle } from 'lucide-react'

export function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = '',
  itemType = 'Experience',
  isDeleting = false,
  apiError = null,
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen && !isDeleting) {
        onClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, isDeleting])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
      onClick={() => !isDeleting && onClose()}
    >
      <div
        className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100 transform transition-all duration-200 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-red-50/50">
          <div className="flex items-center gap-2 text-red-600 font-bold text-base">
            <AlertTriangle className="w-5 h-5" />
            <span>Delete {itemType}?</span>
          </div>
          <button
            type="button"
            disabled={isDeleting}
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-200/50 transition-colors cursor-pointer disabled:opacity-50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {apiError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-100 rounded-lg text-xs text-red-600 font-medium">
              {apiError}
            </div>
          )}

          <p className="text-sm text-gray-600 leading-relaxed">
            Are you sure you want to delete <span className="font-semibold text-gray-900">"{title}"</span>? This action will remove the card from the section.
          </p>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-100 mt-6">
            <button
              type="button"
              disabled={isDeleting}
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors cursor-pointer disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={isDeleting}
              onClick={onConfirm}
              className="px-5 py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-full transition-colors cursor-pointer shadow-xs disabled:opacity-50 flex items-center gap-1.5"
            >
              {isDeleting ? 'Deleting...' : 'Delete'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmDeleteModal
