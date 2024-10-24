<<<<<<< HEAD
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";
import Testimonials from "./components/Testimonials";
=======
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css'
import Testimonials from './components/Testimonials';
import StickyScrollReveal from './components/StickyScroll';
>>>>>>> 701bdb1defc02847989997605a3ec0a71d17bad1
function App() {
  

  const content1 = [
    {
      title: "HOW WE HELP",
      subtitle: "INSIGHTS",
      highlighted: "Make",
      normal: " more money",
      description: "Are you good at engaging with your community or maybe you're better at brand deals? We analyze your financial & social stats to identify your strengths.",
      visualization: (
        <div className="relative">

          <div
            className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden"
          >
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      )
    },
    {
      title: "See",
      normal: " how you compare",
      description: "Compare your performance with creators in your niche and identify opportunities for growth.",
      visualization: (
        <div className="relative">

          <div
            className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden"
          >
            <img
              src={`https://placehold.co/600x400/000000/FFFFFF.png`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      )
    },
    {
      title: "Understand",
      normal: " your business",
      description: "Get detailed insights into your revenue streams and audience engagement metrics.",
      visualization: (
        <div className="relative">

          <div
            className="w-full h-full rounded-sm bg-gray-200 border-2 border-white overflow-hidden"
          >
            <img
              src={`https://placehold.co/500x500`}
              alt={`Profile`}
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      )
    }
  ];
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
<<<<<<< HEAD
=======
      <StickyScrollReveal theme='light' heading="Insights" content={content1}/>
      <StickyScrollReveal heading="Credit Card" content={content1}/>
>>>>>>> 701bdb1defc02847989997605a3ec0a71d17bad1
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
