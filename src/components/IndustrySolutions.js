import React from 'react';

const industries = [
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M16 3v4M8 3v4" /></svg>
    ),
    title: 'BFSI',
    desc: 'Transform customer service, automate complex processes, and enhance fraud detection',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="13" rx="2" /><path d="M6 7V3h12v4" /></svg>
    ),
    title: 'Manufacturing',
    desc: 'Optimize production, predict maintenance needs, and enhance quality control',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="8" /><path d="M12 8v4l3 3" /></svg>
    ),
    title: 'Healthcare',
    desc: 'Improve diagnostics, streamline patient management, and enhance healthcare delivery',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V3h8v4" /></svg>
    ),
    title: 'Retail & E-commerce',
    desc: 'Personalize customer experiences, optimize inventory, and enhance logistics',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 17c2-2.5 6-7 9-7s7 4.5 9 7" /><circle cx="12" cy="17" r="2" /></svg>
    ),
    title: 'Agriculture',
    desc: 'Maximize crop yields, optimize resource utilization, and provide farm-specific insights',
  },
];

const IndustrySolutions = () => {
  return (
    <section className="relative bg-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Indian-inspired pattern divider */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-orange-100 via-white to-orange-100 opacity-60" style={{clipPath: 'polygon(0 100%, 100% 0, 100% 100%, 0 100%)'}} />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Intelligent Solutions for Every Industry</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 mb-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center h-full border border-orange-50">
              <div className="mb-4">{industry.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h3>
              <p className="text-gray-600 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Subtle Indian-inspired pattern at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-r from-orange-100 via-white to-orange-100 opacity-60" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 0)'}} />
    </section>
  );
};

export default IndustrySolutions; 