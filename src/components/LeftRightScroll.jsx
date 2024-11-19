import { useMemo } from "react";
import Marquee from "react-fast-marquee";
import { modelImages } from "./data";

const topVideos = [
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/dyz5reebdq74vxqu3xsq.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805046/images/uh2lf5mwf3a2bnkikdb2.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805044/images/eh4alxdqdqlqgtl51atu.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ltean7wjzhrobm3ii2ak.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/ca5jrqtn7hyabavg68yg.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/cprnn758xh2futb5skz5.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/kfc5u2twe6nyobdmqh9q.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/txinllbh67wqveducklr.jpg",
  "http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/sfcstmoh7ktuj9jv6tgw.jpg",
];

const LeftRightScroll = () => {
  // Optimize image URLs using Cloudinary transformations
  const optimizedTopVideos = useMemo(
    () =>
      topVideos.map((url) => url.replace("/upload/", "/upload/q_auto,f_auto/")),
    []
  );
  const optimizedBottomVideos = useMemo(
    () =>
      modelImages.map((url) =>
        url.replace("/upload/", "/upload/q_auto,f_auto/")
      ),
    []
  );

  return (
    <div className="min-h-screen video-scroll text-white flex flex-col items-center justify-center gap-8 overflow-hidden py-20">
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <Marquee speed={30} className="w-full">
            {/* Reduced speed */}
            {optimizedTopVideos.map((url, index) => (
              <img
                key={`top-${index}`}
                src={url}
                className="h-48 w-72 object-cover rounded-lg mx-6 opacity-65"
                alt={`Concert ${index + 1}`}
                loading="lazy"
              />
            ))}
          </Marquee>
        </div>
      </div>

      <h1 className="text-6xl font-bold font-primaryBold custom-stroke bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block">
        VanityCard IN THE WILD
      </h1>

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <Marquee speed={30} direction="right" className="w-full">
            {/* Reduced speed */}
            {optimizedBottomVideos.map((url, index) => (
              <img
                key={`bottom-${index}`}
                src={url}
                className="h-48 w-72 object-cover rounded-lg mx-6 opacity-65"
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
