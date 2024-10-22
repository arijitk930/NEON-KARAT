import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React from 'react';
import Slider from 'react-slick';

function Card({ image, title, subtitle, description, socialIcon }) {
  return (
    <div className="p-2 bg-white rounded-lg shadow-lg">
      <img src={image} alt={title} className="w-24 h-24 mx-auto rounded-full" />
      <h3 className="mt-4 text-lg font-bold text-center">{title}</h3>
      <h4 className="mt-2 text-center text-purple-500">{subtitle}</h4>
      <p className="mt-2 text-sm text-center text-gray-600">{description}</p>
    </div>
  );
};

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
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
      image: 'https://placehold.co/500x500',
      title: 'NasDaily',
      subtitle: '21M FOLLOWERS ON FACEBOOK',
      description: '"I have over $3M in revenue per year..."',
      socialIcon: 'path-to-facebook-icon.svg',
    },
    {
      image: 'https://placehold.co/500x500',
      title: 'RealEngineering',
      subtitle: '4.1M FOLLOWERS ON YOUTUBE',
      description: '"Despite running a top YouTube channel..."',
      socialIcon: 'path-to-youtube-icon.svg',
    },
    {
        image: 'https://placehold.co/500x500',
        title: 'NasDaily',
        subtitle: '21M FOLLOWERS ON FACEBOOK',
        description: '"I have over $3M in revenue per year..."',
        socialIcon: 'path-to-facebook-icon.svg',
      },
      {
        image: 'https://placehold.co/500x500',
        title: 'RealEngineering',
        subtitle: '4.1M FOLLOWERS ON YOUTUBE',
        description: '"Despite running a top YouTube channel..."',
        socialIcon: 'path-to-youtube-icon.svg',
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
