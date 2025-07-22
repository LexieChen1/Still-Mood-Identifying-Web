
// src/pages/Reason.jsx
import React, { useState } from "react";
import { useLocation, useNavigate} from 'react-router-dom';

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();
  const { emotion } = location.state || {};
  const [reason, setReason] = useState('');

  const handleSubmit = () => {
    const entry = { emotion, reason, timestamp: Date.now() };
    localStorage.setItem('emotionEntry', JSON.stringify(entry));
    navigate('/support', { state: { emotion, reason } }); // or whatever your next page is
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-white text-black px-4">
      <h2 className="text-xl mb-4">
        I am feeling <span className="font-poiret">{emotion}</span> because
      </h2>
      <textarea
        rows="5"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        className="w-full max-w-md p-4 border border-gray-300 rounded-md focus:outline-none focus:ring"
        placeholder="Type your reason here..."
      />
      <button
        onClick={handleSubmit}
        className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
      >
        Submit
      </button>

      <button
        onClick={handleSubmit}
        className="mt-2 text-sm text-gray-500 italic underline"
      >
        Skip
      </button>
    </div>
  );
}