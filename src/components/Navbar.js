import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: 'value-proposition' },
  { label: 'Use Cases', to: 'use-cases' },
  { label: 'Our Work', to: 'case-studies' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo and Tagline */}
        <Link to="/" className="flex items-center cursor-pointer" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SaarthAI Logo" className="h-12 w-auto mr-2" />
        </Link>
        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li>
            <Link to="/" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <ScrollLink
              to="value-proposition"
              smooth={true}
              duration={600}
              offset={-80}
              className="text-gray-700 hover:text-primary font-medium cursor-pointer"
              activeClass="text-primary font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Solutions
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="use-cases"
              smooth={true}
              duration={600}
              offset={-80}
              className="text-gray-700 hover:text-primary font-medium cursor-pointer"
              activeClass="text-primary font-bold"
              onClick={() => setMenuOpen(false)}
            >
              Use Cases
            </ScrollLink>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to="/get-demo" className="ml-4 px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-orange-600 transition" onClick={() => setMenuOpen(false)}>Get Demo</Link>
          </li>
        </ul>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-primary mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primary mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-6 bg-primary transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            <li>
              <Link to="/" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <ScrollLink
                to="value-proposition"
                smooth={true}
                duration={600}
                offset={-80}
                className="text-gray-700 hover:text-primary font-medium cursor-pointer"
                activeClass="text-primary font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Solutions
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="use-cases"
                smooth={true}
                duration={600}
                offset={-80}
                className="text-gray-700 hover:text-primary font-medium cursor-pointer"
                activeClass="text-primary font-bold"
                onClick={() => setMenuOpen(false)}
              >
                Use Cases
              </ScrollLink>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 hover:text-primary font-medium" onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/get-demo" className="mt-2 px-4 py-2 rounded bg-primary text-white font-semibold shadow hover:bg-orange-600 transition block text-center" onClick={() => setMenuOpen(false)}>Get Demo</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar; 