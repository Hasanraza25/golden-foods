"use client";
import { useState } from "react";
import PNG from "../assets/image.png";
import LOGO from "../assets/logo.png";

export default function Hero() {
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white flex flex-col">
      {/* Navbar */}
      <div className="flex items-center justify-between px-12 py-6 text-lg font-medium">
        {/* Logo */}
        <div className="w-40 h-20">
          <img
            src={LOGO}
            alt="Golden Logo"
            className="h-full object-contain drop-shadow-md"
          />
        </div>

        {/* Links */}
        <div className="flex items-center gap-8 relative">
          <a href="#" className="hover:text-yellow-300 transition">
            Home
          </a>

          {/* Shop Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <button className="focus:outline-none hover:text-yellow-300 transition">
              Shop ▾
            </button>
            {shopOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white text-red-700 rounded-xl shadow-xl w-64 overflow-hidden">
                <ul className="flex flex-col">
                  {[
                    "Golden Recipe Macaroni",
                    "Golden Recipe Spaghetti",
                    "Golden Chat Masala",
                    "Golden U-Shape Vermicelli",
                    "Golden Classic Spaghetti",
                    "Golden Classic Macaroni",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="px-4 py-3 hover:bg-yellow-200 cursor-pointer transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-yellow-300 transition">
            Bundles
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            Contact Us
          </a>
          <a
            href="#"
            className="hover:text-yellow-300 transition whitespace-nowrap"
          >
            Become our distribution partner
          </a>
        </div>
      </div>

      {/* Hero Content */}
      <div className="flex flex-1 items-center justify-between px-12">
        {/* Left Text */}
        <div className="max-w-xl">
          <h1 className="text-6xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Taste The <span className="text-yellow-300">Real Pasta</span>
          </h1>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            Fresh, authentic and delicious spaghetti, macaroni & pasta made with
            love for every home.
          </p>
          <button className="bg-yellow-400 text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition shadow-md">
            Shop Now
          </button>
        </div>

        {/* Right Side Image Slideshow Placeholder */}
        <div className="relative w-[400px] h-[400px] flex items-center justify-center rounded-2xl">
          <img src={PNG} className="absolute w-full h-full object-cover" />
        </div>
      </div>

      {/* ⚠️ Don't touch this */}
      <div className="h-1/2 absolute top-2/3 translate-x-3/5">
        <img src={PNG} alt="" />
      </div>
    </section>
  );
}
