function CitySelector({ cities, onCityChange, selectedCity }) {
  return (
    <section className="surface-panel rounded-[1.75rem] p-6 sm:p-7">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-quick text-[0.72rem] font-bold uppercase tracking-[0.28em] text-stone-400">
            Browse by city
          </p>
          <h3 className="mt-2 font-outfit text-2xl font-bold text-stone-100 sm:text-3xl">
            Pick a city and explore its underrated pockets
          </h3>
        </div>
        <p className="font-slab text-sm font-light text-stone-400">
          Current selection: <span className="font-sans font-medium text-stone-200">{selectedCity}</span>
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          className={`rounded-full px-4 py-2 font-quick text-sm font-bold transition duration-300 ease-in-out ${
            selectedCity === 'All Cities'
              ? 'bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(59,130,246,0.95))] text-white shadow-[0_12px_30px_rgba(92,82,255,0.22)]'
              : 'border border-white/8 bg-white/[0.04] text-stone-300 hover:border-white/14 hover:bg-white/[0.06] hover:text-stone-100'
          }`}
          onClick={() => onCityChange('All Cities')}
          type="button"
        >
          All Cities
        </button>

        {cities.map((city) => {
          const isActive = city === selectedCity

          return (
            <button
              key={city}
              className={`rounded-full px-4 py-2 font-quick text-sm font-bold transition duration-300 ease-in-out ${
                isActive
                  ? 'bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(59,130,246,0.95))] text-white shadow-[0_12px_30px_rgba(92,82,255,0.22)]'
                  : 'border border-white/8 bg-white/[0.04] text-stone-300 hover:border-white/14 hover:bg-white/[0.06] hover:text-stone-100'
              }`}
              onClick={() => onCityChange(city)}
              type="button"
            >
              {city}
            </button>
          )
        })}
      </div>
    </section>
  )
}

export default CitySelector
