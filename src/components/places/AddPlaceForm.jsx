import { useState } from 'react'

const initialFormValues = {
  name: '',
  city: 'Mumbai',
  description: '',
  tags: '',
  image: '',
  latitude: '',
  longitude: '',
}

function AddPlaceForm({ cities, onAddPlace }) {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const nextPlace = {
      name: formValues.name.trim(),
      city: formValues.city,
      description: formValues.description.trim(),
      image: formValues.image.trim(),
      // Store coordinates as numbers so map links can be generated reliably.
      latitude: Number(formValues.latitude),
      longitude: Number(formValues.longitude),
      tags: formValues.tags
        .split(',')
        .map((tag) => tag.trim().toLowerCase())
        .filter(Boolean),
    }

    if (
      !nextPlace.name ||
      !nextPlace.description ||
      !nextPlace.image ||
      Number.isNaN(nextPlace.latitude) ||
      Number.isNaN(nextPlace.longitude) ||
      nextPlace.tags.length === 0
    ) {
      setStatusMessage(
        'Please fill in the name, description, image URL, valid coordinates, and at least one tag.',
      )
      return
    }

    onAddPlace(nextPlace)
    setFormValues(initialFormValues)
    setStatusMessage('Hidden gem saved locally and added to your feed.')
  }

  return (
    <section
      id="add-place"
      className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
            Share a place
          </p>
          <h3 className="mt-2 text-3xl font-semibold text-white">
            Add a hidden gem to the map
          </h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-slate-400">
          Add your own underrated spot. New entries are stored in your browser
          and merged into the feed automatically.
        </p>
      </div>

      <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
        <label className="space-y-2">
          <span className="text-sm text-slate-300">Place name</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="name"
            onChange={handleChange}
            placeholder="Moonlit Steps Cafe"
            type="text"
            value={formValues.name}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-300">City</span>
          <select
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="city"
            onChange={handleChange}
            value={formValues.city}
          >
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm text-slate-300">Short description</span>
          <textarea
            className="min-h-28 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="description"
            onChange={handleChange}
            placeholder="What makes this place feel special?"
            value={formValues.description}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-300">Tags</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="tags"
            onChange={handleChange}
            placeholder="peaceful, study, sunset"
            type="text"
            value={formValues.tags}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-300">Image URL</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="image"
            onChange={handleChange}
            placeholder="https://images.example.com/place.jpg"
            type="url"
            value={formValues.image}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-300">Latitude</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="latitude"
            onChange={handleChange}
            placeholder="19.0760"
            step="any"
            type="number"
            value={formValues.latitude}
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm text-slate-300">Longitude</span>
          <input
            className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 text-slate-100 outline-none transition focus:border-cyan-300/40 focus:bg-slate-950/90"
            name="longitude"
            onChange={handleChange}
            placeholder="72.8777"
            step="any"
            type="number"
            value={formValues.longitude}
          />
        </label>

        <p className="rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-sm text-slate-400 md:col-span-2">
          {statusMessage || 'Tip: separate multiple vibes with commas and use decimal coordinates.'}
        </p>

        <button
          className="mt-2 inline-flex h-12 items-center justify-center rounded-2xl bg-emerald-300 px-5 text-sm font-semibold text-slate-950 transition duration-300 hover:scale-[1.01] hover:bg-emerald-200 md:col-span-2 md:w-fit"
          type="submit"
        >
          Submit hidden gem
        </button>
      </form>
    </section>
  )
}

export default AddPlaceForm
