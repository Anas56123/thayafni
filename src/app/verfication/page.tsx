'use client'
import DarkModeBtn from '@/Components/DarkModeBtn';
import { useState } from 'react';

const VerificationPage = () => {
  const [code, setCode] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
  };

  const handleVerify = () => {
    if (code === localStorage.getItem('code')) {
      setVerificationResult('Verification successful!');
    } else {
      setVerificationResult('Verification failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex justify-center items-center">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-96 overflow-hidden">
        <h1 className="text-2xl font-bold mb-4">Code Verification for {localStorage.getItem('email')}</h1>
        <input
          type="text"
          value={code}
          onChange={handleChange}
          placeholder="Enter verification code"
          className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 w-full mb-4 dark:bg-gray-700 dark:text-white"
        />
        <button
          onClick={handleVerify}
          className="bg-green-500 dark:bg-green-600 text-white py-2 px-4 rounded-md w-full hover:bg-green-600"
        >
          Verify
        </button>
        <DarkModeBtn type='text' />
        {verificationResult && (
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">{verificationResult}</p>
        )}
      </div>
    </div>
  );
};

export default VerificationPage;
