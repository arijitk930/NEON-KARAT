import { Link, useLocation } from "react-router-dom";

const Features = () => {
  const features = [
    {
      title: "Credit Card",
      description: "Custom credit cards tailored to creators.",
      icon: "💳",
      path: "/credit-card",
    },
    {
      title: "Insights",
      description: "Get financial insights for your creator business.",
      icon: "📊",
      path: "/insights",
    },
  ];

  return (
    <section className=" ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold  font-primaryBold bg-[url('https://cdn.prod.website-files.com/62c48d78ef34931f8a604ef5/62c4904a072d7e734d9f4a1b_gradient.png')] text-transparent bg-clip-text bg-cover bg-center inline-block custom-stroke">
            OUR FEATURES
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Empowering creators with tools to grow their businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, idx) => (
            <Link
              to={feature.path}
              key={idx}
              className="p-8 border border-gray-300 rounded-lg text-center shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="text-5xl mb-6 text-[#1D0CE5]">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 font-primaryBold">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
