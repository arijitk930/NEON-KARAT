import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons

import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="backdrop-blur-xl bg-white/30 border border-white/20
p-4 lg:px-8 flex justify-between items-center font-bold text-lg sticky top-0 z-50 transition-all duration-300 ease-in-out"
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-extrabold text-black">
        VanityCard
      </Link>

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
        className={`lg:flex lg:space-x-8 absolute lg:static w-full lg:w-auto left-0 top-16 lg:top-auto 
          lg:bg-transparent lg:flex-row 
          flex-col items-center lg:items-start lg:space-y-0 space-y-6 p-6 lg:p-0 
          transition-all duration-500 ease-in-out ${
          menuOpen ? "block" : "hidden lg:block" 
        }`}
      >
        <Link
          to="/insights"
          className="text-black hover:text-blue-600 transition-colors cursor-pointer"
        >
          Insights
        </Link><br />
        <Link
          to="/credit"
          className="text-black hover:text-blue-600 transition-colors cursor-pointer"
        >
          Credit Card
        </Link>
        <br />
        <Link
          to="/"
          className="text-black hover:text-blue-600 transition-colors cursor-pointer"
        >
          Socials
        </Link>
      </ul>

      {/* Action buttons */}
      <div className="hidden lg:flex space-x-4">
        {/* Log In Button */}
        <Link to="/" className="text-black text-lg normal-case">
          Log in
        </Link>

        {/* Get Started Button */}
        <Link
          to="/"
          className="bg-white shadow-lg hover:shadow-xl text-black rounded-xl px-6 py-2 normal-case text-lg"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
