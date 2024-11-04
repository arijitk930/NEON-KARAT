import { FaInstagram, FaTiktok, FaYoutube, FaNewspaper } from "react-icons/fa";

const FollowUs = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[77rem] mx-auto px-6 md:px-10 py-10">
      {/* Follow Us Text */}
      <div className="flex items-center space-x-2 mb-6 md:mb-0">
        <span className="text-indigo-600 font-bold text-[36px] sm:text-[48px] md:text-[60px] font-primaryBold">
          FOLLOW
        </span>
        <span className="text-gray-900 font-bold text-[36px] sm:text-[48px] md:text-[60px] font-primaryBold">
          US
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex space-x-6 md:space-x-9 text-3xl sm:text-4xl md:text-5xl">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-purple-600"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-purple-600"
        >
          <FaTiktok />
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-purple-600"
        >
          <FaYoutube />
        </a>
        <a
          href="https://your-news-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-900 hover:text-purple-600"
        >
          <FaNewspaper />
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
