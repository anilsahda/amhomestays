import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'
import Button from './Button'

export function ExperienceCard({ title, description, icon, image, link = '#', onEdit, onDelete }) {
  const imgSrc = image || icon

  return (
    <div className="flex flex-col items-center justify-between text-center bg-white p-6 rounded-xl border border-gray-100 shadow-xs hover:shadow-md transition-shadow duration-300 h-full">
      <div className="flex flex-col items-center w-full">
        {/* Experience Icon / Image */}
        {imgSrc && (
          <div className="w-12 h-12 mb-4 flex items-center justify-center overflow-hidden rounded-md">
            <img src={imgSrc} alt={title} className="max-w-full max-h-full object-contain" />
          </div>
        )}

        {/* Experience Title */}
        <h4 className="text-lg font-bold text-gray-800 tracking-wider mb-2">
          {title}
        </h4>

        {/* Experience Description */}
        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
          {description}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3 w-full mt-auto">
        {/* Explore Action Button */}
        <a href={link} className="inline-block">
          <Button variant="orange" size="sm" className="px-6 py-2 rounded-full font-semibold">
            Explore
          </Button>
        </a>

        {/* Edit & Delete Action Buttons */}
        {(onEdit || onDelete) && (
          <div className="flex items-center justify-center gap-2 pt-3 border-t border-gray-100 w-full mt-1">
            {onEdit && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onEdit()
                }}
                className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 active:bg-gray-300 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Edit Experience"
              >
                <Pencil className="w-3.5 h-3.5 text-gray-600" />
                <span>Edit</span>
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
                className="px-3 py-1.5 text-xs font-medium text-red-600 bg-red-50 hover:bg-red-100 active:bg-red-200 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Delete Experience"
              >
                <Trash2 className="w-3.5 h-3.5 text-red-600" />
                <span>Delete</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceCard

