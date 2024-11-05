import { images } from "./data";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <div className="relative h-screen custom-gradient grid items-center justify-start overflow-hidden px-48">
      {/* Marquee Sliding Background Cards */}
      <div className="absolute inset-0 z-0 flex items-center">
        <Marquee speed={80} gradient={true}>
          {images.map((card, index) => (
            <div
              key={index}
              className="rounded-lg transform transition-transform duration-300 hover:scale-105 mx-6"
              style={{ minWidth: "350px", maxWidth: "350px" }} // Increase card size
            >
              <img
                src={card}
                alt="default"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg" // Adjust image height here
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-2/3 left-10">
        <h1 className="text-3xl md:text-4xl font-bold drop-shadow-md font-primaryBold">
          WE HELP CREATORS WITH MONEY
        </h1>
        <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
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
          <button className="button rounded-md font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
