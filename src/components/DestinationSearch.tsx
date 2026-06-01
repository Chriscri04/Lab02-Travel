import React from 'react';
import { Destination } from '../data/mockData';

interface DestinationSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  destinations: Destination[];
  onAdd: (dest: Destination) => void;
}

export const DestinationSearch: React.FC<DestinationSearchProps> = ({
  searchQuery,
  setSearchQuery,
  destinations,
  onAdd,
}) => {
  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Busca por ciudad, país o lugar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Buscar destinos"
        />
      </div>

      <div className="destinations-grid">
        {destinations.length === 0 ? (
          <p style={{ color: 'var(--text-secondary)' }}>No se encontraron destinos.</p>
        ) : (
          destinations.map((dest) => (
            <div key={dest.id} className="card dest-card" data-testid={`dest-${dest.id}`}>
              <img src={dest.imageUrl} alt={dest.name} className="dest-image" loading="lazy" />
              <div className="dest-overlay"></div>
              <div className="dest-content">
                <h3 className="dest-title">{dest.name}</h3>
                <p className="dest-location">📍 {dest.location}</p>
                <p className="dest-desc">{dest.description}</p>
                <button
                  className="btn-add"
                  onClick={() => onAdd(dest)}
                  aria-label={`Agregar ${dest.name} al itinerario`}
                >
                  + Agregar al Itinerario
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
