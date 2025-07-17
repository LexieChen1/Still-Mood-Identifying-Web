import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/background.jpg"

const emotions = ['Happy', 'Sad', 'Anxious', 'Tired', 'Excited', 'Angry'];

export default function Landing() {
  const navigate = useNavigate();

  const handleSelect = (emotion) => {
    navigate('/reason', { state: { emotion } });
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-white text-white px-4 bg-cover bg-no-repeat bg-center"
    style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center text-center">
        <h1 className="text-7xl font-poiret font-extrabold mb-8">I am feeling</h1>
        <div className="flex flex-wrap justify-center gap-4 max-w-md">
          {emotions.map((e) => (
            <button
              key={e}
              onClick={() => handleSelect(e)}
              className="px-6 py-2 rounded-full border border-gray-300 text-gray-700 bg-white shadow-sm hover:bg-gray-100 hover:shadow-md transition duration-200 hover:scale-105 cursor-pointer font-serif font-medium"
            >
              {e}
            </button>
            
          ))}
        </div>
      </div>
    </div>
    
  );
}
