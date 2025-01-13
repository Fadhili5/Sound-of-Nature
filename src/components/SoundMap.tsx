'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { SoundLocation, soundLocations } from '@/types/map';
import { cn } from '@/lib/utils';
import { Play, Pause } from 'lucide-react';

interface SoundMapProps {
  onClose: () => void;
  onSelectSound?: (soundUrl: string) => void;
}

export function SoundMap({ onClose, onSelectSound }: SoundMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [map, setMap] = useState<L.Map | null>(null);
  const [playingSound, setPlayingSound] = useState<string | null>(null);
  const [audioElement, setAudioElement] = useState<HTMLAudioElement | null>(null);

  const handleSoundPlay = useCallback((soundUrl: string) => {
    if (playingSound === soundUrl) {
      audioElement?.pause();
      setPlayingSound(null);
      setAudioElement(null);
    } else {
      audioElement?.pause();
      const audio = new Audio(soundUrl);
      audio.addEventListener('ended', () => {
        setPlayingSound(null);
        setAudioElement(null);
      });
      audio.play();
      setPlayingSound(soundUrl);
      setAudioElement(audio);
    }
  }, [playingSound, audioElement]);

  const handleLocationClick = useCallback((location: SoundLocation) => {
    if (map) {
      map.setView(location.coordinates, 14, {
        animate: true,
        duration: 1
      });
      setSelectedLocation(location.id);
      if (location.soundUrl) {
        handleSoundPlay(location.soundUrl);
      }
    }
  }, [map, handleSoundPlay]);

  const icons = useMemo(() => ({
    forest: L.icon({
      iconUrl: '/images/icons/forest-icon.png',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    }),
    lake: L.icon({
      iconUrl: '/images/icons/lake-icon.png',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    }),
    beach: L.icon({
      iconUrl: '/images/icons/beach-icon.png',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    }),
    mountain: L.icon({
      iconUrl: '/images/icons/mountain-icon.png',
      iconSize: [38, 38],
      iconAnchor: [19, 38],
      popupAnchor: [0, -38],
    }),
  }), []);

  useEffect(() => {
    // Fix for Leaflet marker icons in Next.js
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: '/images/marker-icon-2x.png',
      iconUrl: '/images/marker-icon.png',
      shadowUrl: '/images/marker-shadow.png',
    });

    // Initialize map
    const mapInstance = L.map('soundsMap').setView([20.5937, 78.9629], 3);
    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapInstance);

    // Add markers for each sound location
    soundLocations.forEach((location: SoundLocation) => {
      const marker = L.marker(location.coordinates, {
        icon: icons[location.type]
      }).addTo(mapInstance);

      // Create popup content
      const popupContent = document.createElement('div');
      popupContent.className = 'p-2';
      popupContent.innerHTML = `
        <h3 class="font-semibold mb-2">${location.name}</h3>
        ${location.soundUrl ? `
          <button
            class="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm"
            onclick="window.playSound('${location.soundUrl}')"
          >
            Play Sound
          </button>
        ` : ''}
      `;

      marker.bindPopup(popupContent);

      // Add click handlers
      marker.on('click', (e) => {
        handleLocationClick(location);
      });

      // Add hover effect
      marker.on('mouseover', () => {
        marker.openPopup();
      });
    });

    // Add zoom out button
    const zoomOutButton = L.control({ position: 'bottomleft' });
    zoomOutButton.onAdd = function() {
      const div = L.DomUtil.create('div', 'leaflet-control');
      div.innerHTML = `
        <button
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm shadow-lg"
          style="margin: 10px;"
        >
          Zoom Out
        </button>
      `;
      div.onclick = function() {
        mapInstance.setView([20.5937, 78.9629], 3, {
          animate: true,
          duration: 1
        });
        setSelectedLocation(null);
      };
      return div;
    };
    zoomOutButton.addTo(mapInstance);

    // Cleanup
    return () => {
      mapInstance.remove();
    };
  }, [icons, onSelectSound]);

  return (
    <div className="fixed inset-0 z-50 bg-[#eae0d5] font-sans">
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-[#8C5230] text-white rounded-lg hover:bg-[#6d3f25] transition-colors shadow-lg"
        >
          Close Map
        </button>
      </div>
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-80 h-full bg-[#f5f1ea] overflow-y-auto border-r-4 border-[#8C5230]">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6 text-[#5C3D2E]">Nature Sounds</h2>
            <div className="space-y-3">
              {soundLocations.map((location) => (
                <div
                  key={location.id}
                  className={cn(
                    "p-4 rounded-lg transition-colors",
                    "hover:bg-[#f0e6d9] group",
                    selectedLocation === location.id 
                      ? "bg-[#f0e6d9] border-2 border-[#8C5230]" 
                      : "border-2 border-[#d4c5b5]"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => handleLocationClick(location)}
                      className="flex items-center flex-1"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#e6dfd4] flex items-center justify-center mr-4 shadow-sm">
                        {location.type === 'forest' && '🌲'}
                        {location.type === 'lake' && '💧'}
                        {location.type === 'beach' && '🏖️'}
                        {location.type === 'mountain' && '⛰️'}
                      </div>
                      <div>
                        <h3 className="font-medium text-[#5C3D2E]">{location.name}</h3>
                        <p className="text-sm text-[#8b6f5d] capitalize">{location.type}</p>
                        {location.description && (
                          <p className="text-xs text-[#a38b7b] mt-1">{location.description}</p>
                        )}
                      </div>
                    </button>
                    {location.soundUrl && (
                      <button
                        onClick={() => handleSoundPlay(location.soundUrl!)}
                        className={cn(
                          "p-2 rounded-full transition-colors",
                          "hover:bg-[#e6dfd4] group-hover:opacity-100",
                          playingSound === location.soundUrl ? "bg-[#e6dfd4]" : "opacity-0"
                        )}
                        aria-label={playingSound === location.soundUrl ? "Pause sound" : "Play sound"}
                      >
                        {playingSound === location.soundUrl ? (
                          <Pause className="w-5 h-5 text-[#8C5230]" />
                        ) : (
                          <Play className="w-5 h-5 text-[#8C5230]" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Map */}
        <div 
          id="soundsMap" 
          className="flex-1 h-full border-l-4 border-[#8C5230]" 
        />
      </div>
    </div>
  );
} 