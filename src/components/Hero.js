import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <section className="relative bg-gray-900 overflow-hidden py-20 md:py-32">
      {/* Geometric Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#fff" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
          Transforming Indian Businesses with Purpose-Built AI
        </h1>
        <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mb-10 font-medium">
          SaarthAI delivers enterprise-grade AI solutions tailored to the unique needs of Indian businesses. Our custom-built models, APIs, and intelligent systems integrate seamlessly with your existing products and services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/get-demo" className="px-8 py-3 rounded font-semibold bg-primary text-white shadow hover:bg-orange-700 transition text-lg">
            Get a Personalized Demo
          </Link>
          <ScrollLink to="value-proposition" smooth={true} duration={600} offset={-80} className="px-8 py-3 rounded font-semibold border border-primary text-primary bg-white bg-opacity-10 hover:bg-opacity-20 transition text-lg cursor-pointer">
            Explore Solutions
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero; 