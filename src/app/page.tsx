import Image from "next/image";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <Jumbotron />
        <AboutUs />
        <Services />
        <Testimonials />
       

        <section id="contact" className="py-16 bg-gray-50 px-8">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Contact Us
          </h2>
          <form className="max-w-lg mx-auto space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            />
            <textarea
              placeholder="Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>&copy; 2024 City Tour Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
