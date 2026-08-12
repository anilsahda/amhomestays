import React, { useState, useEffect } from 'react'
import { Plus } from 'lucide-react'
import FacilityItem from '../components/common/FacilityItem'
import Button from '../components/common/Button'
import FacilityFormModal from '../components/common/FacilityFormModal'
import ConfirmDeleteModal from '../components/common/ConfirmDeleteModal'
import Toast from '../components/common/Toast'
import {
  fetchPopularFacilities,
  createPopularFacility,
  updatePopularFacility,
  deletePopularFacility,
} from '../services/popularFacilitiesService'

export function PopularFacilities() {
  const [facilities, setFacilities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [isAddSubmitting, setIsAddSubmitting] = useState(false)
  const [addModalError, setAddModalError] = useState(null)
  const [isEditSubmitting, setIsEditSubmitting] = useState(false)
  const [editModalError, setEditModalError] = useState(null)
  const [isDeleteSubmitting, setIsDeleteSubmitting] = useState(false)
  const [deleteModalError, setDeleteModalError] = useState(null)
  const [editingItem, setEditingItem] = useState(null)
  const [deletingItem, setDeletingItem] = useState(null)
  const [toastMessage, setToastMessage] = useState(null)

  const loadFacilities = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchPopularFacilities()
      setFacilities(data)
    } catch (err) {
      console.error('Error fetching popular facilities:', err)
      setError('Unable to load popular facilities at this time.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFacilities()
  }, [])

  // Add Handler (POST to real backend API)
  const handleAddSubmit = async (formData) => {
    try {
      setIsAddSubmitting(true)
      setAddModalError(null)

      const payload = new FormData()
      payload.append('name', formData.title || formData.name)
      payload.append('appId', formData.appId)
      if (formData.iconFile) {
        payload.append('icon', formData.iconFile)
      }

      const createdFacility = await createPopularFacility(payload)

      setFacilities((prev) => [...prev, createdFacility])
      setIsAddModalOpen(false)
      setToastMessage('Facility added successfully.')
    } catch (err) {
      console.error('Error creating popular facility:', err)
      setAddModalError(
        err.message || 'Unable to add facility. Please try again.'
      )
    } finally {
      setIsAddSubmitting(false)
    }
  }

  // Edit Handler (PUT to real backend API)
  const handleEditSubmit = async (formData) => {
    if (!editingItem) return
    try {
      setIsEditSubmitting(true)
      setEditModalError(null)

      const payload = new FormData()
      payload.append('name', formData.title || formData.name)
      payload.append('appId', formData.appId)
      if (formData.iconFile) {
        payload.append('icon', formData.iconFile)
      }

      const updatedFacility = await updatePopularFacility(editingItem.id, payload)

      setFacilities((prev) =>
        prev.map((item) =>
          item.id === editingItem.id ? { ...item, ...updatedFacility } : item
        )
      )
      setEditingItem(null)
      setToastMessage('Facility updated successfully.')
    } catch (err) {
      console.error('Error updating popular facility:', err)
      setEditModalError(
        err.message || 'Unable to update facility. Please try again.'
      )
    } finally {
      setIsEditSubmitting(false)
    }
  }

  // Delete Handler (DELETE to real backend API)
  const handleConfirmDelete = async () => {
    if (!deletingItem) return
    try {
      setIsDeleteSubmitting(true)
      setDeleteModalError(null)

      await deletePopularFacility(deletingItem.id)

      setFacilities((prev) =>
        prev.filter((item) => item.id !== deletingItem.id)
      )
      setDeletingItem(null)
      setToastMessage('Facility deleted successfully.')
    } catch (err) {
      console.error('Error deleting popular facility:', err)
      setDeleteModalError(
        err.message || 'Unable to delete facility. Please try again.'
      )
    } finally {
      setIsDeleteSubmitting(false)
    }
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-100 relative">
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

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
              onClick={() => {
                setAddModalError(null)
                setIsAddModalOpen(true)
              }}
              className="px-4 py-2 font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add Facility</span>
            </Button>
          </div>
        </div>

        {/* Loading / Error / Grid Content */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-sm font-medium text-gray-500 animate-pulse">
              Loading Popular Facilities...
            </p>
          </div>
        ) : error ? (
          <div className="text-center py-8 px-4 bg-red-50/70 rounded-xl border border-red-100 max-w-md mx-auto my-6">
            <p className="text-sm text-red-600 font-medium mb-3">{error}</p>
            <button
              type="button"
              onClick={loadFacilities}
              className="px-4 py-1.5 text-xs font-semibold text-red-700 bg-red-100 hover:bg-red-200 rounded-full transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        ) : facilities.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-100 max-w-md mx-auto my-6">
            <p className="text-sm text-gray-500 font-medium">No popular facilities available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((item) => (
              <FacilityItem
                key={item.id}
                title={item.name || item.title}
                icon={item.icon}
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
      </div>

      {/* Add Facility Modal */}
      <FacilityFormModal
        isOpen={isAddModalOpen}
        onClose={() => {
          setIsAddModalOpen(false)
          setAddModalError(null)
        }}
        onSubmit={handleAddSubmit}
        mode="add"
        isSubmitting={isAddSubmitting}
        apiError={addModalError}
      />

      {/* Edit Facility Modal */}
      <FacilityFormModal
        isOpen={!!editingItem}
        onClose={() => {
          setEditingItem(null)
          setEditModalError(null)
        }}
        onSubmit={handleEditSubmit}
        initialData={editingItem}
        mode="edit"
        isSubmitting={isEditSubmitting}
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
        title={deletingItem?.name || deletingItem?.title || ''}
        itemType="Facility"
        isDeleting={isDeleteSubmitting}
        apiError={deleteModalError}
      />
    </section>
  )
}

export default PopularFacilities
