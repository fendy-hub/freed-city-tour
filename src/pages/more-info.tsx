"use client";

import Link from "next/link";

const MoreInfo = () => {
  return (
    <section className="py-16 px-8 bg-white shadow-lg rounded-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        More Information About Our Tours
      </h2>
      <p className="text-lg text-center text-gray-600 mb-4">
        Freed city tour Jogja offers a deeper exploration of the city’s rich heritage, vibrant culture, and hidden gems. 
        Our city guides are seasoned locals who share insights and stories to give you a meaningful, immersive experience.
      </p>
      <p className="text-lg text-center text-gray-600">
        During the tour, you’ll explore historical sites, engage in cultural experiences, and uncover the city’s best-kept 
        secrets. Join us for an unforgettable journey through Jogja!
      </p>
      <div className="text-center mt-8">
        <Link href="/" aria-label="Navigate back to Home page">
          <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 shadow transition-colors">
            Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MoreInfo;