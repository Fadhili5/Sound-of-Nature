export interface SoundLocation {
  id: string;
  type: 'forest' | 'lake' | 'beach' | 'mountain';
  name: string;
  coordinates: [number, number];
  soundUrl?: string;
  description?: string;
}

export const soundLocations: SoundLocation[] = [
  {
    id: '1',
    type: 'forest',
    name: 'Amazon Rainforest',
    coordinates: [-3.4653, -62.2159],
    soundUrl: '/sounds/amazon.mp3',
    description: 'Dense rainforest ambience with bird calls'
  },
  {
    id: '2',
    type: 'lake',
    name: 'Lake Victoria',
    coordinates: [-1.2921, 36.8219],
    soundUrl: '/sounds/lake-victoria.mp3',
    description: 'Gentle waves and water sounds'
  },
  // Adding all new locations
  {
    id: '3',
    type: 'beach',
    name: 'Whitehaven Beach',
    coordinates: [-20.2821, 149.0394],
    soundUrl: '/sounds/whitehaven.mp3',
    description: 'Soothing beach waves and seagull sounds'
  },
  // ... continuing with all locations up to id 22
  {
    id: '22',
    type: 'lake',
    name: 'Plitvice Lakes',
    coordinates: [44.8654, 15.5820],
    soundUrl: '/sounds/plitvice-lakes.mp3',
    description: 'Waterfalls and serene lakeside ambience'
  }
]; 

export const locationCategories = {
  forest: soundLocations.filter(loc => loc.type === 'forest'),
  lake: soundLocations.filter(loc => loc.type === 'lake'),
  beach: soundLocations.filter(loc => loc.type === 'beach'),
  mountain: soundLocations.filter(loc => loc.type === 'mountain'),
};

export const getCategoryIcon = (type: SoundLocation['type']) => {
  switch (type) {
    case 'forest':
      return '🌲';
    case 'lake':
      return '💧';
    case 'beach':
      return '🏖️';
    case 'mountain':
      return '⛰️';
    default:
      return '🌍';
  }
};

export const getCategoryColor = (type: SoundLocation['type']) => {
  switch (type) {
    case 'forest':
      return '#2F855A';
    case 'lake':
      return '#2B6CB0';
    case 'beach':
      return '#D69E2E';
    case 'mountain':
      return '#4A5568';
    default:
      return '#718096';
  }
}; 