import { useState, useEffect, useRef } from 'react';

const StickyScrollReveal = ({ theme = 'dark', heading, content }) => {
  const themeClasses = {
    light: {
      background: 'bg-white',
      text: 'text-gray-600',
      title: 'text-black',
      progressBarBg: 'bg-blue-100',
      progressBarFill: 'bg-blue-800',
      highlight: 'text-blue-600',
      cardBg: 'bg-white',
      cardShadow: 'shadow-md',
      hr: 'bg-slate-900',
    },
    dark: {
      background: 'bg-gray-900',
      text: 'text-gray-300',
      title: 'text-white',
      progressBarBg: 'bg-gray-700',
      progressBarFill: 'bg-blue-500',
      highlight: 'text-blue-400',
      cardBg: 'bg-gray-800',
      cardShadow: 'shadow-xl',
      hr: 'bg-gray-600',
    }
  };
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex(ref => ref === entry.target);
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
    <div className={`relative min-h-screen ${themeClasses[theme].background}`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className={`sticky top-4 ${themeClasses[theme].background} ml-16`}>
          <h1 className={`${themeClasses[theme].highlight} font-bold text-8xl`}>{heading}</h1>
          <br />
          <div className="grid grid-cols-2 gap-8 items-start">
            {/* Left side content */}
            <div className="space-y-6"> {/* Adjust space between items */}
              {content.map((item, index) => (
                <div className='w-full' key={index}>
                  <button
                    className={`text-4xl font-bold mb-2 transition-opacity duration-300 ${themeClasses[theme].title} ${activeCard === index ? 'opacity-100' : 'opacity-30'}`}
                    onClick={() => setActiveCard(index)} // Clicking the title expands it
                  >
                    {item.title}
                  </button>
                  {activeCard !== index && (<hr className={` ${themeClasses[theme].hr} w-full shadow-xl rounded-xl`} />)}
                  {activeCard === index && (
                    <div>
                      <h2 className={`text-3xl font-semibold mb-4 ${themeClasses[theme].title}`}>
                        {item.subtitle}
                      </h2>
                      <div className="text-2xl">
                        <span className={themeClasses[theme].highlight}>{item.highlighted}</span>
                        <span>{item.normal}</span>
                      </div>
                      <p className={`mt-2 text-base ${themeClasses[theme].text}`}>
                        {item.description}
                      </p>
                      <hr className={`my-6 ${themeClasses[theme].hr} shadow-xl rounded-xl`} />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side visualization */}
            <div className="transition-all duration-500 transform m-6">
              {content[activeCard].visualization}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyScrollReveal;
