"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Soundscape, fetchSoundscapes } from '@/lib/utils';
import { BackgroundSelector } from '@/components/BackgroundSelector';
import { MoodSelector } from '@/components/MoodSelector';
import { X, MapPin } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the map component to avoid SSR issues
const SoundMap = dynamic(() => import('@/components/SoundMap').then(mod => mod.SoundMap), {
  ssr: false
});

// Mock data
const backgrounds = [
  { 
    name: "Forest", 
    imgUrl: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&q=80"
  },
  { 
    name: "Beach", 
    imgUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80"
  },
  { 
    name: "Mountains", 
    imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80"
  },
  { 
    name: "Desert", 
    imgUrl: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&q=80"
  },
];

const moods = [
  { name: "Relaxed", icon: "🌿" },
  { name: "Focused", icon: "🎯" },
  { name: "Energetic", icon: "⚡" },
  { name: "Calm", icon: "🌊" },
];

export default function SoundscapePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [soundscapes, setSoundscapes] = useState<Soundscape[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedBackground, setSelectedBackground] = useState(backgrounds[0].imgUrl);
  const [selectedMood, setSelectedMood] = useState(moods[0].name);
  const [showSidecar, setShowSidecar] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [currentSound, setCurrentSound] = useState<string | null>(null);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    }

    if (status === 'authenticated') {
      loadSoundscapes();
    }
  }, [status, router]);

  async function loadSoundscapes() {
    try {
      const data = await fetchSoundscapes();
      setSoundscapes(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load soundscapes');
    } finally {
      setLoading(false);
    }
  }

  const handleSoundSelect = (soundUrl: string) => {
    setCurrentSound(soundUrl);
    // You can add additional logic here, like auto-playing the sound
  };

  if (status === 'loading' || loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div 
      className="relative min-h-screen bg-no-repeat bg-cover bg-center transition-all duration-500"
      style={{ backgroundImage: `url(${selectedBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="relative container mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Your Soundscapes</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setShowMap(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Location
            </button>
            <button 
              onClick={() => setShowSidecar(!showSidecar)}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              {showSidecar ? "Close Settings" : "Customize Experience"}
            </button>
          </div>
        </div>

        {showSidecar && (
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Settings</h2>
              <button
                onClick={() => setShowSidecar(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close settings"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <BackgroundSelector
              backgrounds={backgrounds}
              selectedBackground={selectedBackground}
              onSelect={setSelectedBackground}
              onClose={() => setShowSidecar(false)}
            />
            <MoodSelector
              moods={moods}
              selectedMood={selectedMood}
              onSelect={setSelectedMood}
            />
          </div>
        )}

        {showMap && (
          <SoundMap 
            onClose={() => setShowMap(false)} 
            onSelectSound={handleSoundSelect}
          />
        )}

        {currentSound && (
          <div className="fixed bottom-4 left-4 z-40 bg-white rounded-lg shadow-lg p-4">
            <audio 
              controls 
              src={currentSound}
              className="w-full max-w-md"
            />
          </div>
        )}

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soundscapes.map((soundscape) => (
            <div 
              key={soundscape.id} 
              className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-all"
            >
              <h2 className="text-xl font-semibold mb-3">{soundscape.name}</h2>
              <audio 
                controls 
                src={soundscape.audioUrl} 
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}