function Navbar() {
  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[rgba(20,20,20,0.68)] px-4 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:px-6">
        <div className="min-w-0">
          <p className="font-outfit text-xl font-extrabold tracking-[-0.04em] text-stone-100 sm:text-2xl">
            Vibescape
          </p>
          <p className="mt-1 hidden font-quick text-xs font-semibold uppercase tracking-[0.28em] text-stone-400 sm:block">
            Underrated city discoveries
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <nav className="hidden items-center gap-2 md:flex">
            <a
              className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 font-quick text-sm font-semibold text-stone-300 transition duration-300 ease-in-out hover:border-white/14 hover:bg-white/[0.06] hover:text-stone-100"
              href="#discover"
            >
              Discover
            </a>
            <a
              className="rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 font-quick text-sm font-semibold text-stone-300 transition duration-300 ease-in-out hover:border-white/14 hover:bg-white/[0.06] hover:text-stone-100"
              href="#trending"
            >
              Trending
            </a>
          </nav>

          <a
            className="rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.95),rgba(59,130,246,0.95))] px-4 py-2 font-quick text-sm font-bold text-white shadow-[0_10px_30px_rgba(92,82,255,0.28)] transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_14px_34px_rgba(92,82,255,0.36)]"
            href="#add-place"
          >
            Share a spot
          </a>
        </div>
      </div>

      <div className="mx-auto mt-3 flex w-full max-w-7xl md:hidden">
        <nav className="surface-panel flex w-full items-center justify-center gap-2 rounded-full px-3 py-2">
          <a
            className="rounded-full px-3 py-2 font-quick text-sm font-semibold text-stone-300 transition duration-300 ease-in-out hover:bg-white/[0.05] hover:text-stone-100"
            href="#discover"
          >
            Discover
          </a>
          <a
            className="rounded-full px-3 py-2 font-quick text-sm font-semibold text-stone-300 transition duration-300 ease-in-out hover:bg-white/[0.05] hover:text-stone-100"
            href="#trending"
          >
            Trending
          </a>
          <a
            className="rounded-full px-3 py-2 font-quick text-sm font-semibold text-stone-300 transition duration-300 ease-in-out hover:bg-white/[0.05] hover:text-stone-100"
            href="#add-place"
          >
            Add
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
