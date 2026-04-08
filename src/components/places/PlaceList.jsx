import PlaceCard from './PlaceCard'

function PlaceList({ places, resultsLabel }) {
  return (
    <section id="trending" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-quick text-[0.72rem] font-bold uppercase tracking-[0.28em] text-stone-400">
            Trending places
          </p>
          <h3 className="mt-2 max-w-2xl font-outfit text-3xl font-bold text-stone-100 sm:text-4xl">
            Curated spots people are bookmarking right now
          </h3>
        </div>
        <p className="max-w-md font-slab text-sm font-light leading-7 text-stone-400">
          {resultsLabel}
        </p>
      </div>

      {places.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      ) : (
        <div className="surface-panel rounded-[1.75rem] border-dashed p-10 text-center">
          <p className="font-sans text-xl font-semibold text-stone-100">No places match yet</p>
          <p className="mt-3 font-slab text-sm font-light leading-7 text-stone-400">
            Try another city, clear the selected vibe, or search with a broader
            keyword.
          </p>
        </div>
      )}
    </section>
  )
}

export default PlaceList
