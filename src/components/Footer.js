import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center mb-2">
            <span className="text-2xl font-bold text-primary">SaarthAI</span>
          </div>
          <p className="text-sm text-gray-400 mb-4">Purposeful AI for Indian Enterprise</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><ScrollLink to="value-proposition" smooth={true} duration={600} offset={-80} className="hover:text-primary cursor-pointer">Solutions</ScrollLink></li>
            <li><ScrollLink to="use-cases" smooth={true} duration={600} offset={-80} className="hover:text-primary cursor-pointer">Use Cases</ScrollLink></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            <li><Link to="/get-demo" className="hover:text-primary">Get Demo</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Bengaluru, India</li>
            <li><a href="mailto:saarthaiofficial@gmail.com" className="hover:text-primary">saarthaiofficial@gmail.com</a></li>
            <li><a href="mailto:rakshit@saarthai.com" className="hover:text-primary">rakshit@saarthai.com</a></li>
            <li><a href="tel:+917676728831" className="hover:text-primary">+91-7676728831</a></li>
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="border-t border-gray-800 pt-6 mt-8 text-center text-sm text-gray-400 flex flex-col md:flex-row md:justify-between max-w-7xl mx-auto px-4">
        <span>&copy; {new Date().getFullYear()} SaarthAI. All rights reserved.</span>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ScrollLink to="value-proposition" smooth={true} duration={600} offset={-80} className="hover:text-primary cursor-pointer">Solutions</ScrollLink>
          <ScrollLink to="use-cases" smooth={true} duration={600} offset={-80} className="hover:text-primary cursor-pointer">Use Cases</ScrollLink>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
          <Link to="/get-demo" className="hover:text-primary">Get Demo</Link>
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 