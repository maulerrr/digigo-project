import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const AuthPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    
    try {
      const response = await axiosInstance.post(endpoint, { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user.id);
        navigate('/products'); // Redirect to products page after login
      }
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            color='white'
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded  text-white"
            required
          />
          <input
            type="password"
            color='white'
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border rounded text-white"
            required
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <button
          onClick={() => setIsLogin(!isLogin)}
          className="text-sm text-blue-500 mt-4 underline"
        >
          {isLogin ? 'Create an account' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
