import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import './App.css'

function App() {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0cc8e9]">
      <div className="container w-[350px] p-6 bg-sky-400 rounded-lg shadow-gradient">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">
          Sign Up
        </h2>
        <form className="bg-white p-4 rounded-lg shadow-gradient">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-50 border-2 border-purple-400 rounded shadow-sm focus:outline-none focus:border-purple-600"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-50 border-2 border-purple-400 rounded shadow-sm focus:outline-none focus:border-purple-600"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 bg-gray-50 border-2 border-purple-400 rounded shadow-sm focus:outline-none focus:border-purple-600"
              type={showPass ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            {showPass ? (
              <IoMdEye
                onClick={handleShowPass}
                className="absolute top-[50%] right-3 translate-y-[50%] text-black cursor-pointer"
              />
            ) : (
              <IoMdEyeOff
                onClick={handleShowPass}
                className="absolute top-[50%] right-3 translate-y-[50%] text-black cursor-pointer"
              />
            )}
          </div>
          <button
            className="w-full py-2 mt-4 bg-purple-600 text-white font-semibold rounded shadow-md hover:bg-gradient-to-r from-purple-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-900 focus:ring-opacity-50"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
