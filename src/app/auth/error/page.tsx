'use client';

import { useSearchParams } from 'next/navigation';

export default function ErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-full max-w-md p-8 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold text-red-600 mb-4">Authentication Error</h1>
        <p className="text-gray-600">{error || 'An error occurred during authentication'}</p>
        <button
          onClick={() => window.location.href = '/auth/signin'}
          className="mt-4 w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
} 