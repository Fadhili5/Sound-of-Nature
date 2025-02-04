'use client';

import { useRouter } from 'next/navigation';
import { Navigation } from '@/app/components/navigation';

export default function ProfilePage() {
  const router = useRouter();

  const handleEditProfile = () => {
    alert('Edit profile feature to be implemented');
  };

  const navigateToBiomimicry = () => {
    router.push('/biomimicry-insights');
  };

  const navigateToAnalytics = () => {
    router.push('/analytics')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-50">
      <div className="flex flex-col items-center py-8 px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800">My Profile</h1>
          <p className="text-lg text-gray-600">Your personalized nature companion</p>
          
          {/* Profile Image */}
          <div className="mt-4">
            <img 
              src="/images/appimages/Profile.jpg" 
              alt="User Profile" 
              className="rounded-full h-24 w-24 mx-auto border-4 border-green-300" 
            />
          </div>

          {/* Edit Profile Button */}
          <button 
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={handleEditProfile}>
            Edit Profile
          </button>
        </header>

        {/* Profile Information */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Profile Details</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Username:</strong> Denis Fadhili</p>
            <p><strong>Favorite Soundscape:</strong> Forest Rainfall</p>
            <p><strong>Time Spent in Nature:</strong> 8 hours this week</p>
          </div>
        </section>

        {/* Health Analytics */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4"> 
            <button 
              className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
              onClick={navigateToAnalytics}>
              Health Analytics 
            </button>
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Stress Levels:</p>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-600">Moderate</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Sleep Patterns:</p>
              <span className="text-sm text-gray-600">7 hours average</span>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Relaxation Time:</p>
              <span className="text-sm text-gray-600">1 hour/day</span>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mt-8 bg-green-100 rounded-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold text-green-800 mb-4">Recommendations</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Try a guided meditation for reducing stress.</li>
            <li>Listen to calming soundscapes before bed for better sleep.</li>
            <li>Spend 15 minutes outdoors daily to enhance relaxation.</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center">
          <button 
            className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            onClick={navigateToBiomimicry}>
            Insights on Biomimicry
          </button>
        </footer>
      </div>
    </div>
  );
}
  