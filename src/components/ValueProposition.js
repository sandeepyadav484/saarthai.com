import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" /></svg>
    ),
    title: 'Custom-Built Models',
    desc: 'Purpose-built for your specific business needs',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M8 17l4 4 4-4m0-5V3m-8 9v6a2 2 0 002 2h8a2 2 0 002-2v-6" /></svg>
    ),
    title: 'Seamless Integration',
    desc: 'APIs that work with your existing systems',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12h4l3 3" /></svg>
    ),
    title: 'Indian Context',
    desc: 'Solutions designed with Indian languages, culture, and business environments in mind',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M8 11h8" /></svg>
    ),
    title: 'Enterprise Security',
    desc: 'Military-grade security with complete data protection',
  },
];

const ValueProposition = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">AI Solutions With Purpose</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12 text-base md:text-lg">
          SaarthAI provides end-to-end AI services designed specifically for Indian enterprises. We build and deploy custom AI models that integrate perfectly with your existing tech stack and business processes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition; 