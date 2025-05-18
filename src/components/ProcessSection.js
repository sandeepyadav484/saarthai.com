import React from 'react';

const steps = [
  {
    title: 'Understand',
    desc: 'We begin by deeply understanding your business, challenges, and goals',
  },
  {
    title: 'Design',
    desc: 'We design AI solutions that address your specific needs and integrate with existing systems',
  },
  {
    title: 'Develop',
    desc: 'Our team builds custom models using the latest AI technologies',
  },
  {
    title: 'Deploy',
    desc: 'We implement solutions that work seamlessly within your operational environment',
  },
  {
    title: 'Optimize',
    desc: 'We continuously monitor and improve performance to maximize ROI',
  },
];

const ProcessSection = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Our Approach</h2>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between relative">
          {steps.map((step, idx) => (
            <div key={idx} className="flex-1 flex flex-col items-center md:items-start md:px-2 mb-12 md:mb-0 relative">
              {/* Numbered circle */}
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold text-lg z-10">
                  {idx + 1}
                </div>
                {/* Connecting line for desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block h-1 w-full bg-primary opacity-30 ml-2 mr-2" style={{ minWidth: 40, maxWidth: 80 }}></div>
                )}
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm max-w-xs">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection; 