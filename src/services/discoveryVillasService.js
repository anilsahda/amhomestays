const API_BASE_URL = import.meta.env.VITE_API_URL

export async function fetchDiscoveryVillas() {
  const response = await fetch(`${API_BASE_URL}/api/v1/discovery-villas`)
  if (!response.ok) {
    throw new Error(`Failed to fetch discovery villas (Status: ${response.status})`)
  }
  const result = await response.json()
  if (result && Array.isArray(result.data)) {
    return result.data
  }
  return []
}

export async function createDiscoveryVilla(formDataPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/discovery-villas`, {
    method: 'POST',
    body: formDataPayload,
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to create discovery villa (Status: ${response.status})`)
  }

  return result.data
}

export async function updateDiscoveryVilla(id, formDataPayload) {
  const response = await fetch(`${API_BASE_URL}/api/v1/discovery-villas/${id}`, {
    method: 'PUT',
    body: formDataPayload,
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to update discovery villa (Status: ${response.status})`)
  }

  return result.data
}

export async function deleteDiscoveryVilla(id) {
  const response = await fetch(`${API_BASE_URL}/api/v1/discovery-villas/${id}`, {
    method: 'DELETE',
  })

  const result = await response.json()

  if (!response.ok || !result.success) {
    throw new Error(result.message || `Failed to delete discovery villa (Status: ${response.status})`)
  }

  return result
}
