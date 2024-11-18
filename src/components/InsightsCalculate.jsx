import { useState, useEffect, useRef } from "react";
import { Youtube, Instagram, Target } from "lucide-react";

function InsightsCalculate() {
  const [isAnimated, setIsAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true);
          observer.unobserve(entry.target); // Stop observing after animation starts
        }
      },
      { threshold: 0.2 } // Adjust this threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-white py-12 sm:py-16 md:py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div>
            <div
              className={`text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-4 transition-all duration-700 ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              CREATOR TOOLKIT
            </div>
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 md:mb-10 leading-tight lg:leading-none font-primaryBold transition-all duration-1000 ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              HOW WE
              <br />
              CALCULATE
            </h1>
            <div
              className={`space-y-6 sm:space-y-8 max-w-xl md:max-w-2xl transition-opacity duration-1000 delay-300 ${
                isAnimated ? "opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-lg sm:text-xl md:text-2xl">
                We{" "}
                <span className="font-semibold">
                  compare your stats with anonymized data
                </span>{" "}
                from thousands of other top creators.
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">
                Our mission is to help creators run their businesses better. By
                trying our calculator, you are providing{" "}
                <span className="font-semibold text-black">
                  knowledge that helps everyone.
                </span>
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div
              className={`absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-purple-600 transition-transform duration-700 ${
                isAnimated ? "scale-y-100" : "scale-y-0"
              } origin-top`}
            />

            {/* Step 1 */}
            <div
              className={`relative mb-20 sm:mb-24 md:mb-32 transition-all duration-700 ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold transition-transform duration-500 transform hover:scale-105">
                    1
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    Connect your <span className="font-black">socials</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
                      <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`relative mb-20 sm:mb-24 md:mb-32 transition-all duration-700 delay-200 ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold transition-transform duration-500 transform hover:scale-105">
                    2
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    Link your <span className="font-black">financials</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold transition-transform duration-300 transform hover:scale-105">
                      $
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold transition-transform duration-300 transform hover:scale-105">
                      €
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold transition-transform duration-300 transform hover:scale-105">
                      £
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`relative transition-all duration-700 delay-400 ${
                isAnimated
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold transition-transform duration-500 transform hover:scale-105">
                    3
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    See your <span className="font-black">results</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105">
                      <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsightsCalculate;
