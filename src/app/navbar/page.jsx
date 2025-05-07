"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full">
      <nav className="w-full bg-white px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center mr-2">
            <span className="text-purple-600 text-lg font-bold font-[var(--content-font-family)]">?</span>
          </div>
          <span className="text-purple-600 text-xl font-semibold font-[var(--content-font-family)] text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)]">
            Backpack
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#hero" className="{navLinkClass} text-gray-700 hover:text-purple-600 transition text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
            About
          </a>
          <a href="#features" onClick={toggleMenu} className="text-gray-700 hover:text-purple-600 transition text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
            Features
          </a>
          <a href="#meetEmmo" className="text-gray-700 hover:text-purple-600 transition text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
            Meet Emmo
          </a>
          <a href="#contact" className="text-gray-700 hover:text-purple-600 transition text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
            Contact
          </a>
        </div>

        {/* Join Waitlist Button */}
        <a href="mailto:abc@gmail.com" className="hidden md:block bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition font-[var(--content-font-family)] text-[var(--button-font-size)]">
          Join Waitlist
        </a>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-md py-3 z-20 absolute">
          <div className="flex flex-col space-y-3 px-6">
            <a href="#hero" onClick={toggleMenu} className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100 text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
              About
            </a>
            <a href="#features" onClick={toggleMenu} className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100 text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
              Features
            </a>
            <a href="#meetEmmo" onClick={toggleMenu} className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100 text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
              Meet Emmo
            </a>
            <a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-purple-600 transition py-2 border-b border-gray-100 text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]">
              Contact
            </a>
            <div className="py-3">
              <a href="mailto:abc@gmail.com" className="bg-purple-600 text-white px-4 py-2 rounded-full font-medium hover:bg-purple-700 transition w-full font-[var(--content-font-family)] text-[var(--button-font-size)]">
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
