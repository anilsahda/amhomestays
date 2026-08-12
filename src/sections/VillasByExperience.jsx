import React, { useState } from 'react'
import { Plus } from 'lucide-react'
import { villasByExperienceData } from '../data/villasByExperienceData'
import ExperienceCard from '../components/common/ExperienceCard'
import Button from '../components/common/Button'
import ExperienceFormModal from '../components/common/ExperienceFormModal'
import ConfirmDeleteModal from '../components/common/ConfirmDeleteModal'

export function VillasByExperience() {
  const [experiences, setExperiences] = useState(villasByExperienceData)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)

  // Add Handler
  const handleAddSubmit = (formData) => {
    const newExperience = {
      id: `exp-${Date.now()}`,
      ...formData,
    }
    setExperiences((prev) => [...prev, newExperience])
    setIsAddModalOpen(false)
  }

  // Edit Handler
  const handleEditSubmit = (formData) => {
    if (!editingItem) return
    setExperiences((prev) =>
      prev.map((item) =>
        item.id === editingItem.id ? { ...item, ...formData } : item
      )
    )
    setEditingItem(null)
  }

  // Delete Handler
  const handleConfirmDelete = () => {
    if (!deletingItem) return
    setExperiences((prev) => prev.filter((item) => item.id !== deletingItem.id))
    setDeletingItem(null)
  }

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading & Add Button */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div className="hidden sm:block sm:w-36" aria-hidden="true" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center flex-1">
            Discover Villas by Experience
          </h2>
          <div className="w-full sm:w-auto flex justify-center sm:justify-end sm:w-36">
            <Button
              variant="black"
              size="sm"
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Experience</span>
            </Button>
          </div>
        </div>

        {/* 4-Column Experience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experiences.map((item) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
              onEdit={() => setEditingItem(item)}
              onDelete={() => setDeletingItem(item)}
            />
          ))}
        </div>

        {/* Bottom Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="black" size="lg" className="px-8 font-semibold" href="/booking">
            Book Now
          </Button>
          <Button variant="orange" size="lg" className="px-8 font-semibold" href="/request-a-quote">
            Request a Quote
          </Button>
        </div>
      </div>

      {/* Add Experience Modal */}
      <ExperienceFormModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddSubmit}
        mode="add"
      />

      {/* Edit Experience Modal */}
      <ExperienceFormModal
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

export default VillasByExperience

