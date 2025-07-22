
import { useEffect, useState } from 'react';
import axios from 'axios';

function Support() {
  const [lines, setLines] = useState([]);
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const fetchAdvice = async () => {
      const emotion = localStorage.getItem('emotion');
      const reason = localStorage.getItem('reason');
      const res = await axios.post('/api/chat', { emotion, reason });
      const adviceLines = res.data.message.split('\n').filter(l => l.trim() !== '');
      setLines(adviceLines);
    };
    fetchAdvice();
  }, []);

  useEffect(() => {
    if (index < lines.length) {
      const timer = setTimeout(() => setIndex(index + 1), 1500);
      return () => clearTimeout(timer);
    }
  }, [index, lines]);

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-white text-gray-800 text-lg font-medium flex-col space-y-4 text-center">
      {lines.slice(0, index).map((line, i) => (
        <p key={i} className="opacity-100 transition-opacity duration-500">{line}</p>
      ))}
    </div>
  );
}

export default Support;