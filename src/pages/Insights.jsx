import React from 'react'
import InsightsHero from '../components/InsightsHero'
import InsightsCalculate from '../components/InsightsCalculate'
import ComparisonComponent from '../components/Compare'

function Insights() {
  return (
    <div>
      <InsightsHero/>
      <ComparisonComponent/>
      <InsightsCalculate/>
    </div>
  )
}

export default Insights
