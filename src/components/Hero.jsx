import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const images = [
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/pfgobyaztel9xqzppcbr.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/mrzfkiprwbbjc9dnjtf4.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/ytewgx6h9t9fnopke2vb.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/nakbxaymwvqyebkqgkr0.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/chq9ds9zd39gzxwagveb.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805044/images/eh4alxdqdqlqgtl51atu.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ltean7wjzhrobm3ii2ak.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ca5jrqtn7hyabavg68yg.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/cprnn758xh2futb5skz5.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/kfc5u2twe6nyobdmqh9q.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/y2fkklj1mi9ic8vswnqt.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/qkqjctn9akyqi8tojm3c.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/ipnhwnnzvlasqvppnww6.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/b3tez3q9kxxmdaws6szi.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/fa5cpnenc0oaml4ddbdc.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/exzqtgn9mtj5dcdia1s4.jpg",
];

const Hero = () => {
  const [loadedImages, setLoadedImages] = useState([]);

  useEffect(() => {
    // Simulate fetching or loading process
    setLoadedImages(images);
  }, []);

  return (
    <>
      <div className="relative h-[500px] grid items-center justify-start overflow-hidden px-6 sm:px-12 md:px-24">
        {/* Marquee Sliding Background Cards */}
        <div className="absolute inset-0 z-0 flex items-center">
          <Marquee
            speed={50}
            gradient={false}
            gradientWidth={300}
            className="overflow-hidden"
          >
            {loadedImages.map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg transform transition-transform duration-300 hover:scale-105 mx-4 sm:mx-6"
                style={{ minWidth: "250px", maxWidth: "300px" }}
              >
                <div className="relative">
                  <img
                    src={card}
                    alt="default"
                    className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-lg shadow-lg"
                    loading="lazy"
                  />
                  {/* Gradient overlay at the bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-white via-transparent to-transparent "></div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full md:w-3/4 lg:w-2/3 mx-auto px-4 md:px-0 text-left">
          <h1 className="tracking-tight uppercase lg:text-[2.5rem] sm:text-[2rem] md:text-[2.5rem] font-primaryBold leading-tight text-left custom-stroke bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block">
            Embrace Your Vanity with a Vanity Card
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row sm:space-x-4 items-center justify-start space-y-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900 w-full sm:w-auto"
            />
            <input
              type="text"
              placeholder="Enter your social handle"
              className="px-4 py-2 rounded-md bg-brown-100 text-black placeholder-gray-700 focus:outline-none border border-gray-300 focus:border-brown-900 w-full sm:w-auto"
            />
            <Link
              to="/register"
              className="button px-4 py-3 sm:py-4 rounded-xl transform hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
