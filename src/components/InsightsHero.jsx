import { useState, useEffect } from "react";

function InsightsHero() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Start the animation when the component mounts
    setIsAnimated(true);
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className={`font-primaryBold text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-none font-black tracking-tight mb-8 sm:mb-10 md:mb-12 transition-all duration-1000 ${
            isAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          FIND OUT HOW MUCH
          <br />
          YOU CAN{" "}
          <span className="inline-flex items-center align-middle">
            <img
              className="h-16 sm:h-20 md:h-24 lg:h-28 mt-1 sm:mt-2 transition-transform duration-1000 ease-out hover:scale-110" // Scaling on hover
              src="https://cdn.prod.website-files.com/64319e85443cd280068e5fff/662b7f17bdef4adb6e8f7a08_Karat_Cash_300%20px.gif"
              alt="dollar sign"
            />
          </span>{" "}
          MAKE
          <br />
          AS A CREATOR
        </h1>

        <p
          className={`text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl md:max-w-3xl mx-auto transition-opacity duration-1000 delay-200 ${
            isAnimated ? "opacity-100" : "opacity-0"
          }`}
        >
          VanityCard Insights uses our real financial and social data to help
          creators make more money.
        </p>

        <div
          className={`flex flex-col items-center space-y-8 sm:space-y-10 md:space-y-12 transition-all duration-1000 delay-500 ${
            isAnimated
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex -space-x-2 sm:-space-x-3 md:-space-x-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 border-white object-cover transition-transform duration-300 transform hover:scale-105"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 border-white object-cover transition-transform duration-300 transform hover:scale-105"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 border-white object-cover transition-transform duration-300 transform hover:scale-105"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 sm:border-3 md:border-4 border-white object-cover transition-transform duration-300 transform hover:scale-105"
              alt="Creator"
            />
          </div>

          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            Trusted by Creators like Max Reisinger, Chloe Shih, and others
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsHero;
