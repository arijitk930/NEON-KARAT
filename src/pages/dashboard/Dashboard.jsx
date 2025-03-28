const Dashboard = () => {
  return (
    <div className="ml-64 p-4">
      {" "}
      {/* Add left margin to make room for Sidebar */}
      {/* Card Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-8 shadow">
        <h3 className="text-xl font-semibold mb-4">You are nearly there</h3>
        <p>
          Finish your application to see if you qualify for the Vanity card and
          access:
        </p>
        <ul className="list-disc list-inside ml-4 my-4">
          <li>Creator community and events</li>
          <li>Unique rewards, like a NYC Times Square Billboard</li>
          <li>Metal card with your logo engraved</li>
        </ul>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Continue Application
        </button>
      </div>
      {/* Next Steps Section */}
      <div className="bg-gray-50 p-6 rounded-lg shadow">
        <h4 className="text-lg font-semibold mb-2">Next Steps</h4>
        <p>
          You have applied for the Vanity card! We will review your application
          and provide an update in the next 7 business days.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
