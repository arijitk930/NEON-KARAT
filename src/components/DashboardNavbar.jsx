import { Link } from "react-router-dom";
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-screen border-r border-gray-300 flex flex-col fixed top-0 left-0">
      <div className="flex justify-center my-6">
        <Link
          to="/dashboard"
          className="flex items-center text-2xl font-primaryBold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text fade-in-scale"
        >
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-15 transform scale-150 -mr-2 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-6"
          />
          <span className="transition-transform duration-300 ease-in-out bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block">
            anity Card
          </span>
        </Link>
      </div>
      <nav className="flex flex-col space-y-2 p-5">
        <Link to="/dashboard" className="p-3 rounded hover:bg-gray-200">
          Home
        </Link>
        <Link to="/profileInsights" className="p-3 rounded hover:bg-gray-200">
          Insights
        </Link>
        {/* <Link to="#" className="p-3 rounded hover:bg-gray-200">
          Referrals
        </Link>
        <Link to="#" className="p-3 rounded hover:bg-gray-200">
          Settings
        </Link>
        <Link to="#" className="p-3 rounded hover:bg-gray-200">
          Account Details
        </Link> */}
      </nav>
    </div>
  );
};

export default Sidebar;
