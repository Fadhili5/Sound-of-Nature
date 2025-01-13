'use client';

interface Mood {
  name: string;
  icon: string;
}

interface MoodSelectorProps {
  moods: Mood[];
  selectedMood: string;
  onSelect: (name: string) => void;
}

export function MoodSelector({ 
  moods, 
  selectedMood, 
  onSelect 
}: MoodSelectorProps) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Select Mood</h2>
      <div className="grid grid-cols-2 gap-4">
        {moods.map((mood) => (
          <button
            key={mood.name}
            onClick={() => onSelect(mood.name)}
            className={`p-4 rounded-lg border transition-all ${
              selectedMood === mood.name
                ? 'bg-green-50 border-green-500'
                : 'border-gray-200 hover:border-green-200'
            }`}
          >
            <div className="text-2xl mb-1">{mood.icon}</div>
            <div className="text-sm">{mood.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
} 