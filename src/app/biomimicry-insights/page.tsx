'use client';

export default function BiomimicryInsights() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Insights on Biomimicry</h1>
          <p className="text-lg text-gray-600">Learning from Nature's Time-Tested Patterns</p>
        </header>

        {/* Introduction Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">What is Biomimicry?</h2>
          <p className="text-gray-700 mb-6">
            Biomimicry is an approach to innovation that seeks sustainable solutions to human challenges 
            by emulating nature's time-tested patterns and strategies. The core idea is that nature has 
            already solved many of the problems we are grappling with.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Key Principles</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nature runs on sunlight</li>
              <li>Nature uses only the energy it needs</li>
              <li>Nature fits form to function</li>
              <li>Nature recycles everything</li>
              <li>Nature rewards cooperation</li>
            </ul>
          </div>
        </section>

        {/* Examples Section */}
        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Sound in Nature</h3>
            <p className="text-gray-700 mb-4">
              From the way whales communicate across vast oceans to how birds adjust their songs in urban environments,
              nature has perfected the art of sound adaptation and communication.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Applications</h4>
              <ul className="list-disc pl-4 text-gray-700">
                <li>Acoustic design in architecture</li>
                <li>Noise reduction technology</li>
                <li>Communication systems</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Healing Sounds</h3>
            <p className="text-gray-700 mb-4">
              Natural soundscapes have been shown to have healing properties, from reducing stress to improving cognitive function.
              This has inspired various therapeutic applications.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Benefits</h4>
              <ul className="list-disc pl-4 text-gray-700">
                <li>Stress reduction</li>
                <li>Improved sleep quality</li>
                <li>Enhanced focus and creativity</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Current Research</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Soundscape Ecology</h3>
              <p className="text-gray-700">
                Researchers are studying how natural soundscapes contribute to ecosystem health and how we can 
                preserve and restore these acoustic environments.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Bioacoustic Technology</h3>
              <p className="text-gray-700">
                Scientists are developing new technologies inspired by how animals produce, perceive, and process sound,
                leading to innovations in acoustic engineering and design.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-green-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Join the Movement</h2>
            <p className="text-gray-700 mb-6">
              Discover how you can contribute to biomimicry research and application in your daily life.
            </p>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
} 