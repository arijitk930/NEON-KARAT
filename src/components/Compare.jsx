import { useState, useEffect } from "react";

function ComparisonComponent() {
  const graphSections = [
    <>
      <div className="absolute w-2/3 h-2/3 bg-blue-300 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-purple-500  rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
    </>,
    <>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-purple-500 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-blue-300 rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
    </>,
    <>
      <div className="absolute w-2/3 h-2/3 bg-gray-400 rounded-full clip-path-pie-50 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-blue-300 rounded-full clip-path-pie-75 transition-all duration-1000 ease-in-out"></div>
      <div className="absolute w-2/3 h-2/3 bg-purple-500 rounded-full clip-path-pie-25 transition-all duration-1000 ease-in-out"></div>
    </>,
  ];

  const [currentSection, setCurrentSection] = useState(0);

  const users = [
    "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/w9zdu4vxqb7iebv8ysyk.jpg",
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/ipnhwnnzvlasqvppnww6.jpg",
    "https://avatar.iran.liara.run/public/boy?username=Bob",
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSection(
        (prevSection) => (prevSection + 1) % graphSections.length
      );
    }, 1500); // Change every 2 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="flex mt-10 flex-col md:flex-row items-center md:items-start justify-between p-8 md:p-16 space-y-8 md:space-y-0 bg-white text-gray-800">
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
        <button className="px-6 py-3 mt-4 text-black font-semibold rounded button bg-[length:200%_200%] bg-left hover:bg-right transition-all duration-300 ease-in-out">
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
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt="Profile"
            className="absolute w-16 h-16 rounded-full border-4 border-white"
          />
        </div>
      </div>

      {/* Right Side Profile and Bar Chart */}
      <div className="md:w-1/3 space-y-4">
        <div className="flex justify-center space-x-2">
          {/* Profile images */}
          {users.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt="User"
              className={`w-10 h-10 rounded-full ${
                index === 2 ? "border-4 border-purple-300" : ""
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
              className={`w-8 rounded-t ${
                index === 3 ? "bg-purple-300" : "bg-gray-300"
              }`}
              style={{ height: `${height * 3}px` }}
            ></div>
          ))}
        </div>
        <div className="flex justify-center space-x-2 text-sm">
          <span className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-1"></div> YOUR
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
  const [selectedPlatform, setSelectedPlatform] = useState("tiktok");
  const [audienceRange, setAudienceRange] = useState(500000);

  const platforms = [
    { id: "youtube", label: "YOUTUBE" },
    { id: "instagram", label: "INSTAGRAM" },
    { id: "tiktok", label: "TIKTOK" },
    { id: "Twitch", label: "TWITCH" },
  ];

  return (
    <div className="flex felx-wrap p-8 max-w-6xl bg-white rounded-xl shadow-xl shadow-gray-400 mx-auto mt-10 font-primaryBold justify-evenly">
      {/* Platform Selection */}
      <div className="flex justify-center space-x-3 border-2 p-4 rounded-lg border-gray-500 w-2/3">
        {platforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 
              ${
                selectedPlatform === platform.id
                  ? "button text-black shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
          className="w-full accent-purple-600"
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
import { PieChart, Pie, Cell } from "recharts";

function RevenueBreakdown() {
  const totalRevenue = 314713;

  const data = [
    { name: "Brand Deals", value: 29.2, color: "#35e5ab" },
    { name: "Platform Revenue", value: 37, color: "#E0B0FF" },
    { name: "E-Commerce & Memberships", value: 20.3, color: "#f369a8" },
    { name: "Recurring Payroll", value: 8.5, color: "#eef472" },
    { name: "Other", value: 5, color: "#f0ba4e" },
  ];
  return (
    <div className=" flex items-center justify-center pt-4 p-4 ">
      <div className="bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c490351ee26e719721025d_gradient-bg.png')] rounded-2xl p-6 flex gap-6 max-w-6xl w-full border border-gray-300 shadow-xl bg-no-repeat bg-cover ">
        {/* Left side - Donut Chart */}
        <div className="relative flex-1 flex items-center justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx={150}
              cy={150}
              innerRadius={100}
              outerRadius={130}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[#bb32cd] text-3xl font-bold">
              ${totalRevenue.toLocaleString()}
            </span>
            <span className="text-gray-600 text-xs mt-1">TOTAL REVENUE</span>
          </div>
        </div>

        {/* Right side - Legend and Details */}
        <div className="flex-1 bg-black rounded-xl p-6 text-white">
          <h2 className="font-primaryBold text-3xl font-bold mb-6">
            REVENUE
            <br />
            BREAKDOWN
          </h2>

          <div className="space-y-4">
            {data.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-gray-400 uppercase text-sm">
                  {item.name}
                </span>
                <span className="text-xl">{item.value}%</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <div className="text-gray-400 text-sm mb-1">TOTAL INCOME</div>
            <div className="text-4xl font-bold mb-4">
              ${totalRevenue.toLocaleString()}
            </div>

            <button className="w-full button px-4 py-4  rounded-xl  transform text-black">
              Try It Now
            </button>

            <div className="text-center text-gray-500 mt-2 text-sm">
              Just connect your socials
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { PlatformSelector, ComparisonComponent, RevenueBreakdown };
