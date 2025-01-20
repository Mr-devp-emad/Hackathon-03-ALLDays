import React from 'react'
import AboutNav from '../about/aboutNav'
import Simplepricing from './simplepricing'
import Companies from '../about/companies'
import PricingFAQ from './pricingFAQ'
import Footer from '../components/footer'



const Pricing = () => {
  return (
    <div>
        <AboutNav/>
        <Simplepricing/>
        <Companies/>
        <PricingFAQ/>
        <Footer/>
        

    </div>
  )
}

export default Pricing