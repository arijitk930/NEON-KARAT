const BottomSection = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-[77rem] mx-auto px-4 sm:px-10 py-10 space-y-10 sm:space-y-0 sm:space-x-10">
      {/* Text Section */}
      <div className="text-center">
        <h2 className="text-gray-900 text-2xl font-medium">
          Uh, this is the bottom of the page.
        </h2>
        <p className="text-gray-600 mt-2">
          What are you waiting for? Apply. It’s time to grow.
        </p>
      </div>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <button className="px-6 py-2 border border-gray-900 text-gray-900 font-semibold hover:bg-black hover:text-white transition duration-200">
          APPLY FOR CARD
        </button>
        <button className="px-6 py-2 border border-gray-900 text-gray-900 font-semibold hover:bg-black hover:text-white transition duration-200">
          JOIN BANKING WAITLIST
        </button>
      </div>
    </div>
  );
};

export default BottomSection;
