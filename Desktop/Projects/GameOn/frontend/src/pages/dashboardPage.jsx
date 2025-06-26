import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../auth/firebase"; 

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleAddEvent = () => {
    navigate("/addEvent");
  };

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/assets/background.jpg')] text-center font-sans">
      {/* Overlay for consistent opacity */}
      <div className="absolute inset-0 bg-white bg-opacity-70 backdrop-blur-sm z-0" />

      {/* Content on top */}
      <div className="relative z-10 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Current Balance */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-2">Current Money Owed</h2>
            <p className="text-2xl font-bold text-green-700">$35.20</p>
          </div>

          {/* Card 2: People Who Owe You */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-2">People Who Owe You</h2>
            <ul className="text-gray-700">
              <li>Alice — $10</li>
              <li>Bob — $25.20</li>
            </ul>
          </div>

          {/* Card 3: Past Trips */}
          <div className="bg-white shadow-md rounded-xl p-5">
            <h2 className="text-lg font-semibold mb-2">Past Trips</h2>
            <ul className="text-gray-700">
              <li>NYC Getaway — Mar 2025</li>
              <li>Beach Trip — Jan 2025</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}