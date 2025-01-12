export default function CommunityPage() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-yellow-50 to-green-100 py-8 px-4">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800">Community</h1>
          <p className="text-lg text-gray-700 mt-2">
            Connect, share, and grow with our like-minded nature enthusiasts.
          </p>
        </header>
  
        {/* Community Sharing Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Community Sharing</h2>
          <p className="text-gray-700 mb-4">
            Share your favorite soundscapes or create unique mixes to inspire others. Explore the creativity of our community and find new sounds to relax, focus, or sleep better.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Share a Soundscape
          </button>
        </section>
  
        {/* Nature Challenges Section */}
        <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mb-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Nature Challenges</h2>
          <p className="text-gray-700 mb-4">
            Boost mindfulness by participating in challenges such as recording local bird songs or exploring nearby natural spots. Your contributions help expand the app’s sound library.
          </p>
          <div className="bg-green-100 p-4 rounded-lg shadow-inner mb-4">
            <p className="text-lg text-green-800 font-semibold">Current Challenge:</p>
            <p className="text-gray-700">Record a local bird call and share it with the community!</p>
          </div>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
            Participate Now
          </button>
        </section>
  
        {/* Call to Action */}
        <footer className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Want to see what others are sharing? Dive into the community now!
          </p>
          <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
            Explore Community
          </button>
        </footer>
      </div>
    );
  }
  