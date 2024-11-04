import React from "react";

const Features = () => {
  const features = [
    {
      title: "Credit Card",
      description: "Custom credit cards tailored to creators.",
      icon: "💳",
    },
    {
      title: "Insights",
      description: "Get financial insights for your creator business.",
      icon: "📊",
    },
  ];

  return (
    <section className="text-[#1D0CE5] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold">Our Features</h2>
          <p className="text-lg text-gray-600 mt-4">
            Empowering creators with tools to grow their businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 border border-gray-200 rounded-lg text-center shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <div className="text-5xl mb-6 text-[#1D0CE5]">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
