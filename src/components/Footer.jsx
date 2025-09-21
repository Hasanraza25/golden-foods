import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaArrowUp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 text-white pt-16 pb-6">
      {/* Background Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 border-b border-yellow-300/20 pb-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-yellow-300 mb-6">
              Golden Pvt Ltd
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Leading manufacturer of premium quality pasta and food products since 1999. 
              Committed to excellence, innovation, and customer satisfaction.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Head Office:</p>
                  <p className="text-sm text-gray-200">
                    58-59, Triangle Industrial Estate,<br />
                    Kahuta Road, Islamabad-47500, Pakistan
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-white">Branch Office:</p>
                  <p className="text-sm text-gray-200">
                    J-6A, Al-Azam Square, F.B. Area,<br />
                    Karachi, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Phone:</p>
                  <a href="tel:+92-51-4491203" className="text-sm text-gray-200 hover:text-yellow-300 transition-colors">
                    92-51-4491203-4
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Fax:</p>
                  <p className="text-sm text-gray-200">92-51-4491205</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-300 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium">Email:</p>
                  <a 
                    href="mailto:info@golden.com.pk" 
                    className="text-sm text-gray-200 hover:text-yellow-300 transition-colors"
                  >
                    info@golden.com.pk
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a
                  href="#about"
                  className="text-sm hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-sm hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="text-sm hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>

            {/* Social Media */}
            <div>
              <h4 className="text-sm font-semibold text-yellow-300 mb-4">
                Follow Us
              </h4>
              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/share/15psivZqDg/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/goldenmacaroni_official?igsh=MTA0Mm12c3IwOXh4Nw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.tiktok.com/@goldenmacaronipk?_t=ZS-8txtPGfS8IR&_r=1s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300 hover:scale-110"
                >
                  <FaTiktok />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-300">
                © {new Date().getFullYear()} Golden Pvt Ltd. All Rights Reserved.
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Established 1999 | Premium Quality Food Products
              </p>
            </div>
            
            <div className="flex items-center space-x-6 text-xs text-gray-400">
              <a href="#terms" className="hover:text-yellow-300 transition-colors">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#privacy" className="hover:text-yellow-300 transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#cookies" className="hover:text-yellow-300 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-yellow-400 text-red-900 shadow-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
