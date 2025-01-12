import Link from 'next/link';

export default function Home() {
  return (
    <main 
      className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-green-200 to-blue-300 relative overflow-hidden"
    >
      {/* Background visuals */}
      <div className="absolute inset-0 bg-[url('/images/nature-bg.jpg')] bg-cover bg-center opacity-30 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold text-green-800 mb-8 drop-shadow-lg">
          Welcome to Nature Harmony
        </h1>
        <p className="text-lg text-green-700 mb-12 max-w-lg">
          Immerse yourself in the serene sounds and sights of nature. Create personalized soundscapes, connect with the community, and embrace tranquility.
        </p>

        <nav className="space-y-4 sm:space-y-0 sm:space-x-6">
          <Link 
            href="/soundscape" 
            className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Create Soundscape
          </Link>
          <Link 
            href="/profile" 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            My Profile
          </Link>
          <Link 
            href="/community" 
            className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Community
          </Link>
        </nav>
      </div>

      {/* Subtle animations */}
      <div className="absolute -bottom-10 left-0 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute top-10 right-10 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
    </main>
  );
}
