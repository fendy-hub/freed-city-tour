const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-50 px-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Our Services</h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">City Highlights</h3>
          <p>Explore the main attractions and must-see spots of the city.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Historical Tours</h3>
          <p>
            Learn the history and culture of the city with our expert guides.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Customized Tours</h3>
          <p>Create your own itinerary and explore the city your way.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
