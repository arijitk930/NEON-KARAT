import { useState, useEffect, useRef } from "react";
const content = [
  {
    normal: "Limit based on ",
    highlighted: " social stats",
    description:
      "Old-school banks don’t get it. We give you limits based on your socials + cashflow so you can focus on creating.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`https://placehold.co/500x500`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    normal: "Fast ",
    highlighted: " live chats",
    description:
      "You deserve a partner that keeps up with you - chat with our certified financial planner and our Concierge team whenever.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`https://placehold.co/500x500`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    normal: "Get rewarded ",
    highlighted: "on your spend",
    description:
      "Get 1-3 points back on every dollar spent. Points can be redeemed for Times Square billboards, statement credits, and more.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`https://placehold.co/400x500`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
];
const CreditCard = ({ theme = "dark" }) => {
  const themeClasses = {
    dark: {
      background: "bg-gradient-to-r from-purple-600 via-pink-600 to-red-600",
      title: "text-white",
      progressBarBg: "bg-gray-700",
      progressBarFill: "bg-blue-500",
      highlight: "text-blue-200",
      cardBg: "bg-gray-800",
      cardShadow: "shadow-xl",
      hr: "bg-gray-600",
      text: "text-white",
    },
  };

  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(
              (ref) => ref === entry.target
            );
            if (index !== -1) {
              setActiveCard(index);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative min-h-screen py-20 ${themeClasses[theme].background}`}
    >
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className={`sticky top-4`}>
          <h1
            className={`${themeClasses[theme].highlight} font-primaryBold pt-6 font-bold text-xl md:text-6xl lg:text-6xl text-center md:text-left`}
          >
            Credit Card
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side content */}
            <div className="space-y-6">
              {" "}
              {/* Adjust space between items */}
              {content.map((item, index) => (
                <div
                  className="w-full transition-all duration-500"
                  key={index}
                  style={{
                    opacity: activeCard === index ? 1 : 0.5,
                    transform:
                      activeCard === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                >
                  <button
                    className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 transition-opacity duration-300  ${
                      activeCard === index ? "opacity-100" : "opacity-30"
                    }`}
                    onClick={() => setActiveCard(index)} // Clicking the title expands it
                  >
                    <span className="text-white">{item.normal}</span>
                    <span className={themeClasses[theme].highlight}>
                      {item.highlighted}
                    </span>
                  </button>
                  {activeCard !== index && (
                    <hr
                      className={` ${themeClasses[theme].hr} w-full shadow-xl rounded-xl`}
                    />
                  )}
                  {activeCard === index && (
                    <div
                      className="transition-all duration-500"
                      style={{
                        opacity: activeCard === index ? 1 : 0,
                        transform: "translateY(10px)",
                      }}
                    >
                      <p
                        className={`mt-2 text-sm md:text-base lg:text-lg ${themeClasses[theme].text}`}
                      >
                        {item.description}
                      </p>
                      <hr
                        className={`my-6 ${themeClasses[theme].hr} shadow-xl rounded-xl`}
                      />
                    </div>
                  )}
                </div>
              ))}
              <div className="flex justify-between items-center mt-6">
                <button className="bg-blue-400 shadow-lg hover:shadow-xl text-black rounded-xl px-6 py-2 normal-case text-lg">
                  Get Started
                </button>
                <button className="text-white">Learn More</button>
                <button></button>
              </div>
              <br />
              <p className="w-full text-white text-sm">
                VanityCard is a financial technology company and not a bank. The
                VanityCard Visa®️ Business Credit Card is issued by by Cross
                River Bank, Member FDIC, and pursuant to a license from Visa️
                USA
              </p>
            </div>

            {/* Right side visualization */}
            <div
              className="transition-all duration-500 transform m-6"
              style={{
                opacity: 1,
                transform: activeCard !== null ? "scale(1)" : "scale(0.9)",
              }}
            >
              {content[activeCard].visualization}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
