import React, { useState } from "react";
import { useAuth } from "../services/AppContext";
import service from "../services/appwriteConfig";
import { useNavigate } from "react-router-dom";

const TopBar = ({ userName = "Siddhes Das", userInitials = "SD" }) => {
  const nav=useNavigate();
  const logoutUser=async ()=>{
      try {
        await service.account.deleteSession('current');
        logout();
        nav("/");
      } catch (error) {
        console.log(error)
      }
  }
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Close the dropdown when clicking outside
  const handleClickOutside = () => setIsOpen(false);

  return (
    <div className="flex justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg shadow-md relative">
      {/* Greeting text */}
      <h2 className="text-2xl font-semibold text-gray-800">{userName} —</h2>

      {/* User profile section */}
      <div className="relative">
        {/* User initials circle */}
        <div
          onClick={toggleDropdown}
          className="w-12 h-12 flex items-center justify-center bg-indigo-600 text-white rounded-full cursor-pointer"
        >
          {userInitials}
        </div>

        {/* Dropdown popup */}
        {isOpen && (
          <div
            className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-50"
            onClick={handleClickOutside}
          >
            <button
              onClick={logoutUser}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
