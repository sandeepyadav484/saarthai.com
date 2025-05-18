import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-primary text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
        <p className="text-lg md:text-xl mb-10 font-medium">
          Let's discuss how SaarthAI can help you leverage artificial intelligence to drive growth, enhance efficiency, and create exceptional experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/get-demo" className="px-8 py-3 rounded font-semibold bg-white text-primary shadow hover:bg-orange-100 transition text-lg">
            Schedule a Consultation
          </Link>
          <Link to="/get-demo" className="px-8 py-3 rounded font-semibold border border-white text-white bg-transparent hover:bg-white hover:text-primary transition text-lg">
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction; 