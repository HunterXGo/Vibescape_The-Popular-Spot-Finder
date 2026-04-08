import { useEffect, useMemo, useState } from 'react'
import CitySelector from './components/home/CitySelector'
import Hero from './components/home/Hero'
import Navbar from './components/layout/Navbar'
import AddPlaceForm from './components/places/AddPlaceForm'
import PlaceList from './components/places/PlaceList'
import { cities, vibeTags } from './data/constants'
import places from './data/places.json'
import { loadUserPlaces, saveUserPlaces } from './utils/localStorage'

function App() {
  const [selectedCity, setSelectedCity] = useState('All Cities')
  const [selectedTag, setSelectedTag] = useState('')
  const [searchValue, setSearchValue] = useState('')
  const [userPlaces, setUserPlaces] = useState(() => loadUserPlaces())

  const allPlaces = useMemo(() => {
    return [...userPlaces, ...places]
  }, [userPlaces])

  useEffect(() => {
    saveUserPlaces(userPlaces)
  }, [userPlaces])

  const filteredPlaces = useMemo(() => {
    return allPlaces.filter((place) => {
      const matchesCity =
        selectedCity === 'All Cities' || place.city === selectedCity
      const matchesTag = !selectedTag || place.tags.includes(selectedTag)
      const matchesSearch = place.name
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())

      return matchesCity && matchesTag && matchesSearch
    })
  }, [allPlaces, searchValue, selectedCity, selectedTag])

  const handleTagToggle = (tag) => {
    setSelectedTag((currentTag) => (currentTag === tag ? '' : tag))
  }

  const handleAddPlace = (place) => {
    const newPlace = {
      ...place,
      id: Date.now(),
      bestTime: 'Community pick',
    }

    // User-added places are persisted locally and merged with the seed JSON.
    setUserPlaces((currentPlaces) => [newPlace, ...currentPlaces])
    setSelectedCity(place.city)
    setSelectedTag('')
    setSearchValue('')
  }

  const resultsLabel = `${filteredPlaces.length} place${
    filteredPlaces.length === 1 ? '' : 's'
  } matching your current filters across ${allPlaces.length} total saved spots.`

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.12),_transparent_24%)]" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        <Hero
          onSearchChange={setSearchValue}
          onTagToggle={handleTagToggle}
          placeCount={filteredPlaces.length}
          searchValue={searchValue}
          selectedCity={selectedCity}
          selectedTag={selectedTag}
          tags={vibeTags}
        />
        <CitySelector
          cities={cities}
          onCityChange={setSelectedCity}
          selectedCity={selectedCity}
        />
        <PlaceList places={filteredPlaces} resultsLabel={resultsLabel} />
        <AddPlaceForm cities={cities} onAddPlace={handleAddPlace} />
      </main>
    </div>
  )
}

export default App
