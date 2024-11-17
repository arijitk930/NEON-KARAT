import { useState, useEffect } from "react";
import { useAuth } from "../../services/AppContext";
import service from "../../services/appwriteConfig";
import { Modal } from "../RegisterPage";

function ProfileInsights({ createInstagram, getInstaData }) {
  const [isConnected, setIsConnected] = useState(false);
  const [analytics, setAnalytics] = useState(null);
  const [instaId, setInstaId] = useState("");
  const [followersCount, setFollowersCount] = useState(0);
  const [postsCount, setPostsCount] = useState(0);
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState(false);
  const handleConnectInstagram = async () => {
    try {
      // If Instagram is not connected, use the provided input values
      const id = instaId  // Fallback to mock if empty
      const followers = followersCount  // Fallback to mock if empty
      const posts = postsCount  // Fallback to mock if empty
      showModalMessage(null)
      // Save Instagram data
      await service.createInstagram(user.$id, id, new Number(followers), new Number(posts));
      closeModal();
      // Fetch and display Instagram analytics
      await fetchAnalytics();
      setIsConnected(true);
    } catch (error) {
      setIsConnected(false);
      setAnalytics(null);
    }
  };

  const fetchAnalytics = async () => {
    try {
      showModalMessage(null)
      const data = await service.getInstaData(user.$id);
      closeModal()
      setAnalytics(data);
      setIsConnected(true);
    } catch (error) {
      closeModal();
      setIsConnected(false);
      setAnalytics(null);
    }
  };
  const showModalMessage = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage(null);
  };
  useEffect(() => {
    if (!isConnected)
      fetchAnalytics();
  }, [isConnected, analytics]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Profile Insights
        </h2>
        {!analytics && !isConnected ? (
          <div className="flex flex-col items-center">
            <p className="text-gray-600 mb-6">
              Connect your Instagram account to view analytics and insights.
            </p>
            <div className="space-y-4 mb-6">
              <label className="block text-gray-700">Instagram Id</label>
              <input
                type="text"
                placeholder="Instagram Account ID"
                value={instaId}
                onChange={(e) => setInstaId(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-gray-700">Followers Count</label>
              <input
                type="number"
                placeholder="Followers Count"
                value={followersCount}
                onChange={(e) => setFollowersCount(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label className="block text-gray-700">Posts Count</label>
              <input
                type="number"
                placeholder="Posts Count"
                value={postsCount}
                onChange={(e) => setPostsCount(e.target.value)}
                className="px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              onClick={handleConnectInstagram}
              className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
            >
              Connect Instagram
            </button>
          </div>
        ) : isConnected && analytics && analytics.length > 0 ? (
          <div className="space-y-4">
            {analytics.map((data, index) => (
              <div key={index} className="flex flex-col items-start">
                <h3 className="text-lg font-medium text-blue-500 mb-2">
                  Instagram Account: {data.instaId}
                </h3>
                <p className="text-gray-700">
                  Followers: {data["followers-count"]}
                </p>
                <p className="text-gray-700">Posts: {data["posts-count"]}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No analytics data available.</p>
        )}
      </div>
      {showModal && (
        <Modal message={modalMessage} onClose={closeModal} />
      )}
    </div>
  );
}

export default ProfileInsights;
