import React from 'react';

function ComparisonComponent() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between p-8 md:p-16 space-y-8 md:space-y-0 bg-white text-gray-800">
            {/* Left Side Text Content */}
            <div className="md:w-1/3 text-center md:text-left space-y-4">
                <h1 className="text-5xl font-bold leading-tight">SEE HOW YOU COMPARE</h1>
                <p className="text-lg">
                    Learn how you <span className="font-semibold">compare to other creators</span> similar to you. See what you're doing better and where you can improve.
                </p>
                <button className="px-6 py-3 mt-4 text-white font-semibold rounded bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                    Try It Now
                </button>
            </div>

            {/* Middle Circular Graph */}
            <div className="md:w-1/3 flex justify-center items-center">
                <div className="relative w-64 h-64 bg-gray-100 rounded-full flex items-center justify-center">
                    {/* Outer labels */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm">Engagement</div>
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-sm rotate-90">Brand Deals</div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm">Income</div>
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-sm -rotate-90">Side Hustles</div>

                    {/* Graph sections */}
                    <div className="absolute w-2/3 h-2/3 bg-blue-500 rounded-full clip-path-pie-25"></div>
                    <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50"></div>
                    <div className="absolute w-2/3 h-2/3 bg-black rounded-full clip-path-pie-75"></div>

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
                            className={`w-10 h-10 rounded-full ${index === 2 ? 'border-4 border-blue-500' : ''}`}
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
                            className={`w-8 rounded-t ${index === 3 ? 'bg-blue-500' : 'bg-gray-300'}`}
                            style={{ height: `${height * 3}px` }}
                        ></div>
                    ))}
                </div>
                <div className="flex justify-center space-x-2 text-sm">
                    <span className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div> YOUR INCOME
                    </span>
                    <span className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full mr-1"></div> OTHERS
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ComparisonComponent;
