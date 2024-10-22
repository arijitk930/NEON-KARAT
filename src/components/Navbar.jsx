import React from 'react';

const Navbar = () => {
  return (
    <nav className="custom-gradient p-4 flex justify-between items-center font-bold text-lg">
      <div className="text-2xl font-bold">Karat</div>
      <ul className="flex space-x-8">
        <li>Insights</li>
        <li>Credit Card</li>
        <li>Socials</li>
      </ul>
      <div>
        <button className="px-4 py-2 bg-white text-[#1D0CE5] rounded mr-2">Get Started</button>
        <button className="px-4 py-2 bg-transparent border border-white rounded">Log In</button>
      </div>
    </nav>
  );
};

export default Navbar;
