import React from 'react'
import InsightsHero from '../components/InsightsHero'
import InsightsCalculate from '../components/InsightsCalculate'
import {ComparisonComponent,PlatformSelector, RevenueBreakdown} from '../components/Compare'
import TaxComponent from '../components/TaxCommunity'

function Insights() {
  return (
    <div>
      <InsightsHero/>
      <PlatformSelector/>
      <RevenueBreakdown/>
      <ComparisonComponent/>
      <InsightsCalculate/>
    </div>
  )
}

export default Insights
