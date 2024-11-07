import React from 'react'
import InsightsHero from '../components/InsightsHero'
import InsightsCalculate from '../components/InsightsCalculate'
import ComparisonComponent from '../components/Compare'
import TaxComponent from '../components/TaxCommunity'

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
