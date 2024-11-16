import { useState } from "react";
import { useAuth } from "../../services/AppContext";

function ProfileInsights() {
  const [isConnected, setIsConnected] = useState(false);
  const { user } = useAuth();
  console.log(user);
  const handleConnectInstagram = () => {
    // Placeholder for connect Instagram functionality
    setIsConnected(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Profile Insights
        </h2>
        {!isConnected ? (
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-6">
              Connect your Instagram account to view analytics and insights.
            </p>
            <button
              onClick={handleConnectInstagram}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Connect Instagram
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-blue-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                <div className="h-4 bg-blue-200 rounded w-1/2"></div>
              </div>
            </div>
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-blue-200 h-12 w-12"></div>
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-blue-200 rounded w-2/3"></div>
                <div className="h-4 bg-blue-200 rounded w-1/3"></div>
              </div>
            </div>
            <div className="text-gray-500 italic">
              Placeholder data - replace with actual analytics once connected.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileInsights;
