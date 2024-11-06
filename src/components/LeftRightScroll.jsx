import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const topVideos = [
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/dyz5reebdq74vxqu3xsq.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/w9zdu4vxqb7iebv8ysyk.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/uh2lf5mwf3a2bnkikdb2.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/txinllbh67wqveducklr.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/sfcstmoh7ktuj9jv6tgw.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/jqt4b3nngljgriddy4rd.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/atje7dv8momajo6mv2yi.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/rnpmsk4bxnaeqqamilwb.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805044/images/bmyfleo4lbvaxbxnqkx1.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805044/images/ud7rlpbuowwdbbg8lpxw.jpg",
];

const bottomVideos = [
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/ytewgx6h9t9fnopke2vb.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/nakbxaymwvqyebkqgkr0.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805042/images/chq9ds9zd39gzxwagveb.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/qkqjctn9akyqi8tojm3c.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/ipnhwnnzvlasqvppnww6.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/b3tez3q9kxxmdaws6szi.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/fa5cpnenc0oaml4ddbdc.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/exzqtgn9mtj5dcdia1s4.jpg",
];
const LeftRightScroll = () => {
  const [tImg, setTimg] = useState([]);
  const [bImg, setBimg] = useState([]);

  useEffect(() => {
    setBimg(bottomVideos);
    setTimg(topVideos);
  });
  return (
    <div className="min-h-screen video-scroll text-white flex flex-col items-center justify-center gap-8 overflow-hidden py-20">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <Marquee speed={80} className="w-full">
            {tImg.map((url, index) => (
              <img
                key={`top-${index}`}
                src={url}
                className="h-48 w-72 object-cover rounded-lg mx-6"
                alt={`Concert ${index + 1}`}
                loading="lazy"
              />
            ))}
          </Marquee>
        </div>
      </div>

      <h1 className="text-6xl font-bold font-primaryBold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        VanityCard IN THE WILD
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <Marquee speed={80} direction="right" className="w-full">
            {bImg.map((url, index) => (
              <img
                key={`bottom-${index}`}
                src={url}
                className="h-48 w-72 object-cover rounded-lg mx-6"
                alt={`Concert ${index + 7}`}
                loading="lazy"
              />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default LeftRightScroll;
