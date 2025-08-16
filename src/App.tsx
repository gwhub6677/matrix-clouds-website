import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import ServicesCategory from './components/ServicesCategory';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

interface User {
  name: string;
  email: string;
}

function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  // Loading component
  const LoadingSpinner = () => (
    <div className="min-h-screen dotted-background flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>
  );

  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <div className="min-h-screen dotted-background">
          <Navbar user={user} onLogout={handleLogout} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/services" element={<ServicesCategory />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
          <Footer />
          <ThemeToggle />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;