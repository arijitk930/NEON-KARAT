import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-pink-200 to-pink-300 p-4 lg:px-8 flex justify-between items-center font-bold text-lg sticky top-0 z-50 transition-all duration-300 ease-in-out">
      {/* Logo */}
      <div className="text-2xl font-extrabold text-black">Karat</div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu links */}
      <ul
        className={`lg:flex lg:space-x-8 absolute lg:static w-full lg:w-auto left-0 top-16 lg:top-auto lg:bg-transparent lg:flex-row flex-col items-center lg:items-start lg:space-y-0 space-y-6 p-6 lg:p-0 transition-all duration-500 ease-in-out ${
          menuOpen ? "block" : "hidden lg:block"
        }`}
      >
        <li className="text-black hover:text-blue-600 transition-colors cursor-pointer">
          Insights
        </li>
        <li className="text-black hover:text-blue-600 transition-colors cursor-pointer">
          Credit Card
        </li>
        <li className="text-black hover:text-blue-600 transition-colors cursor-pointer">
          Socials
        </li>
      </ul>

      {/* Action buttons */}
      <div className="hidden lg:flex space-x-4">
        <button className="px-4 py-2 bg-white text-[#1D0CE5] rounded hover:bg-blue-100 transition-all duration-200 ease-in-out">
          Get Started
        </button>
        <button className="px-4 py-2 bg-transparent border border-black text-black rounded hover:bg-black hover:text-white transition-all duration-200 ease-in-out">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
