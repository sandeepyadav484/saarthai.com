import React from 'react';

const capabilities = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 15h8M8 12h8M8 9h8" /></svg>
    ),
    title: 'Conversational AI',
    desc: 'Deploy intelligent chatbots and voice assistants that understand Indian languages',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    ),
    title: 'Computer Vision',
    desc: 'Develop image and video recognition systems tailored to Indian scenarios',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v-2a4 4 0 014-4h8a4 4 0 014 4v2" /><circle cx="12" cy="7" r="4" /></svg>
    ),
    title: 'Predictive Analytics',
    desc: 'Create data-driven forecasting models that help businesses anticipate trends',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M8 7V3h8v4" /></svg>
    ),
    title: 'Process Automation',
    desc: 'Build intelligent workflows that automate repetitive tasks',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" /></svg>
    ),
    title: 'Natural Language Processing',
    desc: 'Process and analyze text in multiple Indian languages',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" /><path d="M8 8h8v8H8z" /></svg>
    ),
    title: 'Custom AI Solutions',
    desc: 'Design and implement unique AI solutions that address specific challenges',
  },
];

const AICapabilities = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Our AI Capabilities</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{cap.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{cap.title}</h3>
              <p className="text-gray-600 text-sm">{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICapabilities; 