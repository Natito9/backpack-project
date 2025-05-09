"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <nav className="w-full bg-background px-6 py-4 flex items-center justify-between shadow-sm">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-main flex items-center justify-center mr-2">
            <span className="text-[var(--text-color)] text-lg font-bold font-content">
              ?
            </span>
          </div>
          <span className="text-[var(--text-color)] text-xl font-semibold font-content text-navbar leading-navbar">
            Backpack
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {["about", "features", "emmo", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-[var(--text-color)] hover:text-main transition font-content text-navbar leading-navbar"
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="#waitlist"
          className="hidden md:inline-block bg-main text-[var(--text-color)] px-6 py-2 rounded-full font-medium hover:bg-[#cceaea] transition font-content text-button"
        >
          Join Waitlist
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--text-color)] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-background shadow-md py-3 z-20 absolute">
          <div className="flex flex-col space-y-3 px-6">
            {["about", "features", "emmo", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-[var(--text-color)] hover:text-main transition py-2 border-b border-gray-100 text-navbar leading-navbar font-content"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </a>
            ))}
            <div className="py-3">
              <a href="#waitlist">
                <button className="bg-main text-[var(--text-color)] px-4 py-2 rounded-full font-medium transition w-full font-content text-button hover:bg-[#cceaea]">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 z-50 bg-main text-[var(--text-color)] p-3 rounded-full shadow-md hover:bg-[#cceaea] transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </div>
  );
}
