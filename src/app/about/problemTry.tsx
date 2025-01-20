import React from 'react'

import image from "../../../public/About/Video card.png"
import Image from 'next/image'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })


const ProblemTry = () => {
  return (
    <div>
        <div className='w-screen h-[1985px] md:h-[1265px] md:mt-10 mt-0 flex flex-col justify-center items-center'>
            {/* Problems trying */}
           
                <div className='w-full md:w-[1018px] h-[188px] mx-auto flex flex-col md:flex-row justify-center items-center gap-[60px]'>
                    <div className='w-full h-[188px] flex justify-center items-center py-6 gap-20'>
                        <div className='w-full md:w-[394px] text-center md:text-left h-[140px] gap-6'>
                            <p className={`${montserrat.className} font-normal text-sm leading-5 text-[#E74040]`}>Problems trying</p>
                            <h3 className={`${montserrat.className} text-2xl font-bold leading-8 text-[#252B42]`} >Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h3>
                        </div>
                    </div>
                    <div className='w-full md:w-[529px] h-10 gap-12'>
                        <p className={`${montserrat.className} font-normal text-center md:text-left text-sm leading-5 `}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>
                    </div>
                
            </div>
        {/* Ranking */}
        <div className='w-screen h-[1006px] md:h-[264px] mt-10 md:mt-0 flex justify-center items-center '>
            <div className='w-[300px] md:w-[1050px] h-[806px] md:h-[264px] flex justify-center items-center py-20 gap-[50px] '>
                <div className={`${montserrat.className} w-[400px] md:w-[1050px] h-[716px] md:h-[104px] flex flex-col md:flex-row justify-between items-center gap-[30px]`} >
                    <div className='w-[238px] h-[104px] flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[58px] leading-20 text-[#252B42]'>15K</h1>
                        <h5 className='font-bold text-[16px] leading-6 text-[#737373]'>Happy Customers</h5>
                    </div>
                    <div className='w-[238px] h-[104px] flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[58px] leading-20 text-[#252B42]'>150K</h1>
                        <h5 className='font-bold text-[16px] leading-6 text-[#737373]'>Monthly Visitors</h5>
                    </div>
                    <div className='w-[238px] h-[104px] flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[58px] leading-20 text-[#252B42]'>15</h1>
                        <h5 className='font-bold text-[16px] leading-6 text-[#737373]'>Countries Worldwide</h5>
                    </div>
                    <div className='w-[238px] h-[104px] flex flex-col justify-center items-center'>
                        <h1 className='font-bold text-[58px] leading-20 text-[#252B42]'>100+</h1>
                        <h5 className='font-bold text-[16px] leading-6 text-[#737373]'>Top Partners</h5>
                    </div>
                </div>
            </div>
        </div>
          {/* Video Picture */}
        <div className='w-screen  flex justify-center items-center bg-[#FFFFFF]'>
            <div className='w-full md:w-[1050px] h-[477px] md:h-[764px] flex justify-center items-center'>
              <Image src={image} alt='image' className='w-[307px] md:w-[989px] h-[316px] md:h-[540px] rounded-[20px]'/>  

            </div>

        </div>







        </div>
    </div>
  )
}

export default ProblemTry