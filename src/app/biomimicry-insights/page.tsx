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
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold text-green-800 mb-3">Key Principles</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Nature runs on sunlight</li>
              <li>Nature uses only the energy it needs</li>
              <li>Nature fits form to function</li>
              <li>Nature recycles everything</li>
              <li>Nature rewards cooperation</li>
            </ul>
          </div>
          
          {/* New Section: Importance of Biomimicry */}
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Sustainable Innovation</h3>
              <p className="text-gray-700">
                Biomimicry offers a pathway to creating sustainable technologies and systems. By studying and 
                implementing nature's efficient designs, we can develop solutions that are not only effective 
                but also environmentally friendly. Nature's 3.8 billion years of R&D provides us with proven 
                strategies for sustainable innovation.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Environmental Conservation</h3>
              <p className="text-gray-700">
                Understanding and valuing nature's designs creates a stronger imperative for conservation. 
                Each species lost represents the loss of millions of years of evolutionary innovation. 
                Biomimicry helps us recognize that protecting biodiversity is crucial not just for ecological 
                balance, but also for future technological and scientific breakthroughs.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Economic Impact</h3>
              <p className="text-gray-700">
                Bio-inspired innovations are driving a new economy that combines sustainable practices with 
                profitable solutions. From energy-efficient building designs inspired by termite mounds to 
                water collection systems based on desert beetles, biomimicry is creating new markets and 
                opportunities while solving critical challenges.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Future Technologies</h3>
              <p className="text-gray-700">
                The future of technology lies in learning from nature. Biomimicry is inspiring breakthroughs 
                in artificial intelligence, robotics, materials science, and medicine. By understanding how 
                nature solves complex problems, we can develop more efficient and adaptable technologies.
              </p>
            </div>
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
                <li>Acoustic design inspired by owl wing structure for noise reduction</li>
                <li>Dolphin echolocation principles in sonar technology</li>
                <li>Cricket-inspired sound localization systems</li>
                <li>Bat-inspired ultrasonic sensors for navigation</li>
              </ul>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-3">Healing Sounds</h3>
            <p className="text-gray-700 mb-4">
              Natural soundscapes have been shown to have healing properties, from reducing stress to improving cognitive function.
              This has inspired various therapeutic and technological applications.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">Benefits</h4>
              <ul className="list-disc pl-4 text-gray-700">
                <li>Biophilic sound design in healthcare facilities</li>
                <li>Nature-based sound therapy for anxiety reduction</li>
                <li>Circadian rhythm optimization through natural sounds</li>
                <li>Enhanced learning environments using biomimetic acoustics</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Examples Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto mb-12">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Biomimicry Success Stories</h2>
          
          <div className="space-y-8">
            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Architecture & Design</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Eastgate Centre, Zimbabwe</h4>
                  <p className="text-gray-700">
                    Inspired by termite mounds, this building uses passive cooling principles,
                    reducing energy consumption by 90% compared to conventional buildings.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Lotus-Inspired Materials</h4>
                  <p className="text-gray-700">
                    Self-cleaning surfaces based on the lotus leaf's microscopic structure,
                    reducing the need for chemical cleaners.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b pb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-3">Transportation</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Bullet Train Design</h4>
                  <p className="text-gray-700">
                    Japan's Shinkansen train nose design inspired by kingfisher beaks,
                    reducing noise and energy consumption while increasing speed.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Whale Fin Wind Turbines</h4>
                  <p className="text-gray-700">
                    Wind turbine blades inspired by humpback whale flippers,
                    increasing efficiency by 20% and reducing noise.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-3">Materials Science</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Spider Silk Innovation</h4>
                  <p className="text-gray-700">
                    Synthetic materials inspired by spider silk's strength and flexibility,
                    used in everything from bulletproof vests to medical sutures.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Gecko-Inspired Adhesives</h4>
                  <p className="text-gray-700">
                    Reusable adhesives based on gecko foot structure,
                    enabling strong, residue-free attachment and detachment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Current Research & Future Directions</h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Soundscape Ecology</h3>
              <p className="text-gray-700 mb-4">
                Researchers are studying how natural soundscapes contribute to ecosystem health and how we can 
                preserve and restore these acoustic environments. This research is crucial for:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Understanding species communication patterns</li>
                <li>Monitoring ecosystem health through acoustic signatures</li>
                <li>Developing better conservation strategies</li>
                <li>Creating more effective urban planning approaches</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Emerging Technologies</h3>
              <p className="text-gray-700 mb-4">
                Current research is exploring new frontiers in biomimetic technology:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700">AI & Machine Learning</h4>
                  <p className="text-sm text-gray-600">
                    Neural networks inspired by brain structures and natural learning processes
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700">Soft Robotics</h4>
                  <p className="text-sm text-gray-600">
                    Flexible, adaptive robots based on plant and animal movement
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l-4 border-green-500 pl-4 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Climate Solutions</h3>
              <p className="text-gray-700 mb-4">
                Biomimicry research is increasingly focused on addressing climate change:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Carbon capture systems inspired by coral reefs</li>
                <li>Water management solutions based on desert organisms</li>
                <li>Energy-efficient building designs mimicking natural structures</li>
                <li>Sustainable material cycles inspired by forest ecosystems</li>
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Future Research Directions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Interdisciplinary Integration</h4>
                  <p className="text-gray-700">
                    Combining biomimicry with other fields like nanotechnology and quantum computing
                    to create more sophisticated solutions.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-700 mb-2">Sustainable Development</h4>
                  <p className="text-gray-700">
                    Scaling up biomimetic solutions to address global challenges in energy,
                    water, and food security.
                  </p>
                </div>
              </div>
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