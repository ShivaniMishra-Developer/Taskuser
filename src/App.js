import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import ForgotPassword from './Components/ForgotPassword';
import Signup from './Components/Signup';
import Footer from './Components/Footer';
import Hero from './Components/Hero';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

const AppLayout = () => {
  const location = useLocation();
  const showHeader = !['/Login', '/forgot-password', '/Signup'].includes(location.pathname);

  return (
    <div className="App">
      {showHeader && <Header />}
      {showHeader && <Hero />}
      <div className="Content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
      {showHeader && <Footer />}
    </div>
  );
}

export default App;
