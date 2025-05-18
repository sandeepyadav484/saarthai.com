import React from 'react';

const useCases = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20v-6m0 0V4m0 10l3-3m-3 3l-3-3" /></svg>
    ),
    title: 'Intelligent Customer Support',
    desc: 'AI assistants that resolve customer queries in multiple Indian languages',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    ),
    title: 'Sales Forecasting',
    desc: 'Predictive models that optimize inventory and supply chain',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 8h8v8H8z" /></svg>
    ),
    title: 'Document Processing',
    desc: 'Automated extraction and processing of text from documents',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M8 7V3h8v4" /></svg>
    ),
    title: 'Fraud Detection',
    desc: 'AI algorithms that identify suspicious patterns in financial transactions',
  },
];

const UseCasesGallery = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Real-World Applications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12 mb-8">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center h-full">
              <div className="mb-4">{useCase.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesGallery; 