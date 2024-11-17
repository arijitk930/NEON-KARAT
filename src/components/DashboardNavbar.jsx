import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 h-full border-r border-gray-300 flex flex-col">
      <div className="p-5 text-2xl font-bold">☰</div>
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
