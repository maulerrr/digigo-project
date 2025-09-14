import React, { useState } from 'react';
import axiosInstance from '../api/axiosInstance';

interface AuthFormProps {
  type: 'login' | 'register';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(`/auth/${type}`, { email, password });
      localStorage.setItem('token', response.data.token);
      alert(`${type === 'login' ? 'Logged in' : 'Registered'} successfully!`);
      window.location.href = '/products'; // Redirect to products page
    } catch (error) {
      console.error(`Error during ${type}:`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">{type === 'login' ? 'Login' : 'Register'}</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 mb-4 border rounded w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 mb-4 border rounded w-full"
      />
      <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};

export default AuthForm;
