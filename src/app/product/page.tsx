

import React from 'react'
import Navbar from '../components/Navbar'
import Shopline from './shopline'
import ProductCard from './productDetail'
import QuickReview from './quickReview'
import BestProduct from './bestProduct'
import Companies from '../about/companies'
import Footer from '../components/footer'


const Product = () => {
  return (
    <div>
    <Navbar style='bg-[#23856D]'/>
    <Shopline/>
    <ProductCard/>
    <QuickReview/>
    <BestProduct/>
    <Companies/>
    <Footer/>

    </div>
  )
}

export default Product