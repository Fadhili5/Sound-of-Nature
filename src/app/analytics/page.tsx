'use client';

import React from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  Filler,
} from 'chart.js';

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  Filler
);

export default function AnalyticsPage() {
  // Sample data for visualizations (replace with actual data)
  const sleepData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Average Sleep Duration (hrs)',
        data: [7, 6.5, 8, 7.5, 6, 7, 8],
        backgroundColor: 'rgba(75, 192, 192, 0.8)',
      },
    ],
  };

  const activityData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Activity Levels',
        data: [3, 2, 2.5, 3.5, 3, 4, 3.5],
        borderColor: 'rgba(75, 192, 192, 0.8)',
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        fill: true,
      },
    ],
  };

  const moodData = {
    labels: ['Happy', 'Neutral', 'Sad'],
    datasets: [
      {
        label: 'Mood Trends',
        data: [50, 30, 20],
        backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)', 'rgba(255, 99, 132, 0.8)'],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-green-100 p-6 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-900">Analytics Dashboard</h1>

      {/* Sleep Patterns Visualization */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Nightly Sleep Patterns</h2>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Bar data={sleepData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
        </div>
      </section>

      {/* Activity vs. Sleep Visualization */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Activity vs. Sleep</h2>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Line data={activityData} options={{ responsive: true, maintainAspectRatio: false }} height={200} />
        </div>
      </section>

      {/* Stress and Mood Monitoring */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Stress and Mood Monitoring</h2>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <Pie data={moodData} options={{ responsive: true, maintainAspectRatio: false }} />
        </div>
      </section>

      {/* Health Metrics Over Time */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Health Metrics Over Time</h2>
        {/* Placeholder for health metrics visualization */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p>Health metrics visualization will be implemented here.</p>
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-green-800">Personalized Recommendations</h2>
        <ul className="list-disc pl-6 text-lg bg-white p-4 rounded-lg shadow-md">
          <li>Maintain a consistent sleep schedule</li>
          <li>Engage in regular physical activity</li>
          <li>Practice relaxation techniques before bed</li>
          <li>Limit screen time in the evening</li>
        </ul>
      </section>
    </div>
  );
}