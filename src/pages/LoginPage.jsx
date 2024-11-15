import React, { useState } from "react";
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";
import google from "../assets/google.jpg";
import { Link } from "react-router-dom";
import service from "../services/appwriteConfig";
import { Modal } from "./RegisterPage";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const showModalMessage = (message) => {
    setModalMessage(message);
    setShowModal(true);
  };
  const handleGoogleSignIn = async () => {
    await service.account
      .createOAuth2Session(
        "google",
        "http://localhost:5173",
        "http://localhost:5173/login"
      )
      .then(() => {
        console.log("Google Sign-In successful!");
        navigate("/"); // Redirect to your app's main page after login
      })
      .catch((err) => {
        showModalMessage("Google Sign-In failed.");
        console.error("Google Sign-In error:", err);
      });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.email || !formData.password) {
      showModalMessage("All fields are required!");
      return;
    }

    try {
      const user = await service.loginUser(formData.email, formData.password);
      if (user) {
        showModalMessage(
          "Registration successful! Please check your email to verify your account."
        );
        setFormData({ name: "", email: "", password: "" });
        setTimeout(() => {
          navigate("/login");
        }, 3000); // Redirect after 3 seconds
      }
    } catch (err) {
      showModalMessage("Registration failed. Please try again.");
      console.error("Registration error:", err);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <div className="flex justify-center mb-6">
          <Link
            to="/"
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
        <h2 className="text-2xl font-semibold text-center mb-6">
          Welcome back
        </h2>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg flex items-center justify-center mb-4"
        >
          <img src={google} alt="Google" className="w-5 h-5 mr-2" />
          Continue with Google
        </button>

        <div className="flex items-center my-4">
          <hr className="w-full border-gray-300" />
          <span className="px-3 text-gray-500">OR</span>
          <hr className="w-full border-gray-300" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <a href="#" className="text-blue-500 hover:underline text-sm">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
