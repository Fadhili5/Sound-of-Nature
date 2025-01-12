export default function ProfilePage() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-green-100 to-blue-50 py-8 px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">My Profile</h1>
          <p className="text-lg text-gray-600">Your personalized nature companion</p>
        </header>
  
        {/* Profile Information */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Profile Details</h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Username:</strong> NatureEnthusiast</p>
            <p><strong>Favorite Soundscape:</strong> Forest Rainfall</p>
            <p><strong>Time Spent in Nature:</strong> 5 hours this week</p>
          </div>
        </section>
  
        {/* Health Analytics */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Health Analytics</h2>
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
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
            Explore More Soundscapes
          </button>
        </footer>
      </div>
    );
  }
  