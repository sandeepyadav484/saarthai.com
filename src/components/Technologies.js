import React from 'react';

const technologies = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
    ),
    label: 'Large Language Models',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    ),
    label: 'Computer Vision',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" /></svg>
    ),
    label: 'Natural Language Processing',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    label: 'Predictive Analytics',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 8h8v8H8z" /></svg>
    ),
    label: 'Reinforcement Learning',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15h8M8 12h8M8 9h8" /></svg>
    ),
    label: 'Neural Networks',
  },
];

const Technologies = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">Powered by Advanced Technology</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 mb-10">
          {technologies.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center">
              {tech.icon}
              <span className="mt-2 text-sm font-medium text-gray-700 text-center">{tech.label}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600 text-center max-w-2xl mx-auto text-base md:text-lg">
          Our solutions can be built on various frameworks and platforms, ensuring compatibility with your existing technology stack.
        </p>
      </div>
    </section>
  );
};

export default Technologies; 