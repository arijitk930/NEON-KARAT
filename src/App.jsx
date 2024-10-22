import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css'
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials/>
      <Footer />
    </div>
  );
}

export default App;