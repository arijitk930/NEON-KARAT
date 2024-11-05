import { Youtube, Instagram, Target } from "lucide-react";

function InsightsCalculate() {
  return (
    <div className="min-h-screen bg-white py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-2 items-center">
          <div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 mb-2 sm:mb-4">
              CREATOR TOOLKIT
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black tracking-tight mb-6 sm:mb-8 md:mb-10 leading-tight lg:leading-none font-primaryBold">
              HOW WE
              <br />
              CALCULATE
            </h1>
            <div className="space-y-6 sm:space-y-8 max-w-xl md:max-w-2xl">
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
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-indigo-600" />

            {/* Step 1 */}
            <div className="relative mb-20 sm:mb-24 md:mb-32">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    Connect your <span className="font-black">socials</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Youtube className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-20 sm:mb-24 md:mb-32">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    Link your <span className="font-black">financials</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      $
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      €
                    </div>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold">
                      £
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="absolute left-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="ml-20 sm:ml-24">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4">
                    See your <span className="font-black">results</span>
                  </h3>
                  <div className="flex space-x-2 sm:space-x-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center">
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
