export function formatCoordinates(latitude, longitude) {
  return `${latitude},${longitude}`
}

export function getGoogleMapsPlaceUrl(latitude, longitude) {
  return `https://www.google.com/maps?q=${formatCoordinates(latitude, longitude)}`
}

export function getGoogleMapsDirectionsUrl(originLatitude, originLongitude, destinationLatitude, destinationLongitude) {
  const origin = formatCoordinates(originLatitude, originLongitude)
  const destination = formatCoordinates(destinationLatitude, destinationLongitude)

  return `https://www.google.com/maps/dir/${origin}/${destination}`
}

export function getGoogleMapsEmbedUrl(latitude, longitude) {
  return `${getGoogleMapsPlaceUrl(latitude, longitude)}&z=15&output=embed`
}
