const Testimonials = () => {
  return (
    <div id="testimonials" className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p>"Nice experience staycation in jogja, and nice driver and friendly."</p>
          <span className="block mt-4 font-semibold">- Bayu Yudisthira</span>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p>
            "Amazing guides and beautiful spots. A must-do when visiting the
            city."
          </p>
          <span className="block mt-4 font-semibold">- Jane Smith</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
