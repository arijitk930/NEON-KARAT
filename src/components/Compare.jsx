import { useState, useEffect } from "react";

function ComparisonComponent() {
  const graphSections = [
    <>
      <div className="absolute w-2/3 h-2/3 bg-blue-500 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-black rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
    </>,
    <>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-blue-500 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-black rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
    </>,
    <>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-black rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-blue-500 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
    </>,
  ];

  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSection(
        (prevSection) => (prevSection + 1) % graphSections.length
      );
    }, 1500); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-8 md:p-16 space-y-8 md:space-y-0 bg-white text-gray-800">
      {/* Left Side Text Content */}
      <div className="md:w-1/3 text-center md:text-left space-y-4">
        <h1 className="text-5xl font-bold leading-tight font-primaryBold">
          SEE HOW YOU COMPARE
        </h1>
        <p className="text-lg">
          Learn how you{" "}
          <span className="font-semibold">compare to other creators</span>{" "}
          similar to you. See what you are doing better and where you can
          improve.
        </p>
        <button className="px-6 py-3 mt-4 text-white font-semibold rounded bg-gradient-to-r from-purple-500 to-blue-500 bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-300 ease-in-out">
          Try It Now
        </button>
      </div>

      {/* Middle Circular Graph */}
      <div className="md:w-1/3 flex justify-center items-center">
        <div className="relative w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center">
          {/* Outer labels */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm">
            Engagement
          </div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm rotate-90">
            Brand Deals
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">
            Income
          </div>
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm -rotate-90">
            Side Hustles
          </div>

          {/* Graph sections with transition effect */}
          {graphSections[currentSection]}

          {/* Profile image */}
          <img
            src="https://via.placeholder.com/64"
            alt="Profile"
            className="absolute w-16 h-16 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Right Side Profile and Bar Chart */}
      <div className="md:w-1/3 space-y-4">
        <div className="flex justify-center space-x-2">
          {/* Profile images */}
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src="https://via.placeholder.com/40"
              alt="User"
              className={`w-10 h-10 rounded-full ${index === 2 ? "border-4 border-blue-500" : ""
                }`}
            />
          ))}
        </div>

        {/* Income Info */}
        <div className="text-center">
          <p className="text-lg">Your yearly brand deals income</p>
          <h2 className="text-4xl font-bold">$102,455</h2>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between space-x-1 h-32">
          {[10, 15, 8, 25, 18, 10, 5].map((height, index) => (
            <div
              key={index}
              className={`w-8 rounded-t ${index === 3 ? "bg-blue-500" : "bg-gray-300"
                }`}
              style={{ height: `${height * 3}px` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 text-sm">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div> YOUR
            INCOME
          </span>
          <span className="flex items-center">
            <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div> OTHERS
          </span>
        </div>
      </div>
    </div>
  );
}


const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('tiktok');
  const [audienceRange, setAudienceRange] = useState(500000);

  const platforms = [
    { id: 'youtube', label: 'YOUTUBE' },
    { id: 'instagram', label: 'INSTAGRAM' },
    { id: 'tiktok', label: 'TIKTOK' },
    { id: 'Twitch', label: 'TWITCH' },
  ];

  return (
    <div className="flex felx-wrap p-8 max-w-6xl bg-white rounded-xl shadow-xl shadow-gray-400 mx-auto my-10 font-primaryBold justify-evenly">
      {/* Platform Selection */}
      <div className="flex justify-center space-x-3 border-2 p-4 rounded-lg border-gray-500 w-2/3">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 
              ${selectedPlatform === platform.id
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
          >
            {platform.label}
          </button>
        ))}
      </div>

      {/* Audience Range */}
      <div className="w-full ml-8">
        <label className="block mb-4 text-lg font-bold text-gray-800">
          AUDIENCE RANGE
        </label>
        <input
          type="range"
          min={0}
          max={1000000}
          step={100000}
          value={audienceRange}
          onChange={(e) => setAudienceRange(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex justify-between text-sm text-gray-600 mt-3">
          <span>0-100K</span>
          <span>100-500K</span>
          <span>500K-1M</span>
          <span>1M+</span>
        </div>
        <p className="text-center mt-4 text-lg font-medium text-gray-800">
          Selected Range: {audienceRange.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

import React from 'react';

const RevenueBreakdown = () => {
  const totalRevenue = 314713;
  const breakdown = [
    { label: 'Brand Deals', color: 'bg-blue-700', value: 29.2 },
    { label: 'Platform Revenue', color: 'bg-blue-500', value: 37 },
    { label: 'E-Commerce & Memberships', color: 'bg-purple-200', value: 20 },
    { label: 'Recurring Payroll', color: 'bg-purple-400', value: 10 },
    { label: 'Other', color: 'bg-black', value: 3.8 },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex bg-white rounded-lg shadow-lg w-full">
        {/* Left side - Donut chart and total revenue */}
        <div className="p-8 flex flex-col justify-center items-center">
          <div className="relative flex justify-center items-center w-48 h-48 rounded-full bg-gray-100">
            <div className="absolute w-full h-full rounded-full border-[10px] border-t-blue-700 border-r-blue-500 border-b-purple-200 border-l-black" />
            <div className="absolute flex flex-col items-center">
              <span className="text-2xl font-bold text-blue-700">${totalRevenue.toLocaleString()}</span>
              <span className="text-gray-500">TOTAL REVENUE</span>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 space-y-4">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-4 h-4 ${item.color} rounded-full`} />
                <span className="text-gray-700">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Revenue details */}
        <div className="bg-black text-white p-8 rounded-r-lg w-80 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-8">REVENUE BREAKDOWN</h2>
            {breakdown.map((item, index) => (
              <div key={index} className="flex justify-between py-4 border-b border-gray-700">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
          {/* Total income and button */}
          <div className="mt-8">
            <div className="text-center">
              <p className="text-gray-500 text-sm">TOTAL INCOME</p>
              <h3 className="text-3xl font-extrabold mt-2">${totalRevenue.toLocaleString()}</h3>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 w-full py-3 mt-8 text-lg font-semibold rounded-lg hover:opacity-90 transition">
              Try It Now
            </button>
            <p className="text-center text-gray-400 text-sm mt-4">Just connect your socials</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export { PlatformSelector, ComparisonComponent, RevenueBreakdown };

