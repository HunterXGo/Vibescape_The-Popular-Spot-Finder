🌌 Vibescape

Not popular. Just unforgettable.

A minimal, aesthetic web platform to discover underrated places and hidden gems in cities.
Built for explorers who prefer vibes over hype.

⸻

🚀 Overview

Vibescape helps users find places that aren’t crowded, overhyped, or mainstream.
Instead of trending locations, it focuses on quiet cafés, scenic spots, study corners, and aesthetic hangouts.

⸻

✨ Features
	•	🔍 Search places by name
	•	🏙 Filter by city
	•	🎧 Explore by vibe (peaceful, aesthetic, study, sunset)
	•	🗺 Get directions via Google Maps
	•	➕ Add your own hidden spots (stored locally)
	•	📱 Fully responsive minimal UI

⸻

🧱 Tech Stack
	•	Frontend: React (Vite)
	•	Styling: Tailwind CSS
	•	Data: Local JSON + LocalStorage
	•	Maps: Google Maps (via URL integration)

⸻

🎨 Design Philosophy
	•	Minimal and distraction-free
	•	Focus on typography and spacing
	•	Dark theme with soft contrast
	•	Built to feel calm, not crowded	It is built by using OpenAI Codex

**Project Structure**
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── CitySelector.jsx
 │    ├── PlaceCard.jsx
 │    ├── PlaceList.jsx
 │    ├── AddPlaceForm.jsx
 │
 ├── data/
 │    └── places.json
 │
 ├── App.jsx
 └── main.jsx

Installation & Setup
# Clone the repository
git clone https://github.com/HunterXGo/Vibescape_The-Popular-Spot-Finder

# Navigate into project
cd vibescape

# Install dependencies
npm install

# Run the development server
npm run dev

🧠 How It Works
	•	Predefined places are stored in a local JSON file
	•	User-added places are stored in localStorage
	•	Both are merged dynamically and displayed in the UI
	•	Directions are generated using latitude & longitude via Google Maps

⚠️ Limitations
	•	Data is not shared across users
	•	Data is stored locally in browser
	•	Not connected to a backend

(Designed as a frontend prototype for demonstration purposes)


🔮 Future Improvements
	•	User authentication
	•	Cloud database integration
	•	Map-based UI (Leaflet / Google Maps API)
	•	AI-based recommendations

🙌 Acknowledgements
	•	Google Maps for directions
	•	Unsplash for placeholder images
	•	Inspiration from modern UI/UX design trends

💡 Author

Built with curiosity and clean design in mind.

“Skip the hype. Find the vibe.” ✨

It is built by using OpenAI Codex
