import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'

export function FacilityItem({ title, icon, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-2xs hover:shadow-xs transition-shadow duration-200">
      <div className="flex items-center gap-3.5 min-w-0 flex-1">
        {/* Icon Image */}
        <div className="w-9 h-9 shrink-0 flex items-center justify-center">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>

        {/* Facility Title */}
        <h4 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h4>
      </div>

      {/* Action Buttons */}
      {(onEdit || onDelete) && (
        <div className="flex items-center gap-1 shrink-0">
          {onEdit && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onEdit()
              }}
              className="p-1.5 text-xs text-gray-500 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              title="Edit Facility"
            >
              <Pencil className="w-3.5 h-3.5" />
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                onDelete()
              }}
              className="p-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              title="Delete Facility"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default FacilityItem
