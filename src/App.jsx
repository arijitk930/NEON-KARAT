import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Outlet, useNavigate } from "react-router-dom";
import FollowUs from "./components/FollowUs";
import BottomSection from "./components/BottomSection";
import ScrollToTop from "./components/ScrollToTop";
import service from "./services/appwriteConfig";
import { useEffect, useState } from "react";
import { useAuth, UserContextProvider } from "./services/AppContext";
import Dashboard from "./pages/dashboard/Dashboard";
import Sidebar from "./components/DashboardNavbar";
import TopBar from "./components/DashboardTopBar";

function App() {
  const content1 = [
    {
      title: "Insights",
      subtitle: "",
      highlighted: "Make",
      normal: " more money",
      description:
        "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "See",
      normal: " how you compare",
      description:
        "Compare your performance with creators in your niche and identify opportunities for growth.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/600x400/000000/FFFFFF.png`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Understand",
      normal: " your business",
      description:
        "Get detailed insights into your revenue streams and audience engagement metrics.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ];
  const [user, setUser] = useState(null)
  const [authStatus, setAuthStatus] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const login = (userDetail) => {
    setUser(userDetail)
    setAuthStatus(true)
  }
  const logout = () => {
    setAuthStatus(false)
    setUser(null)
  }
  const loginContext = async () => {
    try {
      const res = await service.account.get()
      if (res) {
        login(res)
        setLoading(false)
        navigate("/dashboard")
      }
      else
        logout()
    } catch (error) {
      navigate("/")
      //console.log("loginContext", error)
    }
  }
  useEffect(() => {
    loginContext()
    setLoading(false)
  }, [])


  return (
    <ScrollToTop>
      {
        authStatus === true ? (
          <UserContextProvider value={{ user, authStatus, login, logout }}>


            <div className="flex h-screen">
              {/* Sidebar */}
              <Sidebar />

              {/* Main content area */}
              <div className="flex-1 p-8">
                {/* Top Bar */}
                <TopBar userName={user.name} userInitials={user.name.split(' ').map(word => word[0].toUpperCase()).join('')} />

                {/* Dashboard content */}
                <Outlet />
              </div>
            </div>


          </UserContextProvider>) :
          (<div className="App min-h-screen bg-pastel-gradient bg-cover">

            <Navbar />
            <Outlet />
            <BottomSection />
            <FollowUs />
            <Footer />
          </div >)
      }
    </ScrollToTop>


  );
}

export default App;
