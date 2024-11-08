import CreditCard from "../components/CreditCard";

import TaxCommunity from "../components/TaxCommunity";

export default function CreditCardPg() {
  return (
    <div>
      <Hero />
      <CreditCard />
      <CardComponent />
      <SecurityFeatures />
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
function CardComponent() {
  return (
    <section className="bg-blue-gray-800 relative overflow-hidden py-[5rem] px-8 md:px-16">
      <div className="w-3/4 max-w-full mx-auto pt-[5rem] pb-[5rem] pl-[2.55rem] pr-[2.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-6 items-center">
          <div className="flex flex-col justify-start items-start text-white space-y-6 md:pr-8">
            <div className="space-y-9">
              <h2 className="uppercase text-[60px] font-bold leading-[1.1] text-left font-primaryBold ">
                A card customized for you
              </h2>
              <p className="text-lg font-bold leading-[1.4] tracking-[.3px] mb-0 text-left">
                Your alloy metal card is laser-etched with your logo.
              </p>
            </div>
            <a className="border border-blue-900 bg-blue-600 text-white text-center uppercase w-full py-2.5 px-6 text-base font-semibold leading-tight transition-all duration-200 flex justify-center items-center md:w-auto lg:w-full cursor-pointer hover:bg-blue-900">
              Apply Now
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <img
              src="https://cdn.prod.website-files.com/64319e85443cd280068e5fff/668e2eb1b9876982c0530cca_VISA%20WHITE%20large.webp"
              loading="lazy"
              alt="card"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SecurityFeatures() {
  return (
    <section className="bg-gray-100 py-12 px-8 md:px-16">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold uppercase mb-8 text-gray-900">
          Your Suit of Armor
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="border border-purple-500 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="mb-4">
              {/* Security Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 11c0-1.1.9-2 2-2s2 .9 2 2c0 .78-.4 1.42-1 1.72l-.1.07A2 2 0 0013 16h-2a2 2 0 01-1.9-2.79l.1-.07A1.99 1.99 0 0112 11z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold uppercase text-purple-700 mb-2">
              You are Safe With Us
            </h3>
            <p className="text-gray-700">
              We secure all your data with 256-bit encryption and all
              transactions you make are verified through Visas fraud algorithms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-purple-500 p-6 rounded-lg flex flex-col items-center text-center">
            <div className="mb-4">
              {/* Support Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 14h-2a3 3 0 00-6 0H6a2 2 0 00-2 2v4a2 2 0 002 2h1.5M8 20h.5M17.25 20H20a2 2 0 002-2v-4a2 2 0 00-2-2h-1.25m-5.5 0a3 3 0 013-3h3a3 3 0 013 3m-8 0H12m-1 0h-.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-extrabold uppercase text-purple-700 mb-2">
              Real Support at Your Fingertips
            </h3>
            <p className="text-gray-700">
              If you run into any suspicious activity on your card, our
              concierge team is at your service from 6am to 11pm PT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
