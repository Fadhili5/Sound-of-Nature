'use client';

import { X } from 'lucide-react';

interface Background {
  name: string;
  imgUrl: string;
}

interface BackgroundSelectorProps {
  backgrounds: Background[];
  selectedBackground: string;
  onSelect: (imgUrl: string) => void;
  onClose: () => void;
}

export function BackgroundSelector({ 
  backgrounds, 
  selectedBackground, 
  onSelect,
  onClose
}: BackgroundSelectorProps) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Select Background</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          aria-label="Close settings"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {backgrounds.map((bg) => (
          <button
            key={bg.name}
            onClick={() => onSelect(bg.imgUrl)}
            className={`h-24 rounded-lg bg-cover bg-center transition-all ${
              selectedBackground === bg.imgUrl ? 'ring-4 ring-green-500' : ''
            }`}
            style={{ backgroundImage: `url(${bg.imgUrl})` }}
          >
            <span className="sr-only">{bg.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 