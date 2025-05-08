"use client";

import React, { useState } from "react";
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
          <div className="w-8 h-8 rounded-full bg-[var(--tag-color)] flex items-center justify-center mr-2">
            <span className="text-[var(--main-color)] text-lg font-bold font-[var(--content-font-family)]">
              ?
            </span>
          </div>
          <span className="text-[var(--main-color)] text-xl font-semibold font-[var(--content-font-family)] text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)]">
            Backpack
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          {["about", "features", "emmo", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-700 hover:text-[var(--main-color)] transition font-[var(--content-font-family)] text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)]"
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
  href="#waitlist"
  className="hidden md:inline-block bg-[var(--main-color)] text-[var(--text-color)] px-6 py-2 rounded-full font-medium hover:bg-[#cceaea] transition font-[var(--content-font-family)] text-[var(--button-font-size)]"
>
  Join Waitlist
</a>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          a
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full bg-white shadow-md py-3 z-20 absolute">
          <div className="flex flex-col space-y-3 px-6">
            {["about", "features", "emmo", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 hover:text-[var(--main-color)] transition py-2 border-b border-gray-100 text-[var(--navbar-font-size)] leading-[var(--navbar-line-height)] font-[var(--content-font-family)]"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
              </a>
            ))}
            <div className="py-3">
              <a href="#waitlist">
                <button className="bg-[var(--main-color)] text-[var(--text-color)] px-4 py-2 rounded-full font-medium hover:bg-[#cceaea] transition w-full font-[var(--content-font-family)] text-[var(--button-font-size)]">
                  Join Waitlist
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
