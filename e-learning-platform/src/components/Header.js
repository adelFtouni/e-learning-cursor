import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">WebLearn</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#courses" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Courses
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors">
              Login
            </button>
            <button className="btn-primary">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a href="#home" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#courses" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Courses
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium">
                Contact
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <button className="text-gray-700 hover:text-primary-600 px-3 py-2 text-sm font-medium text-left">
                  Login
                </button>
                <button className="btn-primary text-center">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;