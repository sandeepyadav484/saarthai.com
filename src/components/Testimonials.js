import React from 'react';
import bhavishyajiGif from '../assets/bhavishyaji.gif';
import wealthlyGif from '../assets/wealthly.gif';

const Testimonials = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">See Our Products in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <img src={bhavishyajiGif} alt="Bhavishyaji Product Demo" className="rounded-lg shadow max-h-[32rem] md:max-h-[36rem] w-auto" />
            <a href="https://bhavishyaji.com" target="_blank" rel="noopener noreferrer" className="mt-4 text-primary font-semibold text-lg underline">bhavishyaji.com</a>
          </div>
          <div className="flex flex-col items-center">
            <img src={wealthlyGif} alt="Wealthly Product Demo" className="rounded-lg shadow max-h-[32rem] md:max-h-[36rem] w-auto" />
            <a href="https://wealthly.in" target="_blank" rel="noopener noreferrer" className="mt-4 text-primary font-semibold text-lg underline">wealthly.in</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 