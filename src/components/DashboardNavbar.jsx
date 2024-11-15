import React from "react";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-full border-r border-gray-300 flex flex-col">
      <div className="p-5 text-2xl font-bold">☰</div>
      <nav className="flex flex-col space-y-2 p-5">
        <a href="#" className="p-3 rounded hover:bg-gray-200">
          Home
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-200">
          Insights
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-200">
          Referrals
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-200">
          Settings
        </a>
        <a href="#" className="p-3 rounded hover:bg-gray-200">
          Account Details
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
