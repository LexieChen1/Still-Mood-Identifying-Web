// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Details from './pages/Details';
import Support from "./pages/Support";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/details" element={<Details />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}