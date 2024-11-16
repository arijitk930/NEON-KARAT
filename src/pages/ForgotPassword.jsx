import React, { useState } from 'react';
import service from '../services/appwriteConfig';


const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      // Request password recovery
      await service.account.createRecovery(
        email,
        'http://localhost:5173/reset-password' // The URL where the user will be redirected after email link
      );
      setMessage('Password reset email sent successfully.');
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to send password reset email.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <input
          type="email"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleForgotPassword}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Send Reset Link
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
