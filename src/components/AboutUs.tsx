import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section id="about" className="py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-8">About Us</h2>
        <p className="max-w-3xl mx-auto text-center text-lg">
          Freed city tour Jogja adalah perjalanan wisata yang mengunjungi
          objek-objek wisata di dalam kota. Pemandu wisata yang bertugas membawa
          wisatawan dan memberikan informasi wisata tentang objek-objek wisata
          utama di suatu kota disebut City Guide.
        </p>
      </section>
      <div className="text-center pb-4">
        <Link href="/more-info">
          <button 
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            aria-label="Read more about us"
          >
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
