import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud, ChevronDown, User, UserPlus, Key, LogOut } from 'lucide-react';

interface User {
  name: string;
  email: string;
}

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar = ({ user, onLogout }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative">
                <Cloud className="h-8 w-8 text-cyan-400 animate-pulse" />
                <div className="absolute inset-0 h-8 w-8 bg-cyan-400/20 rounded-full blur-md"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Matrix Clouds
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-6 flex items-baseline space-x-2 xl:space-x-4">
              {navLinks.map((link) => (
                link.href === '/' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                   onClick={handleHomeClick}
                    className="text-gray-300 hover:text-cyan-400 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ) : link.href === '/about' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-gray-300 hover:text-cyan-400 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 whitespace-nowrap"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-gray-300 hover:text-cyan-400 px-2 xl:px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gray-800/50 whitespace-nowrap"
                >
                  {link.name}
                </a>
                )
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-2 xl:space-x-3">
              <Link
                to="/services"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started
              </Link>
              
              {/* Account Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsAccountOpen(!isAccountOpen)}
                  className="text-gray-300 hover:text-cyan-400 px-3 xl:px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-gray-600 hover:border-cyan-400 flex items-center space-x-1 xl:space-x-2 whitespace-nowrap"
                >
                  <span className="hidden xl:inline">{user ? user.name : 'Account'}</span>
                  <span className="xl:hidden">{user ? user.name.split(' ')[0] : 'Account'}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isAccountOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {isAccountOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-gray-800/95 backdrop-blur-sm border border-gray-700 rounded-xl shadow-xl z-50">
                    <div className="py-2">
                      {user ? (
                        <>
                          <div className="px-4 py-3 border-b border-gray-700">
                            <p className="text-sm text-gray-300">{user.email}</p>
                          </div>
                          <button
                            onClick={() => {
                              onLogout();
                              setIsAccountOpen(false);
                            }}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-gray-700/50 transition-all duration-300 w-full text-left"
                          >
                            <LogOut className="h-4 w-4" />
                            <span>Logout</span>
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300"
                            onClick={() => setIsAccountOpen(false)}
                          >
                            <User className="h-4 w-4" />
                            <span>Login</span>
                          </Link>
                          <Link
                            to="/login"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300"
                            onClick={() => setIsAccountOpen(false)}
                          >
                            <UserPlus className="h-4 w-4" />
                            <span>Register</span>
                          </Link>
                          <a
                            href="#"
                            className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-700/50 transition-all duration-300"
                            onClick={() => setIsAccountOpen(false)}
                          >
                            <Key className="h-4 w-4" />
                            <span>Forgot Password?</span>
                          </a>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Close dropdown when clicking outside */}
      {isAccountOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsAccountOpen(false)}
        ></div>
      )}

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/95 backdrop-blur-md">
            {navLinks.map((link) => (
              link.href === '/' ? (
                <Link
                  key={link.name}
                  to={link.href}
                 onClick={handleHomeClick}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : link.href === '/about' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
              )
            ))}
            {!user && (
              <Link
                to="/login"
                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            )}
            {user && (
              <button
                onClick={() => {
                  onLogout();
                  setIsOpen(false);
                }}
                className="text-gray-300 hover:text-red-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 w-full text-left"
              >
                Logout ({user.name})
              </button>
            )}
            <Link
              to="/services"
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 block text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;