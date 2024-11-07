import CreditCard from "../components/CreditCard";

import TaxCommunity from "../components/TaxCommunity";

export default function CreditCardPg() {
  return (
    <div>
      <Hero />
      <CreditCard />
      <TaxCommunity />
    </div>
  );
}
function Hero() {
  return (
    <div className="min-h-screen  text-black flex flex-col items-center justify-center px-4 py-10 fade-in-scale">
      {/* Card Display */}
      <div className="relative flex justify-center space-x-4 mb-10">
        {/* Left Card */}
        <div className="w-[220px] h-[140px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl transform -rotate-12 shadow-xl"></div>
        {/* Center Card */}
        <div className="w-[260px] h-[160px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl shadow-xl z-10"></div>
        {/* Right Card */}
        <div className="w-[220px] h-[140px] bg-gradient-to-br from-[#4a00e0] to-[#4504c3] rounded-xl transform rotate-12 shadow-xl"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-[64px]  mb-8 text-center font-primaryBold uppercase  tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
        THE CARD <br /> FOR CREATORS
      </h1>

      {/* Input and Button Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
        />
        <input
          type="text"
          placeholder="Enter your social handle"
          className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
        />
        <button className="button text-black px-6 py-2 rounded-md font-semibold transition-colors">
          APPLY NOW
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs max-w-2xl text-center">
        VanityCard is a financial technology company and not a bank. The
        VanityCard Visa® Business Credit Card is issued by Cross River Bank,
        Member FDIC, pursuant to a license from Visa USA.
      </p>
    </div>
  );
}
