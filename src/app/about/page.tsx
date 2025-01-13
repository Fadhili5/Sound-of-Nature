'use client';

import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">About Sounds of Nature</h1>
          <p className="text-lg text-gray-600">Connecting People with Natural Soundscapes</p>
        </header>

        {/* Mission Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 mb-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At Sounds of Nature, we believe in the profound impact that natural soundscapes can have on human 
            well-being. Our mission is to bring the healing and restorative powers of nature's symphony to 
            people's daily lives, helping them find peace, focus, and connection with the natural world.
          </p>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Core Values</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Environmental Conservation</li>
              <li>Mental Well-being</li>
              <li>Accessibility to Nature</li>
              <li>Scientific Research</li>
              <li>Community Engagement</li>
            </ul>
          </div>
        </section>

        {/* Features Section */}
        <section className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Key Features</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800">Natural Soundscapes</h4>
                <p className="text-gray-700">High-quality recordings from diverse natural environments worldwide.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800">Personalization</h4>
                <p className="text-gray-700">Customizable sound mixes and personal soundscape collections.</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-800">Health Tracking</h4>
                <p className="text-gray-700">Monitor your relaxation and wellness journey with our analytics.</p>
              </div>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Benefits</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800">Stress Reduction</h4>
                <p className="text-gray-700">Natural sounds help lower stress levels and promote relaxation.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800">Better Sleep</h4>
                <p className="text-gray-700">Calming soundscapes to improve sleep quality and duration.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-800">Enhanced Focus</h4>
                <p className="text-gray-700">Natural background sounds to boost concentration and productivity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Conservation Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Conservation Efforts</h2>
          <p className="text-gray-700 mb-6">
            We are committed to preserving the natural soundscapes we share. A portion of our proceeds goes 
            directly to conservation projects and the recording of endangered soundscapes around the world.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Protected Areas</h4>
              <p className="text-3xl font-bold text-green-600">50+</p>
              <p className="text-sm text-gray-600">Locations Preserved</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Sound Library</h4>
              <p className="text-3xl font-bold text-green-600">1000+</p>
              <p className="text-sm text-gray-600">Unique Recordings</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Community</h4>
              <p className="text-3xl font-bold text-green-600">100K+</p>
              <p className="text-sm text-gray-600">Active Users</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Our Team</h2>
          <p className="text-gray-700 mb-6">
            Our diverse team of sound engineers, environmental scientists, and wellness experts works 
            together to bring you the highest quality natural soundscape experience.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">Sound Collection</h4>
              <p className="text-gray-700">Expert field recordists capturing pristine natural sounds.</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">Research</h4>
              <p className="text-gray-700">Scientists studying the impact of natural sounds on well-being.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-green-100 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-gray-700 mb-6">
              Have questions or suggestions? We'd love to hear from you!
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 