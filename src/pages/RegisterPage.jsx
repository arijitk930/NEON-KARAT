import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";
import service from '../services/appwriteConfig';
import google from "../assets/google.jpg";
import { useAuth } from '../services/AppContext';

function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();
    const { login, logout } = useAuth()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.password) {
            showModalMessage('All fields are required!');
            return;
        }
        else if (formData.password.length < 8) {
            showModalMessage('Password must be of length 8 or more');
            return;
        }

        try {
            const user = await service.registerUser({ ...formData });
            if (user) {
                showModalMessage('Registration successful! Please check your email to verify your account.');

                setTimeout(() => {
                    closeModal()
                    service.loginUser(formData.email, formData.password);
                    setFormData({ name: '', email: '', password: '' });
                    login(user);
                    window.location.reload()
                }, 3000); // Redirect after 3 seconds

            }
        } catch (err) {
            showModalMessage('Registration failed. Please try again. Reason may be duplicate email id or commonly used passwords');
            setFormData({ name: '', email: '', password: '' });
        }
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
    const showModalMessage = (message) => {
        setModalMessage(message);
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setModalMessage('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
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
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                        <label >Password must be of length 8 or more</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>

            {/* Modal to show messages */}
            {showModal && (
                <Modal message={modalMessage} onClose={closeModal} />
            )}
        </div>
    );
}

const Modal = ({ message, onClose }) => {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Notification</h2>
                {message != null ? <p className="text-gray-700">{message}</p> : (<div>
                    <div class="flex items-center space-x-2">

                        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>

                        <span className="text-gray-700 font-semibold">Loading...</span>
                    </div>
                </div>)}
                <button
                    onClick={onClose}
                    className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export { RegisterPage, Modal }