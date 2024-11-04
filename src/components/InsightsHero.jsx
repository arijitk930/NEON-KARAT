function InsightsHero() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-6xl mx-auto text-center ">
        <h1 className="font-primaryBold text-[50px] leading-none font-black tracking-tight mb-12">
          FIND OUT HOW MUCH
          <br />
          YOU CAN{" "}
          <span className="inline-flex items-center align-middle">
            <img
              className="h-28 mt-2" // Adjust the height and margin-top to better align with text
              src="https://cdn.prod.website-files.com/64319e85443cd280068e5fff/662b7f17bdef4adb6e8f7a08_Karat_Cash_300%20px.gif"
              alt="dollar sign"
            />
          </span>{" "}
          MAKE
          <br />
          AS A CREATOR
        </h1>


        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          VanityCard Insights uses our real financial and social data to help
          creators make more money.
        </p>

        <div className="flex flex-col items-center space-y-12">
          <div className="flex -space-x-4">
            <img
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
              alt="Creator"
            />
            <img
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=400&h=400&fit=crop"
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
              alt="Creator"
            />
          </div>

          <p className="text-gray-500 text-lg">
            Trusted by Creators like Max Reisinger, Chloe Shih, and others
          </p>
        </div>
      </div>
    </div>
  );
}

export default InsightsHero;
