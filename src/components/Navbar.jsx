import React, { useState, useEffect } from "react";
import LOGO from "../assets/logo.png";

const Navbar = () => {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    "Golden Recipe Macaroni",
    "Golden Recipe Spaghetti", 
    "Golden Chat Masala",
    "Golden U-Shape Vermicelli",
    "Golden Classic Spaghetti",
    "Golden Classic Macaroni",
  ];

  return (
    <>
      {/* Amazing Navbar with Hero Section Background */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out overflow-visible ${
        scrolled 
          ? 'bg-gradient-to-br from-red-900/95 via-red-800/95 to-yellow-900/95 py-3' 
          : 'bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 py-4'
      }`}>
        {/* Amazing Background Elements - Same as Hero Section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-radial from-yellow-400/8 via-red-500/5 to-transparent rounded-full blur-2xl"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-yellow-900/20"></div>
          {/* Enhanced shadow effect for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10"></div>
        </div>

        {/* Removed Floating Elements section completely */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300">
              <div className="w-32 h-16 sm:w-40 sm:h-20">
                <img
                  src={LOGO}
                  alt="Golden Logo"
                  className="h-full w-full object-contain filter brightness-110"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <a 
                href="#" 
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              {/* Shop Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setShopOpen(true)}
                onMouseLeave={() => setShopOpen(false)}
              >
                <button className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 flex items-center space-x-1 relative">
                  <span>Shop</span>
                  <svg 
                    className={`w-4 h-4 transition-transform duration-300 ${
                      shopOpen ? 'rotate-180' : 'rotate-0'
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* Enhanced Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-72 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden transform transition-all duration-300 origin-top border border-yellow-400/20 ${
                  shopOpen 
                    ? 'opacity-100 scale-100 translate-y-0' 
                    : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
                }`}>
                  <div className="py-2">
                    {navItems.map((item, idx) => (
                      <a
                        key={idx}
                        href="#"
                        className="block px-6 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-red-50 hover:to-yellow-50 hover:text-red-600 transition-all duration-200 hover:translate-x-2 font-medium border-l-2 border-transparent hover:border-red-400"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group"
              >
                Bundles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#" 
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-yellow-300/30"
              >
                Become Partner
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-yellow-300 transition-all duration-300 p-2 hover:bg-white/10 rounded-lg backdrop-blur-sm"
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${
                    mobileMenuOpen ? 'rotate-90' : 'rotate-0'
                  }`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation with Smooth Animation */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden relative ${
          mobileMenuOpen 
            ? 'max-h-screen opacity-100 transform translate-y-0' 
            : 'max-h-0 opacity-0 transform -translate-y-4'
        }`}>
          {/* Mobile Menu Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/95 via-red-800/95 to-yellow-900/95 backdrop-blur-md"></div>
          
          {/* Mobile Menu Floating Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-1 h-1 bg-yellow-400/15 rounded-full animate-pulse"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          <div className="px-4 pt-4 pb-6 space-y-3 relative z-10">
            <a 
              href="#" 
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm"
            >
              Home
            </a>
            
            {/* Mobile Shop Section */}
            <div>
              <button 
                onClick={() => setShopOpen(!shopOpen)}
                className="flex items-center justify-between w-full text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm"
              >
                <span>Shop</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    shopOpen ? 'rotate-180' : 'rotate-0'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className={`transition-all duration-400 overflow-hidden ${
                shopOpen ? 'max-h-96 opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-2'
              }`}>
                <div className="pl-4 mt-2 space-y-2">
                  {navItems.map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block text-gray-200 hover:text-yellow-300 transition-all duration-300 py-1 text-sm hover:translate-x-1 transform hover:bg-white/5 rounded px-2 backdrop-blur-sm"
                      style={{ transitionDelay: `${idx * 50}ms` }}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <a 
              href="#" 
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm"
            >
              Bundles
            </a>
            
            <a 
              href="#" 
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm"
            >
              Contact Us
            </a>
            
            <a 
              href="#" 
              className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-4 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center mt-4 transform hover:scale-105 border border-yellow-300/30"
            >
              Become Partner
            </a>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20 sm:h-24"></div>
    </>
  );
};

export default Navbar;
