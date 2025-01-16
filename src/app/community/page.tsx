'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCrown } from 'react-icons/fa';

export default function CommunityPage() {
  const router = useRouter();
  const navigateToShareSoundscape = () => {
    router.push('/share-soundscape');
  };

  const initialChallenges = [
    { id: 1, title: 'Record a local bird call', description: 'Record a local bird call and share it with the community!' },
    { id: 2, title: 'Nature Walk', description: 'Take a walk in your nearby natural spots and capture the sound of your footsteps and the environment.' },
    { id: 3, title: 'Running Water', description: 'Find a stream or river nearby and record the soothing sound of running water.' },
    { id: 4, title: 'City Park', description: 'Find a park in the city, capture the mingling sounds of nature and urban life.' },
  ];

  const [challenges, setChallenges] = useState(initialChallenges);
  const [newChallenge, setNewChallenge] = useState({ title: '', description: '' });
  const [participants, setParticipants] = useState({});

  const handleChallengeSubmission = (e) => {
    e.preventDefault();
    const { title, description } = newChallenge;
    if (title && description) {
      const newId = challenges.length + 1;
      setChallenges([...challenges, { id: newId, title, description }]);
      setNewChallenge({ title: '', description: '' });
      alert('Challenge submitted successfully!');
    }
  };

  const handleParticipation = (challengeId) => {
    const userName = prompt('Please enter your name:');
    if (userName) {
      setParticipants((prevParticipants) => {
        const userChallengeCount = (prevParticipants[userName]?.count || 0) + 1;
        return {
          ...prevParticipants,
          [userName]: { count: userChallengeCount },
        };
      });
    }
  };

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
        <button 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={navigateToShareSoundscape}>
          Share a Soundscape
        </button>
      </section>

      {/* Nature Challenges Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">Nature Challenges</h2>
        <p className="text-gray-700 mb-4">
          Boost mindfulness by participating in challenges such as recording local bird songs or exploring nearby natural spots. Your contributions help expand the app’s sound library.
        </p>

        {/* Iterate over the challenges array */}
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-green-100 p-4 rounded-lg shadow-inner mb-4">
            <p className="text-lg text-green-800 font-semibold">Challenge: {challenge.title}</p>
            <p className="text-gray-700">{challenge.description}</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition mt-2"
              onClick={() => handleParticipation(challenge.id)}>
              Participate Now
            </button>
          </div>
        ))}

        {/* Challenge Submission Form */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow-inner">
          <h3 className="text-lg text-yellow-800 font-semibold mb-2">Submit a New Challenge</h3>
          <form onSubmit={handleChallengeSubmission}>
            <input
              type="text"
              placeholder="Challenge Title"
              value={newChallenge.title}
              onChange={(e) => setNewChallenge({ ...newChallenge, title: e.target.value })}
              className="border p-2 rounded-md w-full mb-2"
            />
            <textarea
              placeholder="Challenge Description"
              value={newChallenge.description}
              onChange={(e) => setNewChallenge({ ...newChallenge, description: e.target.value })}
              className="border p-2 rounded-md w-full mb-2"
            />
            <button type="submit" className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition">
              Submit Challenge
            </button>
          </form>
        </div>
      </section>

      {/* Leaderboard Section */}
      <section className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Leaderboard</h2>
        <ul className="bg-purple-100 p-4 rounded-lg shadow-inner">
          {Object.entries(participants).sort((a, b) => b[1].count - a[1].count).map(([name, data], index) => (
            <li key={name} className="flex justify-between items-center mb-2">
              <span className="font-semibold text-purple-800">{index + 1}. {name}</span>
              <span className="text-purple-600">{data.count} {data.count > 1 ? 'Challenges' : 'Challenge'} Participated</span>
              {index === 0 && <FaCrown className="text-yellow-500 ml-2" />}
            </li>
          ))}
        </ul>
      </section>

      {/* Call to Action */}
      <footer className="text-center mt-8">
        <p className="text-gray-700 mb-4">
          Want to see what others are sharing? Dive into the community now!
        </p>
        <button 
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600 transition"
          onClick={navigateToShareSoundscape}>
          Explore Community
        </button>
      </footer>
    </div>
  );
}