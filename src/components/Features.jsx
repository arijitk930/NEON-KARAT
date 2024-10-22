import React from 'react';

const Features = () => {
  const features = [
    { title: 'Credit Card', description: 'Custom credit cards tailored to creators.', icon: '💳' },
    { title: 'Insights', description: 'Get financial insights for your creator business.', icon: '📊' },
  ];

  return (
    <section className="text-[#1D0CE5] py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-6 border border-gray-200 rounded-lg text-center shadow-lg bg-white"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
