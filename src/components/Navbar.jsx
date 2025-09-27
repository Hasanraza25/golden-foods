import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LOGO from "../assets/logo.png";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect with hide/show functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrolled = currentScrollY > 10;
      
      // Determine if navbar should be visible
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - hide navbar
        setNavVisible(false);
        setMobileMenuOpen(false); // Close mobile menu when hiding
      }
      
      setScrolled(isScrolled);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Helper function to check if route is active
  const isActiveRoute = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Amazing Navbar with Hero Section Background */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out overflow-visible ${
        navVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      } ${
        scrolled 
          ? 'bg-gradient-to-br from-red-900/95 via-red-800/95 to-yellow-900/95 py-3 backdrop-blur-md' 
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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div 
              className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => navigate('/')}
            >
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
              <button 
                onClick={() => navigate('/')}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group cursor-pointer ${
                  isActiveRoute('/') 
                    ? 'text-yellow-300' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 ${
                  isActiveRoute('/') 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>

              <button 
                onClick={() => navigate('/products')}
                className={`font-medium transition-all duration-300 hover:scale-105 relative group cursor-pointer ${
                  isActiveRoute('/products') 
                    ? 'text-yellow-300' 
                    : 'text-white hover:text-yellow-300'
                }`}
              >
                Products
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 ${
                  isActiveRoute('/products') 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>

              {/* Shop Link - Direct to external site */}
              <a 
                href="https://golden.com.pk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group cursor-pointer"
              >
                Shop
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a 
                href="#" 
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group cursor-pointer"
              >
                Bundles
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#" 
                className="text-white font-medium hover:text-yellow-300 transition-all duration-300 hover:scale-105 relative group cursor-pointer"
              >
                Contact Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <a 
                href="#" 
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-6 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 whitespace-nowrap border border-yellow-300/30 cursor-pointer"
              >
                Become Partner
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-white hover:text-yellow-300 transition-all duration-300 p-2 hover:bg-white/10 rounded-lg backdrop-blur-sm cursor-pointer"
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
            <button 
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className={`block font-medium transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm cursor-pointer w-full text-left ${
                isActiveRoute('/') 
                  ? 'text-yellow-300' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              Home
            </button>
            
            <button 
              onClick={() => {
                navigate('/products');
                setMobileMenuOpen(false);
              }}
              className={`block font-medium transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm cursor-pointer w-full text-left ${
                isActiveRoute('/products') 
                  ? 'text-yellow-300' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              Products
            </button>
            
            <a 
              href="https://golden.com.pk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm cursor-pointer"
            >
              Shop
            </a>
            
            <a 
              href="#" 
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm cursor-pointer"
            >
              Bundles
            </a>
            
            <a 
              href="#" 
              className="block text-white font-medium hover:text-yellow-300 transition-all duration-300 py-2 hover:translate-x-2 transform hover:bg-white/5 rounded-lg px-3 backdrop-blur-sm cursor-pointer"
            >
              Contact Us
            </a>
            
            <a 
              href="#" 
              className="block bg-gradient-to-r from-yellow-400 to-yellow-500 text-red-800 px-4 py-2 rounded-full font-semibold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 text-center mt-4 transform hover:scale-105 border border-yellow-300/30 cursor-pointer"
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
