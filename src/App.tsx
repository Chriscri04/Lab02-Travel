import { useTraveLens } from './hooks/useTraveLens';
import { DestinationSearch } from './components/DestinationSearch';
import { InteractiveItinerary } from './components/InteractiveItinerary';
import './index.css';

export default function App() {
  const {
    searchQuery,
    setSearchQuery,
    filteredDestinations,
    itinerary,
    addToItinerary,
    removeFromItinerary,
  } = useTraveLens();

  return (
    <>
      <header className="app-header">
        <div className="logo">
          <span>TraveLens</span>
        </div>
      </header>
      
      <main className="app-container">
        {/* Left Column: Destinations */}
        <section>
          <DestinationSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            destinations={filteredDestinations}
            onAdd={addToItinerary}
          />
        </section>

        {/* Right Column: Itinerary */}
        <InteractiveItinerary
          itinerary={itinerary}
          onRemove={removeFromItinerary}
        />
      </main>
    </>
  );
}
