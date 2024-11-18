// pages/historical.js
import { useRouter } from 'next/router';

export default function Historical() {
  const router = useRouter();
  const { city } = router.query;  // Mengambil nama kota dari URL query

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <h1 className="text-3xl font-bold text-center mb-6">{city} - Historical Highlights</h1>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <div className="text-center">
          <img
            src="/historical-image.jpg"
            alt="Historical Image"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>

        <div className="text-lg text-gray-700">
          <h2 className="text-2xl font-semibold mb-4">History of {city}</h2>
          <p className="mb-4">
            {city} is known for its rich history. It was founded in the year XXXX and has witnessed several important events that shaped its culture and architecture. The city is renowned for its beautiful landmarks, including historical sites that date back to ancient times.
          </p>
          <p className="mb-4">
            One of the most iconic historical events in {city}'s history was the XXXX event, which occurred in the year XXXX. This event marked a turning point in the city's development and had a lasting impact on its growth.
          </p>
          <p className="mb-4">
            Visitors to {city} can explore its historical museums, old temples, and ancient ruins, offering a glimpse into the past that continues to influence the city's modern identity.
          </p>
        </div>
      </div>
    </div>
  );
}
