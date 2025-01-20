
import React from 'react'
import Navbar from '../components/Navbar'
import Hero from './hero'
import Editpick from './editpick'
import BestSeller from './bestSeller'
import VitaClassic from './vitaClassic'
import Universe from './universe'
import FeaturedPosts from './feature'
import Footer from '../components/footer'
// import { ProductCards } from '../product2/addedapis'



const Home = () => {
  return (
    <div >
         <Navbar style='bg-[#252B42]'/>
         <Hero/>
         <Editpick/>
         <BestSeller/>
         <VitaClassic/>
         <Universe/>
         <FeaturedPosts/>
         {/* <ProductCards/> */}
         <Footer/>
    </div>
  )
}

export default Home