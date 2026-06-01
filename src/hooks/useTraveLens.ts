import { useState, useMemo, useCallback } from 'react';
import { Destination, destinations } from '../data/mockData';

export interface ItineraryItem {
  id: string;
  destination: Destination;
  day: number;
}

export function useTraveLens() {
  const [searchQuery, setSearchQuery] = useState('');
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);

  const filteredDestinations = useMemo(() => {
    if (!searchQuery.trim()) return destinations;
    const query = searchQuery.toLowerCase();
    return destinations.filter(
      (dest) =>
        dest.name.toLowerCase().includes(query) ||
        dest.location.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const addToItinerary = useCallback((destination: Destination) => {
    setItinerary((prev) => {
      // Avoid exact duplicates if needed, but for an itinerary you might visit twice.
      // Let's just append with a unique ID based on timestamp
      const newItem: ItineraryItem = {
        id: `${destination.id}-${Date.now()}`,
        destination,
        day: prev.length + 1,
      };
      return [...prev, newItem];
    });
  }, []);

  const removeFromItinerary = useCallback((id: string) => {
    setItinerary((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      // Re-calculate days
      return filtered.map((item, index) => ({ ...item, day: index + 1 }));
    });
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    filteredDestinations,
    itinerary,
    addToItinerary,
    removeFromItinerary,
  };
}
