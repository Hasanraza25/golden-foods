import React, { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTiktok, FaArrowUp } from "react-icons/fa";

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
    <footer className="relative bg-gradient-to-br from-red-900 via-red-800 to-yellow-900 text-white pt-12 pb-6">
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-yellow-300/20 pb-10">
          {/* Order Info */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Order Info
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Return & Exchange
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Return & Exchange Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-300 transition-all duration-300 hover:translate-x-1 block"
                >
                  Terms of Services
                </a>
              </li>
            </ul>
          </div>

          {/* Chat with Us */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Chat with Us
            </h3>
            <p className="text-sm">Monday - Saturday: 10am - 7pm PST</p>
            <p className="text-sm mt-2">
              Call Us at: <span className="font-semibold">+92 3310444970</span>
            </p>
            <p className="text-sm mt-2">
              Customer Support:{" "}
              <a
                href="mailto:info.goldenpvtltd@gmail.com"
                className="text-yellow-300 hover:underline"
              >
                info.goldenpvtltd@gmail.com
              </a>
            </p>
            <p className="text-sm mt-2">
              Business Queries:{" "}
              <a
                href="mailto:info.goldenpvtltd@gmail.com"
                className="text-yellow-300 hover:underline"
              >
                info.goldenpvtltd@gmail.com
              </a>
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-300 mb-4">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/15psivZqDg/?mibextid=wwXIfr"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/goldenmacaroni_official?igsh=MTA0Mm12c3IwOXh4Nw=="
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@goldenmacaronipk?_t=ZS-8txtPGfS8IR&_r=1s"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-red-900 transition-all duration-300"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-300">
          © {new Date().getFullYear()} Golden Pvt Ltd. All Rights Reserved.
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-yellow-400 text-red-900 shadow-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
