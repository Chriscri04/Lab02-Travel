import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach } from 'vitest';
import App from './App';
import '@testing-library/jest-dom';

describe('TraveLens AI-Driven SDLC', () => {
  beforeEach(() => {
    // any setup needed
  });

  it('renders the main application layout', () => {
    render(<App />);
    expect(screen.getByText('TraveLens')).toBeInTheDocument();
    expect(screen.getByText('🗺️')).toBeInTheDocument();
    expect(screen.getByText(/Tu itinerario está vacío/i)).toBeInTheDocument();
  });

  it('filters destinations based on search query', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Ensure all default destinations are rendered initially
    expect(screen.getByText('Shibuya Crossing')).toBeInTheDocument();
    expect(screen.getByText('Eiffel Tower')).toBeInTheDocument();
    
    const searchInput = screen.getByPlaceholderText('Busca por ciudad, país o lugar...');
    await user.type(searchInput, 'japan');
    
    // Shibuya Crossing should be visible, Eiffel Tower should not
    await waitFor(() => {
      expect(screen.getByText('Shibuya Crossing')).toBeInTheDocument();
      expect(screen.queryByText('Eiffel Tower')).not.toBeInTheDocument();
    });
  });

  it('adds a destination to the itinerary', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    const addButton = screen.getByLabelText('Agregar Shibuya Crossing al itinerario');
    await user.click(addButton);
    
    // The itinerary list should now display the destination
    await waitFor(() => {
      // Find the item in the itinerary container (it has a 'Día 1' text)
      expect(screen.getByText('Día 1')).toBeInTheDocument();
      // Wait for it not to be empty
      expect(screen.queryByText(/Tu itinerario está vacío/i)).not.toBeInTheDocument();
    });
  });

  it('removes a destination from the itinerary', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    // Add it first
    const addButton = screen.getByLabelText('Agregar Machu Picchu al itinerario');
    await user.click(addButton);
    
    await waitFor(() => {
      expect(screen.getByText('Día 1')).toBeInTheDocument();
    });
    
    // Remove it
    const removeButton = screen.getByLabelText('Eliminar Machu Picchu del itinerario');
    await user.click(removeButton);
    
    await waitFor(() => {
      expect(screen.getByText(/Tu itinerario está vacío/i)).toBeInTheDocument();
    });
  });
});
