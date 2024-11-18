"use client";

import Link from 'next/link';

const CityHighlight = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">City Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/city1.jpg" alt="City 1" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">City 1</h2>
            <p className="text-gray-600 mb-4">
              A brief description of City 1's attractions.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/city2.jpg" alt="City 2" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">City 2</h2>
            <p className="text-gray-600 mb-4">
              A brief description of City 2's attractions.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src="/city3.jpg" alt="City 3" className="w-full h-48 object-cover" />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">City 3</h2>
            <p className="text-gray-600 mb-4">
              A brief description of City 3's attractions.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
        <Link href="/" aria-label="Navigate back to Home page">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
      </div>
    </div>
  );
}

export default CityHighlight;