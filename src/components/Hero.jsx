import { useState, useEffect } from "react";
const images = ['http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/pfgobyaztel9xqzppcbr.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/mrzfkiprwbbjc9dnjtf4.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/ytewgx6h9t9fnopke2vb.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/nakbxaymwvqyebkqgkr0.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/chq9ds9zd39gzxwagveb.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805044/images/eh4alxdqdqlqgtl51atu.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ltean7wjzhrobm3ii2ak.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ca5jrqtn7hyabavg68yg.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/cprnn758xh2futb5skz5.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/kfc5u2twe6nyobdmqh9q.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/y2fkklj1mi9ic8vswnqt.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/qkqjctn9akyqi8tojm3c.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/ipnhwnnzvlasqvppnww6.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/b3tez3q9kxxmdaws6szi.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/fa5cpnenc0oaml4ddbdc.jpg',
  'http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/exzqtgn9mtj5dcdia1s4.jpg',]
import Marquee from "react-fast-marquee";

const Hero = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Simulate fetching or loading process
    setLoadedImages(images);
  }, []);
  return (
    <div className="relative h-screen custom-gradient grid items-center justify-start overflow-hidden px-48">
      {/* Marquee Sliding Background Cards */}
      <div className="absolute inset-0 z-0 flex items-center">
        <Marquee speed={30} gradient={true} gradientWidth={600} >
          {loadedImages.map((card, index) => (
            <div
              key={index}
              className="rounded-lg transform transition-transform duration-300 hover:scale-105 mx-6"
              style={{ minWidth: "350px", maxWidth: "350px" }}
            >
              <img
                src={card}
                alt="default"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-2/3 left-10">
        <h1 className="text-3xl md:text-4xl font-primaryBold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
          WE HELP CREATORS WITH MONEY
        </h1>
        <div className="mt-6 space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
          />

          <input
            type="text"
            placeholder="Enter your social handle"
            className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900"
          />
          <button className="button rounded-md font-bold">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
