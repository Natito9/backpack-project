"use client"

import React, { useState } from 'react';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="w-full bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
            <span className="text-purple-600 text-lg font-bold">?</span>
          </div>
          <span className="text-purple-600 text-xl font-semibold">Backpack</span>
        </div>
        
        {/* Navigation Links - Desktop (visible at 768px and above) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="/about" className="text-gray-700 hover:text-purple-600 transition text-sm">
            About
          </a>
          <a href="/features" className="text-gray-700 hover:text-purple-600 transition text-sm">
            Features
          </a>
          <a href="/meet-emmo" className="text-gray-700 hover:text-purple-600 transition text-sm">
            Meet Emmo
          </a>
          <a href="/contact" className="text-gray-700 hover:text-purple-600 transition text-sm">
            Contact
          </a>
        </div>
        
        {/* CTA Button - Desktop (visible at 768px and above) */}
        <button className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition">
          Join Waitlist
        </button>
        
        {/* Mobile Menu Button (visible below 768px) */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu (visible below 768px when menu is open) */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-md py-3 z-20 absolute">
          <div className="flex flex-col space-y-3 px-6">
            <a
              href="/about"
              className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              About
            </a>
            <a
              href="/features"
              className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="/meet-emmo"
              className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Meet Emmo
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100"
              onClick={toggleMenu}
            >
              Contact
            </a>
            <div className="py-3">
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 transition w-full">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}