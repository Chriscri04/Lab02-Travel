import React from 'react';
import { ItineraryItem } from '../hooks/useTraveLens';

interface InteractiveItineraryProps {
  itinerary: ItineraryItem[];
  onRemove: (id: string) => void;
}

export const InteractiveItinerary: React.FC<InteractiveItineraryProps> = ({
  itinerary,
  onRemove,
}) => {
  return (
    <aside className="itinerary-container">
      <h2 className="itinerary-title">
        <span>🗺️</span> Tu Itinerario
      </h2>

      {itinerary.length === 0 ? (
        <div className="empty-itinerary">
          <span>✈️</span>
          <p>Tu itinerario está vacío.</p>
          <p style={{ fontSize: '13px', marginTop: '4px' }}>
            Busca y agrega destinos para comenzar a planear.
          </p>
        </div>
      ) : (
        <div className="itinerary-list" aria-live="polite">
          {itinerary.map((item) => (
            <div key={item.id} className="itinerary-item" data-testid={`itinerary-item-${item.id}`}>
              <img
                src={item.destination.imageUrl}
                alt={item.destination.name}
                className="itinerary-item-img"
              />
              <div className="itinerary-item-info">
                <h4 className="itinerary-item-title">{item.destination.name}</h4>
                <p className="itinerary-item-day">Día {item.day}</p>
              </div>
              <button
                className="btn-remove"
                onClick={() => onRemove(item.id)}
                aria-label={`Eliminar ${item.destination.name} del itinerario`}
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
};
