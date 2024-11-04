import { Youtube, Instagram, Target } from "lucide-react";

function InsightsCalculate() {
  return (
    <div className="min-h-screen bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-sm font-medium text-gray-600 mb-4">
              CREATOR TOOLKIT
            </div>
            <h1 className="text-7xl font-black tracking-tight mb-8 leading-none">
              HOW WE
              <br />
              CALCULATE
            </h1>
            <div className="space-y-8 max-w-2xl">
              <p className="text-2xl">
                We{" "}
                <span className="font-semibold">
                  compare your stats with anonymized data
                </span>{" "}
                from thousands of other top creators.
              </p>
              <p className="text-xl text-gray-600">
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
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-indigo-600" />

            {/* Step 1 */}
            <div className="relative mb-32">
              <div className="flex items-center mb-6">
                <div className="absolute left-0">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    1
                  </div>
                </div>
                <div className="ml-24">
                  <h3 className="text-3xl font-bold mb-4">
                    Connect your <span className="font-black">socials</span>
                  </h3>
                  <div className="flex space-x-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative mb-32">
              <div className="flex items-center mb-6">
                <div className="absolute left-0">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="ml-24">
                  <h3 className="text-3xl font-bold mb-4">
                    Link your <span className="font-black">financials</span>
                  </h3>
                  <div className="flex space-x-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      $
                    </div>
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      €
                    </div>
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      £
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center mb-6">
                <div className="absolute left-0">
                  <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="ml-24">
                  <h3 className="text-3xl font-bold mb-4">
                    See your <span className="font-black">results</span>
                  </h3>
                  <div className="flex space-x-3">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
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
