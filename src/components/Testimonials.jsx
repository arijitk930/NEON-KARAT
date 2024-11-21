import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, memo } from "react";
import Slider from "react-slick";

// Optimized Card Component
// eslint-disable-next-line react/display-name
const Card = memo(({ image, title, subtitle, description }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="p-2 bg-white rounded-lg shadow-blue-gray-400 shadow-xl my-4">
      {/* Skeleton loader while the image is loading */}
      {!isLoaded && (
        <div className="w-24 h-24 mx-auto bg-gray-300 rounded-full animate-pulse"></div>
      )}

      {/* Main image */}
      <img
        src={image}
        alt={title}
        className={`w-24 h-24 mx-auto rounded-full ${isLoaded ? "" : "hidden"}`}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />

      {/* Text content */}
      <h3 className="mt-4 text-lg font-bold text-center">{title}</h3>
      <h4 className="mt-2 text-center text-purple-500">{subtitle}</h4>
      <p className="mt-2 text-sm text-center text-gray-600">{description}</p>
    </div>
  );
});

const Testimonials = () => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 300, // Reduced speed for smoother transitions
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Adjusted interval for better performance
    lazyLoad: "ondemand", // Lazy load slides for optimization
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Example card data
  const cardData = [
    {
      image: "https://avatar.iran.liara.run/public/boy?username=Ash",
      title: "Our User",
      subtitle: "21M FOLLOWERS ON FACEBOOK",
      description: '"I have over $3M in revenue per year..."',
    },
    {
      image: "https://avatar.iran.liara.run/public/boy?username=Ash",
      title: "Our User",
      subtitle: "4.1M FOLLOWERS ON YOUTUBE",
      description: '"Despite running a top YouTube channel..."',
    },
    {
      image: "https://avatar.iran.liara.run/public/boy?username=Ash",
      title: "Our User",
      subtitle: "21M FOLLOWERS ON FACEBOOK",
      description: '"I have over $3M in revenue per year..."',
    },
    {
      image: "https://avatar.iran.liara.run/public/boy?username=Ash",
      title: "Our User",
      subtitle: "4.1M FOLLOWERS ON YOUTUBE",
      description: '"Despite running a top YouTube channel..."',
    },
    // Add more cards as needed
  ];

  return (
    <Slider {...settings} className="my-8">
      {cardData.map((card, index) => (
        <div key={index} className="px-2">
          <Card {...card} />
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials;
