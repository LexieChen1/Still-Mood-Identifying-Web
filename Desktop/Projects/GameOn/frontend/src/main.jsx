import React from 'react';
import ReactDOM from 'react-dom/client';
import UserRegistration from './App.jsx'; // or './App' if no .jsx extension
import './index.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserRegistration />
  </React.StrictMode>
);