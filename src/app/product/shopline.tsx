
import React from 'react'
import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";



import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});


const Shopline = () => {
  return (
    <div className='w-screen flex justify-center items-center '>

 <div className={`${montserrat.className} flex justify-center md:justify-start w-full md:w-[1050px]`}>
          <h6 className="text-sm font-bold flex items-center gap-2">
            <Link href="/" className="text-[#252B42]">Home</Link>
            <IoIosArrowForward className="text-[#BDBDBD]" />
            <Link href="/" className="text-[#BDBDBD]">Shop</Link>
        </h6>
        </div>

    </div>
  )
}

export default Shopline