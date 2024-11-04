import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Insights from '../components/Insights'
import CreditCard from '../components/CreditCard'
import CreatorAnalytics from '../components/CreatorAnalytics'
import Testimonials from '../components/Testimonials'
import LeftRightScroll from '../components/LeftRightScroll'

function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Insights />
      <CreditCard/>
      <CreatorAnalytics/>
      <LeftRightScroll/>
      <Testimonials />
    </div>
  )
}

export default Home
