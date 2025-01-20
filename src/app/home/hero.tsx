
import React from 'react'
import Image from 'next/image'
import heroimage from "../../../public/Home/heroimage.jpg"
import { Montserrat } from 'next/font/google'
import Button from '../components/button'


const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })

const Hero = () => {
  return (
    <div>
         
        <div className=' w-full md:w-screen h-screen flex md:mt-[28px] mt-0 z-9 justify-center items-center'>
            <Image src={heroimage}
             alt='image'
              className='relative  w-screen h-[716px] rounded-[5px] border object-cover '/>
            <div className={`absolute w-[300px] h-[550px] md:w-[599px] md:h-[331px] flex flex-col justify-center  text-center md:text-left md:bottom-0 md:top-80 md:left-56  ${montserrat.className} gap-[35px] text-[#FAFAFA] `}>
              <h5 className='text-sm md:text-base  font-bold leading-6 tracking-[0.01em]'>SUMMER 2020</h5>
              <h1 className='text-[40px] md:text-[58px] font-bold leading-20 tracking-[0.02em]'>NEW COLLECTION</h1>
              <h4 className='text-[16px] md:text-xl font-normal leading-[30px] tracking-[0.02em] text-[#FAFAFA]'>We know how large objects will act,<br />
              but things on a small scale.</h4>
              <Button title='SHOP NOW' style='bg-[#2DC071] hover:bg-green-600'/>
          </div>
          </div>

      

    </div>
  )
}

export default Hero