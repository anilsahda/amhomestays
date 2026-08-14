const API_BASE_URL = import.meta.env.VITE_API_URL

export async function fetchPopularFacilities() {
  const response = await fetch(`${API_BASE_URL}/api/v1/facilities`)
  if (!response.ok) {
    throw new Error(`Failed to fetch popular facilities (Status: ${response.status})`)
  }
  const result = await response.json()
  if (result && Array.isArray(result.data)) {
    return result.data
  }
  return []
}

export async function createPopularFacility(formDataPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/facilities`, {
    method: 'POST',
    body: formDataPayload,
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to create facility (Status: ${response.status})`)
  }

  return result.data
}

export async function updatePopularFacility(id, formDataPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/facilities/${id}`, {
    method: 'PUT',
    body: formDataPayload,
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to update facility (Status: ${response.status})`)
  }

  return result.data
}

export async function deletePopularFacility(id) {
  const response = await fetch(`${API_BASE_URL}/api/v1/facilities/${id}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    let errorMsg = `Failed to delete facility (Status: ${response.status})`
    try {
      const result = await response.json()
      if (result && result.message) errorMsg = result.message
    } catch (_) {
      // ignore JSON parse error on 204/empty responses
    }
    throw new Error(errorMsg)
  }

  return true
}
