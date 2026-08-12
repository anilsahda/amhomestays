import React, { useEffect } from 'react'
import { CheckCircle2, X } from 'lucide-react'

export function Toast({ message, onClose, duration = 4000 }) {
  useEffect(() => {
    if (!message) return
    const timer = setTimeout(() => {
      onClose()
    }, duration)
    return () => clearTimeout(timer)
  }, [message, duration, onClose])

  if (!message) return null

  return (
    <div className="fixed top-5 right-5 z-50 flex items-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-xl shadow-2xl border border-gray-800 animate-in fade-in slide-in-from-top-3 duration-300 max-w-md">
      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
      <span className="text-sm font-medium pr-2">{message}</span>
      <button
        type="button"
        onClick={onClose}
        className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 transition-colors cursor-pointer ml-auto"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

export default Toast
