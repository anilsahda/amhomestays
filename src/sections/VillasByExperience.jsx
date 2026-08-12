import React, { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import ExperienceCard from '../components/common/ExperienceCard'
import Button from '../components/common/Button'
import ExperienceFormModal from '../components/common/ExperienceFormModal'
import ConfirmDeleteModal from '../components/common/ConfirmDeleteModal'
import Toast from '../components/common/Toast'
import {
  fetchDiscoveryVillas,
  createDiscoveryVilla,
  updateDiscoveryVilla,
  deleteDiscoveryVilla,
} from '../services/discoveryVillasService'

export function VillasByExperience() {
  const [experiences, setExperiences] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [addModalError, setAddModalError] = useState(null)
  const [isEditingSubmitting, setIsEditingSubmitting] = useState(false)
  const [editModalError, setEditModalError] = useState(null)
  const [isDeletingSubmitting, setIsDeletingSubmitting] = useState(false)
  const [deleteModalError, setDeleteModalError] = useState(null)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const loadVillas = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchDiscoveryVillas()
      setExperiences(data)
    } catch (err) {
      console.error('Error fetching discovery villas:', err)
      setError('Unable to load discovery villas at this time.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadVillas()
  }, [])

  // Add Handler (POST to real backend API)
  const handleAddSubmit = async (formData) => {
    try {
      setIsSubmitting(true)
      setAddModalError(null)

      const payload = new FormData()
      payload.append('title', formData.title)
      payload.append('description', formData.description)
      payload.append('appId', formData.appId)
      if (formData.imageFile) {
        payload.append('image', formData.imageFile)
      }

      const createdVilla = await createDiscoveryVilla(payload)

      // Add newly created item returned by backend to state
      setExperiences((prev) => [...prev, createdVilla])
      setIsAddModalOpen(false)
      setToastMessage('Experience added successfully.')
    } catch (err) {
      console.error('Error creating discovery villa:', err)
      setAddModalError(
        err.message || 'Unable to create experience. Please try again.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  // Edit Handler (PUT to real backend API)
  const handleEditSubmit = async (formData) => {
    if (!editingItem) return
    try {
      setIsEditingSubmitting(true)
      setEditModalError(null)

      const payload = new FormData()
      payload.append('title', formData.title)
      payload.append('description', formData.description)
      payload.append('appId', formData.appId)
      if (formData.imageFile) {
        payload.append('image', formData.imageFile)
      }

      const updatedVilla = await updateDiscoveryVilla(editingItem.id, payload)

      setExperiences((prev) =>
        prev.map((item) =>
          item.id === editingItem.id ? { ...item, ...updatedVilla } : item
        )
      )
      setEditingItem(null)
      setToastMessage('Experience updated successfully.')
    } catch (err) {
      console.error('Error updating discovery villa:', err)
      setEditModalError(
        err.message || 'Unable to update experience. Please try again.'
      )
    } finally {
      setIsEditingSubmitting(false)
    }
  }

  // Delete Handler (DELETE to real backend API)
  const handleConfirmDelete = async () => {
    if (!deletingItem) return
    try {
      setIsDeletingSubmitting(true)
      setDeleteModalError(null)

      await deleteDiscoveryVilla(deletingItem.id)

      setExperiences((prev) =>
        prev.filter((item) => item.id !== deletingItem.id)
      )
      setDeletingItem(null)
      setToastMessage('Experience deleted successfully.')
    } catch (err) {
      console.error('Error deleting discovery villa:', err)
      setDeleteModalError(
        err.message || 'Unable to delete experience. Please try again.'
      )
    } finally {
      setIsDeletingSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 relative">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

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
              onClick={() => {
                setAddModalError(null)
                setIsAddModalOpen(true)
              }}
              className="px-4 py-2 font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Experience</span>
            </Button>
          </div>
        </div>

        {/* Loading / Error / Grid Content */}
        {loading ? (
          <div className="flex justify-center items-center py-12 mb-12">
            <p className="text-sm font-medium text-gray-500 animate-pulse">
              Loading Discovery Villas...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-8 px-4 bg-red-50/70 rounded-xl border border-red-100 max-w-md mx-auto my-6 mb-12">
            <p className="text-sm text-red-600 font-medium mb-3">{error}</p>
            <button
              type="button"
              onClick={loadVillas}
              className="px-4 py-1.5 text-xs font-semibold text-red-700 bg-red-100 hover:bg-red-200 rounded-full transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : experiences.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 max-w-md mx-auto my-6 mb-12">
            <p className="text-sm text-gray-500 font-medium">No discovery villas available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {experiences.map((item) => (
              <ExperienceCard
                key={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
                link={item.link}
                onEdit={() => {
                  setEditModalError(null)
                  setEditingItem(item)
                }}
                onDelete={() => {
                  setDeleteModalError(null)
                  setDeletingItem(item)
                }}
              />
            ))}
          </div>
        )}

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
        onClose={() => {
          setIsAddModalOpen(false)
          setAddModalError(null)
        }}
        onSubmit={handleAddSubmit}
        mode="add"
        isSubmitting={isSubmitting}
        apiError={addModalError}
      />

      {/* Edit Experience Modal */}
      <ExperienceFormModal
        isOpen={!!editingItem}
        onClose={() => {
          setEditingItem(null)
          setEditModalError(null)
        }}
        onSubmit={handleEditSubmit}
        initialData={editingItem}
        mode="edit"
        isSubmitting={isEditingSubmitting}
        apiError={editModalError}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmDeleteModal
        isOpen={!!deletingItem}
        onClose={() => {
          setDeletingItem(null)
          setDeleteModalError(null)
        }}
        onConfirm={handleConfirmDelete}
        title={deletingItem?.title || ''}
        isDeleting={isDeletingSubmitting}
        apiError={deleteModalError}
      />
    </section>
  )
}

export default VillasByExperience

