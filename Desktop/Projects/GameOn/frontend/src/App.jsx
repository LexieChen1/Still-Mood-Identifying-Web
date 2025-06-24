import LandingPage from './pages/landingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import React from 'react';


function App()
{
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
}

export default App; 
