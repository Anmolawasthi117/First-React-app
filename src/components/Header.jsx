// Navbar.js
// Navbar.js

import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">Tech.co</div>

        {/* Hamburger Icon for Small Screens */}
        <div className="lg:hidden">
          <button
            onClick={toggleDropdown}
            className="text-white focus:outline-none"
          >
            &#9776; {/* Hamburger Icon */}
          </button>
        </div>

        {/* Navbar Items for Large Screens */}
        <div className="hidden lg:flex space-x-4">
          <HashLink to="/#home" className="hover:text-red-200">
            Home
          </HashLink>
          <Link to="/contact" className="hover:text-blue-200">
            Contact
          </Link>
          <HashLink to="/#about" className="hover:text-green-200">
            About
          </HashLink>
          <HashLink to="/#brands" className="hover:text-pink-200">
            Brands
          </HashLink>
          <Link to="/services" className="hover:text-green-200" >Services</Link>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <div className="lg:hidden absolute top-full right-0 mt-2 bg-gray-800 rounded-md shadow-lg">
            <ul className="py-1">
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                <HashLink to="/#home" className="hover:text-red-200">
                  Home
                </HashLink>
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                <Link to="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                <HashLink to="/#about" className="hover:text-green-200">
                  About
                </HashLink>
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                <HashLink to="/#brands" className="hover:text-pink-200">
                  Brands
                </HashLink>
              </li>
              <li className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer">
                <Link to="/services">Services</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;

