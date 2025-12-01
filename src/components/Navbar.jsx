import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-cyan-950 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
        src="images/iconHawarie.png"
        alt="icon"
        className="rounded-full w-10 h-10 object-cover mr-2"
        data-aos="zoom-in"
        data-aos-delay="200"
      />
        <h1 className="text-2xl font-bold flex items-center" data-aos="zoom-in" data-aos-delay="200">
          Hawarie <span className="text-cyan-400">QHS</span>
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 font-medium" data-aos="fade-down" data-aos-delay="400">
          <li><a href="#home" className="hover:text-cyan-400 transition">Beranda</a></li>
          <li><a href="#about" className="hover:text-cyan-400 transition">Tentang</a></li>
          <li><a href="#program" className="hover:text-cyan-400 transition">Program</a></li>
          <li><a href="#contact" className="hover:text-cyan-400 transition">Kontak</a></li>
        </ul>

        {/* Tombol Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-cyan-950 px-6 pb-4">
          <ul className="flex flex-col space-y-4 font-medium text-center justify-center">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition text-center justify-center">Beranda</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition text-ccnter justify-center">Tentang</a></li>
            <li><a href="#program" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition text-center justify-center">Program</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400 transition text-center justify-center">Kontak</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
