import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";
import Testimonials from "./components/Testimonials";
import StickyScrollReveal from "./components/StickyScroll";

function App() {
  const content1 = [
    {
      title: "Insights",
      subtitle: "",
      highlighted: "Make",
      normal: " more money",
      description:
        "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "See",
      normal: " how you compare",
      description:
        "Compare your performance with creators in your niche and identify opportunities for growth.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/600x400/000000/FFFFFF.png`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Understand",
      normal: " your business",
      description:
        "Get detailed insights into your revenue streams and audience engagement metrics.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  const content2 = [
    {
      title: "Limit based on social stats",
      subtitle: "",
      highlighted: "Make",
      normal: " more money",
      description:
        "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
      visualization: (
        <div className="relative">
          <div className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden">
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="App min-h-screen bg-pastel-gradient bg-cover">
      <Navbar />
      <Hero />
      <Features />
      <StickyScrollReveal
        theme="light"
        heading="HOW WE HELP"
        content={content1}
      />
      <StickyScrollReveal heading="Credit Card" content={content1} />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
