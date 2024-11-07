import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import icons
import { Link } from "react-router-dom";
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md p-4 lg:px-8 flex justify-between items-center font-bold text-lg sticky top-0 z-50 transition-all duration-300 ease-in-out fade-in">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center text-2xl font-primaryBold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text fade-in-scale"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-15 transform scale-150 -mr-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
          <span className="transition-transform duration-300 ease-in-out ">
            anityCard
          </span>
        </Link>

        {/* Menu links */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <Link
              to="/insights"
              className="text-black font-lato hover:text-[#ac73db] transition-colors cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ac73db] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Insights
            </Link>
          </li>
          <li>
            <Link
              to="/credit-card"
              className="text-black font-lato hover:text-[#ac73db] transition-colors cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ac73db] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Credit Card
            </Link>
          </li>
          <li>
            <Link
              to="/socials"
              className="text-black font-lato hover:text-[#ac73db] transition-colors cursor-pointer relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#ac73db] after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              Socials
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-black text-3xl focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu links */}
      <ul
        className={`lg:hidden absolute w-full left-0 top-16 bg-white border border-gray-200 shadow-lg transition-all duration-500 ease-in-out ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            to="/insights"
            className="block px-6 py-2 text-black hover:text-blue-600 transition-colors cursor-pointer"
          >
            Insights
          </Link>
        </li>
        <li>
          <Link
            to="/credit"
            className="block px-6 py-2 text-black hover:text-blue-600 transition-colors cursor-pointer"
          >
            Credit Card
          </Link>
        </li>
        <li>
          <Link
            to="/socials"
            className="block px-6 py-2 text-black hover:text-blue-600 transition-colors cursor-pointer"
          >
            Socials
          </Link>
        </li>
      </ul>

      {/* Action buttons */}
      <div className="hidden lg:flex space-x-4 items-center">
        {/* Log In Button */}
        <Link to="/" className="text-black text-lg normal-case font-bold">
          Log in
        </Link>

        {/* Get Started Button */}
        <Link
          to="/"
          className="button px-4 py-4  rounded-xl  transform hover:scale-105 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
