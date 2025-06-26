import LandingPage from './pages/landingPage.jsx';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Signup from './pages/signupPage.jsx';
import Dashboard from './pages/dashboardPage.jsx';
import AddEventPage from './pages/addEventPage.jsx';
import Layout from "./components/ui/layout.jsx"; 
import Login from "./pages/loginPage.jsx"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App()
{
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route element={<Layout />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addEvent" element={<AddEventPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
    
  );
}

export default App; 
