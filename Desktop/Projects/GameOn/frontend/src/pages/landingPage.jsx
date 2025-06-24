import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-white via-indigo-50 to-white text-gray-900 font-poppins">
      {/* Navbar */}
      <nav className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight">GameOn</h1>
          <div className="space-x-4">
            <button
              className="text-gray-700 hover:text-black font-medium transition"
              onClick={() => navigate('/login')}
            >
              Log in
            </button>
            <button
              className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition font-medium"
              onClick={() => navigate('/signup')}
            >
              Sign up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-40 pb-20 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
          Effortless <span className="bg-indigo-100 px-2 rounded">Trip Splitting</span>
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Split group expenses, track balances, and settle up with friends. Minimal effort, maximum clarity.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 hover:scale-105 transition inline-flex items-center justify-center text-base font-medium">
            <FaGoogle className="w-5 h-5 mr-2" /> Sign up with Google
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 hover:scale-105 transition inline-flex items-center justify-center text-base font-medium">
            <MdEmail className="w-5 h-5 mr-2" /> Sign up with Email
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-xl shadow hover:bg-gray-800 hover:scale-105 transition inline-flex items-center justify-center text-base font-medium">
            <FaGithub className="w-5 h-5 mr-2" /> Sign up with GitHub
          </button>
        </div>

        <p className="text-sm text-gray-500 mb-8">
          Already have an account?{' '}
          <span
            className="underline cursor-pointer hover:text-black"
            onClick={() => navigate('/login')}
          >
            Log in
          </span>
        </p>

        <button
          className="text-indigo-600 bg-indigo-50 px-6 py-3 rounded-xl text-sm font-semibold hover:bg-indigo-100 hover:scale-105 transition"
          onClick={() => navigate('/quick-calculate')}
        >
          💡 Quick Calculate
        </button>
      </main>

      {/* Preview Image */}
      <div className="w-full flex justify-center pb-24 px-4">
        <img
          src="https://raw.githubusercontent.com/lexiechen1/assets/main/gameon-demo.png"
          alt="GameOn Demo Preview"
          className="w-full max-w-4xl rounded-2xl shadow-2xl"
        />
      </div>
    </div>
  );
}
