import { useState, useEffect, useRef } from "react"; // Ensure this is correct
import { Link } from "react-router-dom";
import business from "../assets/business.jpg";
const data = [
  {
    normal: "Make more ",
    highlighted: "money",
    description:
      "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/nakbxaymwvqyebkqgkr0.jpg`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    normal: "See how you ",
    highlighted: "compare",
    description:
      "Compare your performance with creators in your niche and identify opportunities for growth.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/b3tez3q9kxxmdaws6szi.jpg`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    normal: "Understand your ",
    highlighted: "business",
    description:
      "Get detailed insights into your revenue streams and audience engagement metrics.",
    visualization: (
      <div className="relative">
        <div className="w-full h-96 rounded-sm border-white overflow-hidden">
          <img src={business} autoPlay className=" w-full" />
        </div>
      </div>
    ),
  },
];

const themeClasses = {
  light: {
    background: "bg-white",
    title: "text-black",
    text: "text-gray-800",
    highlight:
      "bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke-highlight",
    hr: "border-gray-300",
  },
  dark: {
    background: "bg-gray-900",
    title: "text-white",
    text: "text-gray-400",
    highlight:
      "bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block stroke",
    hr: "border-gray-700",
  },
};

export default function Insights() {
  const [activeCard, setActiveCard] = useState(0);
  const sectionsRef = useRef([]);
  const timerRef = useRef(null);

  // Automatically cycle through cards
  useEffect(() => {
    startAutoCycle();

    return () => clearInterval(timerRef.current); // Clean up the interval on unmount
  }, []);

  const startAutoCycle = () => {
    clearInterval(timerRef.current); // Clear any existing interval
    timerRef.current = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % data.length);
    }, 5000); // 5000ms interval; change as needed
  };

  const handleCardClick = (index) => {
    setActiveCard(index);
    startAutoCycle(); // Restart cycle when user clicks
  };

  return (
    <div className="relative min-h-screen mt-20">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="sticky top-4">
          <h1 className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-[3.75rem] font-normal leading-tight sm:leading-[1.1] font-primaryBold pb-7 bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke">
            HOW WE HELP
          </h1>
          <h2 className="font-bold text-[40px] mb-6 font-primaryBold">
            INSIGHTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side content */}
            <div className="space-y-6">
              {data.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className={`transition-all duration-500 cursor-pointer rounded-lg ${
                    activeCard === index ? "opacity-100" : "opacity-50"
                  }`}
                  style={{
                    transform:
                      activeCard === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                  onClick={() => handleCardClick(index)} // Click handler to activate card
                >
                  <div
                    className={`text-left text-2xl md:text-3xl lg:text-[30px] font-bold mb-2 transition-opacity duration-300 ${
                      themeClasses.light.title
                    } ${activeCard === index ? "opacity-100" : "opacity-50"}`}
                  >
                    <span>{item.normal}</span>
                    <span className={themeClasses.light.highlight}>
                      {item.highlighted}
                    </span>
                  </div>

                  {activeCard !== index && (
                    <hr
                      className={`${themeClasses.light.hr} w-full shadow-lg rounded-xl`}
                    />
                  )}

                  {activeCard === index && (
                    <div
                      className="transition-all duration-500 mt-4"
                      style={{ opacity: 1, transform: "translateY(10px)" }}
                    >
                      <p
                        className={`mt-4 text-sm md:text-base lg:text-lg ${themeClasses.light.text}`}
                      >
                        {item.description}
                      </p>
                      <hr
                        className={`my-6 ${themeClasses.light.hr} shadow-lg rounded-xl`}
                      />
                    </div>
                  )}
                </div>
              ))}
              <Link
                to="/register"
                className="button text-black h-15 w-full rounded-md text-lg transition duration-300  font-bold text-center"
              >
                GET STARTED
              </Link>
            </div>

            {/* Right side visualization */}
            <div
              className="transition-all duration-500 transform mx-auto w-full max-w-md lg:max-w-lg"
              style={{
                opacity: 1,
                transform: activeCard !== null ? "scale(1)" : "scale(0.95)",
              }}
            >
              {data[activeCard]?.visualization}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
