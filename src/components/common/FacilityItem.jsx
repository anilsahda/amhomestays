import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'

export function FacilityItem({ title, icon, onEdit, onDelete }) {
  return (
    <div className="group relative flex items-center justify-between gap-4 p-4 bg-white rounded-lg border border-gray-100 shadow-2xs hover:shadow-xs transition-all duration-200">
      <div className="flex items-center gap-4 min-w-0 flex-1">
        {/* Icon Image */}
        <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-gray-50/50 rounded-md p-1">
          {icon ? (
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded" />
          )}
        </div>

        {/* Facility Title */}
        <h4 className="text-sm font-semibold text-gray-800 truncate">
          {title}
        </h4>
      </div>

      {/* Edit & Delete Actions */}
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
              className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors cursor-pointer"
              title="Edit Facility"
              aria-label={`Edit ${title}`}
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
              className="p-1.5 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              title="Delete Facility"
              aria-label={`Delete ${title}`}
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
