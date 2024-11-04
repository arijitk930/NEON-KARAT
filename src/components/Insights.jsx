import { useState } from "react"; // Ensure this is correct

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
            src={`https://placehold.co/500x500`}
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
            src={`https://placehold.co/600x400/000000/FFFFFF.png`}
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
    <div className="relative min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="sticky top-4">
          <h1 className="font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left text-blue-600 mb-8">
            HOW WE HELP
          </h1>
          <h2 className="font-bold text-3xl mb-6">Insights</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side content */}
            <div className="space-y-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="transition-all duration-500 p-4 rounded-lg "
                  style={{
                    opacity: activeCard === index ? 1 : 0.7,
                    transform:
                      activeCard === index
                        ? "translateY(0)"
                        : "translateY(10px)",
                  }}
                >
                  <button
                    className={`text-left text-2xl md:text-3xl lg:text-4xl font-bold mb-2 transition-opacity duration-300 ${
                      themeClasses[theme].title
                    } ${activeCard === index ? "opacity-100" : "opacity-50"}`}
                    onClick={() => setActiveCard(index)}
                  >
                    <span>{item.normal}</span>
                    <span className={themeClasses[theme].highlight}>
                      {item.highlighted}
                    </span>
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 w-full rounded-full text-lg transition duration-300">
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
        </div>
      </div>
    </div>
  );
}
