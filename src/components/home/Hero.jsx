function Hero({
  onSearchChange,
  onTagToggle,
  placeCount,
  searchValue,
  selectedCity,
  selectedTag,
  tags,
}) {
  return (
    <section
      id="discover"
      className="surface-panel animate-fade-in-up relative overflow-hidden rounded-[2rem] px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.22),_transparent_32%),radial-gradient(circle_at_80%_18%,_rgba(59,130,246,0.22),_transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-quick text-[0.7rem] font-bold uppercase tracking-[0.28em] text-stone-300">
            Find your city vibe
          </span>
          <h2 className="text-balance mx-auto mt-6 max-w-4xl font-outfit text-4xl font-extrabold tracking-[-0.05em] text-stone-100 sm:text-5xl lg:mx-0 lg:text-7xl">
            Discover places that feel quiet, cinematic, and worth keeping to yourself.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-slab text-base font-light leading-8 text-stone-300 sm:text-lg lg:mx-0">
            Vibescape helps curious people uncover underrated places that feel
            personal, local, and worth sharing.
          </p>

          <div className="accent-ring mx-auto mt-8 max-w-3xl rounded-[1.75rem] border border-white/10 bg-[rgba(18,18,18,0.78)] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.24)] backdrop-blur-2xl lg:mx-0">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <input
                onChange={(event) => onSearchChange(event.target.value)}
                value={searchValue}
                className="h-14 flex-1 rounded-[1.1rem] border border-white/8 bg-white/[0.04] px-5 font-quick text-sm font-semibold text-stone-100 outline-none transition duration-300 ease-in-out placeholder:text-stone-500 focus:border-white/16 focus:bg-white/[0.06]"
                placeholder="Search hidden cafes, viewpoints, bookstores"
              />
              <button className="h-14 rounded-[1.1rem] bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(59,130,246,0.98))] px-6 font-quick text-sm font-bold text-white transition duration-300 ease-in-out hover:scale-[1.01] hover:shadow-[0_12px_30px_rgba(92,82,255,0.3)]">
                Search now
              </button>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap justify-center gap-3 text-sm text-stone-300 lg:justify-start">
            <span className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 font-quick font-semibold">
              {placeCount} visible places
            </span>
            <span className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 font-quick font-semibold">
              {selectedCity}
            </span>
            {selectedTag ? (
              <span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-4 py-2 font-quick font-semibold text-violet-100">
                #{selectedTag}
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[1.75rem] border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
            <p className="font-quick text-[0.72rem] font-bold uppercase tracking-[0.28em] text-stone-400">
              Popular vibes
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <button
                  key={tag}
                  className={`rounded-full border px-4 py-2 font-quick text-sm font-bold transition duration-300 ease-in-out ${
                    selectedTag === tag
                      ? 'border-transparent bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(59,130,246,0.95))] text-white shadow-[0_12px_30px_rgba(92,82,255,0.22)]'
                      : 'border-white/8 bg-white/[0.03] text-stone-300 hover:border-white/14 hover:bg-white/[0.06] hover:text-stone-100'
                  }`}
                  onClick={() => onTagToggle(tag)}
                  type="button"
                >
                  #{tag}
                </button>
              ))}
            </div>
            <p className="mt-4 font-slab text-sm font-light leading-7 text-stone-400">
              Tap a vibe to narrow the feed instantly. Tap the same vibe again
              to clear it.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="font-outfit text-3xl font-bold text-stone-100">{placeCount}</p>
              <p className="mt-2 font-slab text-sm font-light leading-7 text-stone-400">
                Visible places in your current discovery view
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="font-outfit text-3xl font-bold text-stone-100">{tags.length}</p>
              <p className="mt-2 font-slab text-sm font-light leading-7 text-stone-400">
                Curated vibe paths for city views, study gems, and more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
