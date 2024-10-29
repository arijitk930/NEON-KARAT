import { useState } from "react"; // Ensure this is correct

const data = [
  {
    title: "Insights",
    subtitle: "",
    highlighted: "Make",
    normal: " more money",
    description:
      "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
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
    title: "See",
    normal: " how you compare",
    description:
      "Compare your performance with creators in your niche and identify opportunities for growth.",
    visualization: (
      <div className="relative">
        <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
          <img
            src={`https://placehold.co/600x400/000000/FFFFFF.png`}
            alt={`Profile`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Understand",
    normal: " your business",
    description:
      "Get detailed insights into your revenue streams and audience engagement metrics.",
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
];

const themeClasses = {
  light: {
    background: "bg-white",
    title: "text-black",
    text: "text-gray-800",
    highlight: "text-blue-600",
    hr: "border-gray-300",
  },
  dark: {
    background: "bg-gray-900",
    title: "text-white",
    text: "text-gray-400",
    highlight: "text-blue-400",
    hr: "border-gray-700",
  },
};

export default function Insights() {
  const [activeCard, setActiveCard] = useState(0); // Initialize with 0
  const [theme] = useState("light"); // Initialize with 'light'

  return (
    <div className={`relative min-h-screen ${themeClasses[theme].background}`}>
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className={`sticky top-4 ${themeClasses[theme].background}`}>
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left text-blue-600 mb-8">
            HOW WE HELP
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side content */}
            <div className="space-y-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`transition-all duration-500 p-4 rounded-lg ${activeCard === index ? "bg-gray-100 " : ""
                    }`}
                  style={{
                    opacity: activeCard === index ? 1 : 0.7,
                    transform:
                      activeCard === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                >
                  <button
                    className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-opacity duration-300 ${themeClasses[theme].title
                      } ${activeCard === index ? "opacity-100" : "opacity-50"}`}
                    onClick={() => setActiveCard(index)}
                  >
                    {item.title}
                  </button>

                  {activeCard !== index && (
                    <hr
                      className={` ${themeClasses[theme].hr} w-full shadow-lg rounded-xl`}
                    />
                  )}

                  {activeCard === index && (
                    <div
                      className="transition-all duration-500 mt-4"
                      style={{
                        opacity: 1,
                        transform: "translateY(10px)",
                      }}
                    >
                      <h2
                        className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-4 ${themeClasses[theme].title}`}
                      >
                        {item.subtitle}
                      </h2>

                      <div className="text-base md:text-lg lg:text-2xl">
                        <span className={themeClasses[theme].highlight}>
                          {item.highlighted}
                        </span>
                        <span>{item.normal}</span>
                      </div>

                      <p
                        className={`mt-4 text-sm md:text-base lg:text-lg ${themeClasses[theme].text}`}
                      >
                        {item.description}
                      </p>

                      <hr
                        className={`my-6 ${themeClasses[theme].hr} shadow-lg rounded-xl`}
                      />
                    </div>
                  )}
                </div>
              ))}
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-8  text-lg transition duration-300 w-full">
                  GET STARTED
                </button>
            </div>

            {/* Right side visualization */}
            <div
              className="transition-all duration-500 transform mx-auto w-full max-w-md lg:max-w-lg"
              style={{
                opacity: 1,
                transform: activeCard !== null ? "scale(1)" : "scale(0.95)",
              }}
            >
              {data[activeCard].visualization}
            </div>
          </div>

          {/* Get Started Button */}
        </div>
      </div>
    </div>
  );
}
