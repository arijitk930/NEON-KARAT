/* import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";
import service from '../services/appwriteConfig';
function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit =async (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.password) {
            setError('All fields are required!');
            return;
        }
        await service.registerUser({...formData})
        
        // Clear the form
        setFormData({ name: '', email: '', password: '' });
        setError('');
       // navigate('/login');
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
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                            className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;
 */

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../assets/vanitylogos/bg2 ei_1730790038728-removebg-preview.png";
import service from '../services/appwriteConfig';

function RegisterPage() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

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

        try {
            const user = await service.registerUser({ ...formData });
            if (user) {
                showModalMessage('Registration successful! Please check your email to verify your account.');
                setFormData({ name: '', email: '', password: '' });
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect after 3 seconds
            }
        } catch (err) {
            showModalMessage('Registration failed. Please try again.');
            console.error('Registration error:', err);
        }
    };
    const handleGoogleSignIn = () => {
        service.account.createOAuth2Session('google')
            .then(() => {
                showModalMessage('Google Sign-In successful!');
                navigate('/dashboard'); // Redirect to your app's main page after login
            })
            .catch(err => {
                showModalMessage('Google Sign-In failed.');
                console.error('Google Sign-In error:', err);
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
                    <Link to="/" className="flex items-center text-2xl font-primaryBold text-gradient">
                        <img src={logo} alt="Logo" className="h-10 w-15 transform scale-150 -mr-2" />
                        <span>Anity Card</span>
                    </Link>
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
    if (!message) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-xl font-bold mb-4">Notification</h2>
                <p className="text-gray-700">{message}</p>
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

export {RegisterPage, Modal}