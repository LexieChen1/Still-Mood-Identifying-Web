
// src/pages/Reason.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const { emotion } = location.state || {};

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-black px-4">
      <h2 className="text-xl mb-2">You’re feeling <span className="font-semibold">{emotion}</span></h2>
      <p className="mb-4">I am feeling this because…</p>
      <textarea
        rows="5"
        className="w-full max-w-md p-4 border border-gray-300 rounded-md focus:outline-none focus:ring"
        placeholder="Type your reason here..."
      ></textarea>
      <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
        Submit
      </button>
    </div>
  );
}
