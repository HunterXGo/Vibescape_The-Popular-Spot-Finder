import { useState } from 'react'
import {
  getGoogleMapsDirectionsUrl,
  getGoogleMapsEmbedUrl,
  getGoogleMapsPlaceUrl,
} from '../../utils/maps'

function PlaceCard({ place }) {
  const actionButtonClassName =
    'inline-flex h-11 items-center justify-center rounded-full border px-4 font-quick text-sm font-bold transition duration-300 ease-in-out hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-violet-300/30'
  const [isMapVisible, setIsMapVisible] = useState(false)

  // This basic map URL works even when the browser cannot provide the user's location.
  const mapUrl = getGoogleMapsPlaceUrl(place.latitude, place.longitude)
  const embeddedMapUrl = getGoogleMapsEmbedUrl(place.latitude, place.longitude)

  const openMapWindow = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const handleOpenDirections = () => {
    if (!navigator.geolocation) {
      openMapWindow(mapUrl)
      return
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        // When location access is allowed, build a route from the user's position
        // to the selected destination for a more useful directions experience.
        const directionsFromUserUrl = getGoogleMapsDirectionsUrl(
          coords.latitude,
          coords.longitude,
          place.latitude,
          place.longitude,
        )

        openMapWindow(directionsFromUserUrl)
      },
      () => {
        openMapWindow(mapUrl)
      },
      {
        enableHighAccuracy: true,
        timeout: 7000,
      },
    )
  }

  return (
    <article className="group surface-panel animate-fade-in-up overflow-hidden rounded-[1.75rem] transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(50,50,93,0.26)]">
      <div className="relative h-60 overflow-hidden">
        <img
          alt={place.name}
          className="h-full w-full object-cover transition duration-500 ease-in-out group-hover:scale-[1.04]"
          src={place.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/20 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 font-quick text-[0.68rem] font-bold uppercase tracking-[0.24em] text-stone-200 backdrop-blur-md">
          {place.city}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
          <div className="max-w-[75%] rounded-[1.25rem] border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-md">
            <p className="font-quick text-[0.65rem] font-bold uppercase tracking-[0.3em] text-stone-400">
              Best time
            </p>
            <p className="mt-1 font-sans text-sm font-semibold text-stone-100">
              {place.bestTime}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-5 sm:p-6">
        <div>
          <h4 className="font-sans text-2xl font-semibold tracking-[-0.03em] text-stone-100">
            {place.name}
          </h4>
          <p className="mt-3 font-slab text-[0.97rem] font-light leading-7 text-stone-300">
            {place.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {place.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 font-quick text-[0.72rem] font-bold uppercase tracking-[0.16em] text-stone-300"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="border-t border-white/8 pt-5">
          <div className="flex items-center justify-between gap-3">
            <span className="font-slab text-sm font-light text-stone-400">Saved for slow exploring</span>
            <span className="font-quick text-sm font-bold text-stone-200 transition duration-300 group-hover:text-white">
              View vibe
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              className={`${actionButtonClassName} bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(59,130,246,0.95))] text-white shadow-[0_12px_30px_rgba(92,82,255,0.22)] hover:shadow-[0_16px_36px_rgba(92,82,255,0.32)]`}
              onClick={handleOpenDirections}
              type="button"
            >
              Get Directions
            </button>

            <button
              className={`${actionButtonClassName} border-white/8 bg-white/[0.04] text-stone-200 hover:border-white/14 hover:bg-white/[0.07] hover:text-white`}
              onClick={() => setIsMapVisible((currentValue) => !currentValue)}
              type="button"
            >
              {isMapVisible ? 'Hide Map' : 'View on Map'}
            </button>
          </div>

          {isMapVisible ? (
            <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-white/8 bg-white/[0.03] p-2">
              <iframe
                allowFullScreen
                className="h-48 w-full rounded-[1rem]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={embeddedMapUrl}
                title={`Map preview for ${place.name}`}
              />
            </div>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default PlaceCard
