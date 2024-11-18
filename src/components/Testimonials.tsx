const Testimonials = () => {
  return (
    <div id="testimonials" className="py-16 px-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Testimonials</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p>"Sangat luar biasaa,
Driver nyaaa ramah bangett,
Dan sepanjang perjalanan dibuat happy dan di kasih tau mulu tentang sejarah dan bangunan di jogjakarta.

Dokumentasi amaann bangett abangnya pandee fotography dan videography"</p>
          <span className="block mt-4 font-semibold">- ali syahban</span>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <p>
            "Trip bareng freed city tour Jogja itu beneran recommend banget.. Drivernya humble bgt.. Asik di ajak ngobrol dan banyak kasih info seputar Jogja.. Makasih kak... Sukses terus yaa..."
          </p>
          <span className="block mt-4 font-semibold">- Guna natalia</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
