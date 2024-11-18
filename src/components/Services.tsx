import Link from "next/link";

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 px-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="transform h-38 w-80 transition duration-500 hover:scale-105 flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
          <Link href="/city-highlight">
            <h3 className="text-xl font-semibold mb-4">City Highlights</h3>
            <p>Explore the main attractions and must-see spots of the city.</p>
          </Link>
        </div>
        <div className="transform h-38 w-80 transition duration-500 hover:scale-105 flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
          <Link href="/historical-tours">
            <h3 className="text-xl font-semibold mb-4">Historical Tours</h3>
            <p>
              Learn the history and culture of the city with our expert guides.
            </p>
          </Link>
        </div>
        <div className="transform h-38 w-80 transition duration-500 hover:scale-105 flex justify-center items-center p-6 bg-white rounded-lg shadow-md">
          <Link
            href="/customized-tours">
            <h3 className="text-xl font-semibold mb-4">Customized Tours</h3>
            <p>Create your own itinerary and explore the city your way.</p>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
