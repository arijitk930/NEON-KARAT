import React from "react";

const TopBar = ({ userName = "Siddhes Das", userInitials = "SD" }) => {
  return (
    <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg shadow-md">
      {/* Greeting text */}
      <h2 className="text-2xl font-semibold text-gray-800">{userName} —</h2>
      
      {/* User profile section */}
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">{userName}</span>
        <div className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full">
          {userInitials}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
