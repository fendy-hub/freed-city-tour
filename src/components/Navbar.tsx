"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import freed from '../image/logo-freed.jpg'
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className={`text-2xl font-bold ${isScrolled ? 'text-blue-600' : 'text-white'}`}>
          <Image src={freed} alt='freed' className='w-9 h-9 rounded-2xl'/>
        </h1>
        <nav className="hidden md:flex space-x-6 relative text-black pb-1 transition-colors duration-300">
          <Link href="#home" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:underline`}>Home</Link>
          <Link href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:underline`}>About Us</Link>
          <Link href="#services" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:underline`}>Services</Link>
          <Link href="#testimonials" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:underline`}>Testimonials</Link>
          <Link href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:underline`}>Contact Us</Link>
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-white bg-opacity-90 border-t border-gray-200">
          <Link href="#home" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <Link href="#about" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">About Us</Link>
          <Link href="#services" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link href="#testimonials" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Testimonials</Link>
          <Link href="#contact" className="block px-6 py-2 text-gray-700 hover:bg-gray-100">Contact Us</Link>
        </nav>
      )}
    </header>
  );
}

export default Navbar;