import React, { useState } from 'react';
import { Client, Account } from 'appwrite';
import { useNavigate, useSearchParams } from 'react-router-dom';
import service from '../services/appwriteConfig';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const nav=useNavigate()
  const [searchParams] = useSearchParams();
  const userId = searchParams.get('userId');
  const secret = searchParams.get('secret');

  const handleResetPassword = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    try {
      // Complete the password reset
      await service.account.updateRecovery(userId, secret, password, confirmPassword);
      setMessage('Password reset successful. You can now log in.');
      
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to reset password.');
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        {message && <p className="text-green-600 text-center mb-4">{message}</p>}
        {error && <p className="text-red-600 text-center mb-4">{error}</p>}
        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className="w-full p-3 border rounded-lg mb-4"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button
          onClick={handleResetPassword}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
