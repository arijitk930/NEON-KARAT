import { useRef, useEffect } from "react";

// Array of portrait cards (replace with actual images)
const cards = [
  { img: "https://placehold.co/400x700", name: "Card 1" },
  { img: "https://placehold.co/400x700", name: "Card 2" },
  { img: "https://placehold.co/400x700", name: "Card 3" },
  { img: "https://placehold.co/400x700", name: "Card 4" },
  { img: "https://placehold.co/400x700", name: "Card 5" },
  { img: "https://placehold.co/400x700", name: "Card 5" },
  { img: "https://placehold.co/400x700", name: "Card 5" },
  { img: "https://placehold.co/400x700", name: "Card 5" },
];

const Hero = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;

    const startMarquee = () => {
      slider.scrollLeft += 1; // Adjust speed
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0; // Loop back
      }
      animationFrame = requestAnimationFrame(startMarquee);
    };

    startMarquee();

    return () => {
      cancelAnimationFrame(animationFrame); // Cleanup on unmount
    };
  }, []);
  return (
    <div className="relative h-screen custom-gradient grid items-center justify-start overflow-hidden">
      {/* Marquee Sliding Background Cards */}
      <div className="absolute inset-0 z-0 flex items-center">
        <div ref={sliderRef} className="flex overflow-hidden whitespace-nowrap">
          {cards.concat(cards).map((card, index) => (
            <div
              key={index}
              className="w-full max-w-xsp-4 rounded-lg transform transition-transform duration-300 hover:scale-105"
              style={{ minWidth: "250px" }}
            >
              <img
                src={card.img}
                alt={card.name}
                className="w-48 h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
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
            className="px-4 py-2 rounded-md  bg-brown-100 text-black placeholder-gray-700 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Enter your social handle"
            className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none"
          />
          <button
            className="px-6 py-2 bg-brown-400 hover:bg-brown-600
          hover:border-gray-800 text-white rounded-md  transition text-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
