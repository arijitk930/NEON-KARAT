import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
            src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/cprnn758xh2futb5skz5.jpg"
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
            src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/rnpmsk4bxnaeqqamilwb.jpg"
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
          <video
            src="http://res.cloudinary.com/deus3nlcx/video/upload/v1730804781/videos/ubkzmmooudplehpblgef.mp4"
            autoPlay
            loop
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
      title: "",
      progressBarBg: "bg-gray-700",
      progressBarFill: "bg-blue-500",
      highlight:
        "bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke-highlight",
      cardBg: "bg-gray-800",
      cardShadow: "shadow-xl",
      hr: "bg-gray-600",
      text: "",
    },
  };

  const [activeCard, setActiveCard] = useState(0);
  const cardRefs = useRef([]);
  const timerRef = useRef(null);

  // Automatically cycle through cards
  useEffect(() => {
    startAutoCycle();

    return () => clearInterval(timerRef.current); // Clean up the interval on unmount
  }, []);

  const startAutoCycle = () => {
    clearInterval(timerRef.current); // Clear any existing interval
    timerRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % content.length);
    }, 5000); // 5000ms interval; change as needed
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
    startAutoCycle(); // Restart cycle when user clicks
  };

  return (
    <div className={`relative min-h-screen py-4`}>
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className={`sticky top-4`}>
          <h1 className="bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke font-primaryBold pt-6 font-bold text-xl md:text-6xl lg:text-6xl text-center md:text-left py-10">
            Credit Card
          </h1>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left side content */}
            <div className="space-y-6">
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
                  onClick={() => handleCardClick(index)} // Handle user click
                >
                  <button
                    className={`text-xl md:text-2xl lg:text-3xl font-bold mb-2 transition-opacity duration-300 ${
                      activeCard === index ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    <span>{item.normal}</span>
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
              <div className="flex space-x-9 items-center mt-6">
                <Link
                  to="/register"
                  className="button shadow-lg hover:shadow-xl text-black rounded-xl px-6 py-2 normal-case text-lg"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="text-black font-lato hover:text-gray-700"
                >
                  Learn More
                </Link>
              </div>
              <br />
              <p className="w-full text-white text-sm">
                VanityCard is a financial technology company and not a bank. The
                VanityCard Visa®️ Business Credit Card is issued by Cross River
                Bank, Member FDIC, and pursuant to a license from Visa️ USA.
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
