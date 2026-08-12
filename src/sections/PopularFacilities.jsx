import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { popularFacilitiesData } from '../data/popularFacilitiesData'
import FacilityItem from '../components/common/FacilityItem'
import Button from '../components/common/Button'
import FacilityFormModal from '../components/common/FacilityFormModal'
import ConfirmDeleteModal from '../components/common/ConfirmDeleteModal'

export function PopularFacilities() {
  const [facilities, setFacilities] = useState(popularFacilitiesData)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)

  // Add Facility Handler
  const handleAddSubmit = (formData) => {
    const newFacility = {
      id: `facility-${Date.now()}`,
      title: formData.title,
      icon: formData.icon,
    }
    setFacilities((prev) => [...prev, newFacility])
    setIsAddModalOpen(false)
  }

  // Edit Facility Handler
  const handleEditSubmit = (formData) => {
    if (!editingItem) return
    setFacilities((prev) =>
      prev.map((item) =>
        item.id === editingItem.id ? { ...item, title: formData.title, icon: formData.icon } : item
      )
    )
    setEditingItem(null)
  }

  // Delete Facility Handler
  const handleConfirmDelete = () => {
    if (!deletingItem) return
    setFacilities((prev) => prev.filter((item) => item.id !== deletingItem.id))
    setDeletingItem(null)
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="hidden sm:block sm:w-36" aria-hidden="true" />
          <div className="text-center flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-2">
              Popular Facilities
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Explore the most loved facilities offered by our property.
            </p>
          </div>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end sm:w-36">
            <Button
              variant="black"
              size="sm"
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Facility</span>
            </Button>
          </div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {facilities.map((item) => (
            <FacilityItem
              key={item.id}
              title={item.title}
              icon={item.icon}
              onEdit={() => setEditingItem(item)}
              onDelete={() => setDeletingItem(item)}
            />
          ))}
        </div>
      </div>

      {/* Add Facility Modal */}
      <FacilityFormModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        mode="add"
      />

      {/* Edit Facility Modal */}
      <FacilityFormModal
        isOpen={!!editingItem}
        onClose={() => setEditingItem(null)}
        onSubmit={handleEditSubmit}
        initialData={editingItem}
        mode="edit"
      />

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={!!deletingItem}
        onClose={() => setDeletingItem(null)}
        onConfirm={handleConfirmDelete}
        title={deletingItem?.title || ''}
      />
    </section>
  )
}

export default PopularFacilities
