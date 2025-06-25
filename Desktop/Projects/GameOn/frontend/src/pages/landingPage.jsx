import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/background.jpg')] text-center flex flex-col justify-between font-sans">
      <header className="flex justify-between items-center p-3 bg-white bg-opacity-80 border-b-2 border-grey">
        <h1 className="text-xl font-mono">GameOn</h1>

        {/*nav bars */}
        <nav className="space-x-2">
          <Link
            to="/quick-split"
            className="bg-neutral-500 hover:bg-neutral-900 text-white font-mono py-1 px-2 rounded transition transform hover:scale-105"
          >
            Quick Split
          </Link>
          <Link
            to="/login"
            className="bg-neutral-500 hover:bg-neutral-900 text-white font-mono py-1 px-2 rounded transition transform hover:scale-105"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-neutral-500 hover:bg-neutral-900 text-white font-mono py-1 px-2 rounded transition transform hover:scale-105"
          >
            Sign Up
          </Link>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow px-4 bg-white bg-opacity-80">
      <p className="text-2xl font-medium font-mono text-black-600 mb-2">Your new financial agent</p>
        <p className="text-7xl font-medium font-mono text-black-600 mb-2">smart split for smart trips</p>
        <p className="text-gray-700 max-w-xl mb-6">
          GameOn helps you effortlessly split expenses, track balances, and stay friends after the trip ends.
        </p> 
        <Link to="/signup" className="text-blue-600 underline hover:text-yellow-800">Get Started</Link>
      </main>

      <footer className="text-center p-4 text-sm text-gray-500 bg-white bg-opacity-80">© 2025 GameOn. All rights reserved.</footer>
    </div>
  );
}
