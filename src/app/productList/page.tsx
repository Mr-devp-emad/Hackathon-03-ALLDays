import React from 'react'
import Shop from './shop'
import Companies from '../about/companies'
import Footer from '../components/footer'
import List from './list'
// import { ProductCards } from '../product2/addedapis'

import Navbar from '../components/Navbar'

const ProductList = () => {
  return (
    <div>
        <Navbar style='bg-[#23856D]'/>
        <Shop/>
        <div className=' hidden md:block'>
        <Companies/>
        </div>
        <div className=' hidden md:block'>
        <Footer/>
        </div>
        <List/>
        <div className=' block md:hidden'>
        <Companies/>
        </div>
        {/* <ProductCards/> */}
        


        <div className=' block md:hidden'>
        <Footer/>
        </div>
    </div>
  )
}

export default ProductList