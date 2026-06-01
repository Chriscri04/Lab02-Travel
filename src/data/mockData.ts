export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
}

export const destinations: Destination[] = [
  {
    id: 'tokyo',
    name: 'Shibuya Crossing',
    location: 'Tokyo, Japan',
    description: 'El cruce peatonal más transitado del mundo, rodeado de luces de neón y rascacielos.',
    imageUrl: 'https://images.unsplash.com/photo-1542051812871-7575008240f8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'paris',
    name: 'Eiffel Tower',
    location: 'Paris, France',
    description: 'El ícono por excelencia de París, ofreciendo vistas inigualables de la ciudad luz.',
    imageUrl: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'bali',
    name: 'Ubud Rice Terraces',
    location: 'Bali, Indonesia',
    description: 'Exuberantes terrazas verdes que muestran la belleza natural y agrícola de la isla.',
    imageUrl: 'https://images.unsplash.com/photo-1559628129-67cf63b72248?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'machupicchu',
    name: 'Machu Picchu',
    location: 'Cusco, Peru',
    description: 'La antigua ciudad inca en lo alto de los Andes, una maravilla del mundo moderno.',
    imageUrl: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'newyork',
    name: 'Central Park',
    location: 'New York, USA',
    description: 'Un enorme oasis verde en medio de la jungla de asfalto de Manhattan.',
    imageUrl: 'https://images.unsplash.com/photo-1605130284535-11dd9eedc58a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rome',
    name: 'Colosseum',
    location: 'Rome, Italy',
    description: 'El anfiteatro más grande jamás construido, un símbolo del Imperio Romano.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800'
  }
];
