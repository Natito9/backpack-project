"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ArrowUp } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full scroll-smooth">
      {/* Sticky Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="/#hero" className="flex items-center z-50">
            <Image
              src="/assets/images/hero-logo.png"
              alt="Backpack Studios logo"
              width={140}
              height={50}
              className="h-auto"
            />
          </a>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "features", "emmo", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-text-color hover:text-main transition font-content text-navbar leading-navbar"
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <a href="#waitlist" className="hidden md:inline-block">
            <button className="bg-[#e4f4f2] text-text-color px-4 py-2 rounded-full font-medium transition font-content text-button hover:bg-[#cceaea]">
              Join Waitlist
            </button>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-color z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-white/60 pt-20 pb-2 px-6 shadow-md md:hidden">
          <div className="flex flex-col space-y-4">
            {["about", "features", "emmo", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-text-color hover:text-main transition border-b border-gray-100 text-navbar leading-navbar font-content pb-1"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </a>
            ))}
            <a href="#waitlist" onClick={toggleMenu}>
              <button className="bg-main text-text-color px-4 py-1 rounded-full font-medium transition w-full font-content text-button hover:bg-[#cceaea]">
                Join Waitlist
              </button>
            </a>
          </div>
        </div>
      )}

      {/* Scroll to Top Button */}
      <a
        href="#hero"
        className="fixed bottom-6 right-6 z-50 bg-main text-text-color p-3 rounded-full shadow-md hover:bg-[#cceaea] transition"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </a>
    </div>
  );
}
