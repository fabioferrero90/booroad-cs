import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {isLoggedIn, setIsLoggedIn} = useDataContext();

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Accedi a BooRoad</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Accedi
          </button>
        </form>
        {isLoggedIn && <p className="mt-4 text-green-500 text-center">Login successful!</p>}
      </div>
    </div>
  );
};

export default LoginPage;