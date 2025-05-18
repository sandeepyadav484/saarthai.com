import React from 'react';

const Contact = () => (
  <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 text-center">
      <h1 className="text-3xl font-bold text-primary mb-2">Contact Us</h1>
      <p className="text-gray-600 mb-6">We'd love to hear from you. Reach out to us using the details below.</p>
      <div className="mb-4">
        <span className="block text-lg font-semibold text-gray-800 mb-1">Phone</span>
        <a href="tel:+917676728831" className="text-primary text-lg font-medium hover:underline">+91-7676728831</a>
      </div>
      <div>
        <span className="block text-lg font-semibold text-gray-800 mb-1">Email</span>
        <a href="mailto:saarthaiofficial@gmail.com" className="text-primary text-lg font-medium hover:underline">saarthaiofficial@gmail.com</a>
        <br />
        <a href="mailto:rakshit@saarthai.com" className="text-primary text-lg font-medium hover:underline">rakshit@saarthai.com</a>
      </div>
    </div>
  </section>
);

export default Contact; 