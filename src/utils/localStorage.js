const USER_PLACES_STORAGE_KEY = 'vibescape:user-places'

export function loadUserPlaces() {
  if (typeof window === 'undefined') {
    return []
  }

  try {
    const storedPlaces = window.localStorage.getItem(USER_PLACES_STORAGE_KEY)

    if (!storedPlaces) {
      return []
    }

    const parsedPlaces = JSON.parse(storedPlaces)
    return Array.isArray(parsedPlaces) ? parsedPlaces : []
  } catch {
    return []
  }
}

export function saveUserPlaces(places) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(USER_PLACES_STORAGE_KEY, JSON.stringify(places))
}

export { USER_PLACES_STORAGE_KEY }
