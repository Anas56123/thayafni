"use client"
import DarkModeBtn from '@/Components/DarkModeBtn';
import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-500 dark:bg-gray-800">
      <div className="max-w-md w-full p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-black dark:text-white">Login</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold dark:text-gray-200">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-semibold dark:text-gray-200">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-4 py-2 block w-full rounded border border-gray-300 dark:border-gray-600 focus:ring-green-500 focus:border-green-500 dark:bg-gray-600 dark:text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            Login
          </button>
        </form>
        <DarkModeBtn type='text' />
      </div>
    </div>
  );
};

export default LoginPage;
