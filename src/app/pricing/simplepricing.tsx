import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { RxSwitch } from "react-icons/rx";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Simplepricing = () => {
  return (
    <div>
      <div className='w-screen h-full flex flex-col justify-center items-center'>

        <div className='w-full h-[280px] flex justify-center items-center bg-white'> 
          <div className={` ${montserrat.className} w-[90%] max-w-[427px] h-[180px] flex flex-col justify-center items-center gap-4`}>
            <h5 className='text-base font-bold leading-6 tracking-[0.100px] text-center text-[#737373]'>PRICING</h5>
            <h5 className='text-[32px] md:text-[52px] font-bold leading-20 tracking-[0.100px] text-center text-[#252B42]'>Simple Pricing</h5>
            <h6 className="text-sm font-bold flex items-center gap-2">
              <Link href="/" className="text-[#252B42]">Home</Link>
              <IoIosArrowForward className="text-[#BDBDBD]" />
              <Link href="/" className="text-[#BDBDBD]">Shop</Link>
            </h6>
          </div>
        </div>

        <div className='w-screen h-full flex justify-center items-center bg-[#FAFAFA] px-4'>
          <div className='w-full max-w-[1050px] h-full flex flex-col justify-center items-center '>

            <div className={` ${montserrat.className} w-[90%] max-w-[415px] h-[100px] gap-[10px] flex flex-col justify-center items-center `}>
              <h5 className='text-[28px] md:text-[40px] font-bold leading-20 tracking-[0.100px] text-center text-[#252B42]'>Pricing</h5>
              <p className='text-[14px] font-normal leading-[20px] tracking-[0.100px] text-center text-[#737373]'>Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            <div className={` ${montserrat.className} w-[90%] max-w-[311px] h-[44px] gap-[16px] flex justify-center items-center `}>
              <div className='w-[186px] h-[28px] flex items-center gap-1 '>
                <h5 className='text-[16px] font-bold leading-[24px] tracking-[0.100px] text-center text-[#252B42]'>Monthly</h5>
                <RxSwitch className='text-[24px] text-[#23A6F0]' />
                <h5 className='text-[16px] font-bold leading-[24px] tracking-[0.100px] text-center text-[#252B42]'>Yearly</h5>
              </div>
            </div>

            <div className={` ${montserrat.className} flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-6 py-10`}>
              {/* Free Plan */}
              <div className="bg-white rounded-lg p-6 w-[90%] max-w-[300px] text-center hover:scale-105 duration-500 ">
                <h3 className="text-2xl font-bold text-[#252B42]">FREE</h3>
                <h5 className="text-base font-bold leading-6 text-[#737373] mt-2">Organize across all apps by hand</h5>
                <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] mt-4">0 <span className='text-2xl'>$</span> </h2>
                <p className="text-[#23A6F0]">Per Month</p>
                <ul className="mt-6 space-y-2">
                  <li className="text-[#252B42] font-semibold flex items-center gap-[2px]"><BsArrowUpRightCircleFill className='text-[#2DC071]' />Unlimited product updates</li>
                </ul>
              </div>

              {/* Standard Plan */}
              <div className="bg-[#252B42] text-white rounded-lg p-6 w-[90%] max-w-[300px] text-center hover:scale-105 duration-500 ">
                <h3 className="text-2xl font-bold">STANDARD</h3>
                <h5 className="text-base font-bold leading-6 mt-2">Organize across all apps by hand</h5>
                <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] mt-4">99.9 <span className='text-2xl'>$</span> </h2>
                <p className="text-[#23A6F0]">Per Month</p>
                <ul className="mt-6 space-y-2">
                  <li className="font-semibold flex items-center gap-[2px]"><BsArrowUpRightCircleFill className='text-[#2DC071]' />Unlimited product updates</li>
                  <li className="font-semibold flex items-center gap-[2px]"><BsArrowUpRightCircleFill className='text-[#2DC071]' />Unlimited product updates</li>
                </ul>
              </div>

              {/* Premium Plan */}
              <div className="bg-white rounded-lg p-6 w-[90%] max-w-[300px] text-center hover:scale-105 duration-500">
                <h3 className="text-2xl font-bold text-[#252B42]">PREMIUM</h3>
                <h5 className="text-base font-bold leading-6 text-[#737373] mt-2">Organize across all apps by hand</h5>
                <h2 className="text-[40px] leading-[50px] font-bold text-[#23A6F0] mt-4">199.9 <span className='text-2xl'>$</span> </h2>
                <p className="text-[#23A6F0]">Per Month</p>
                <ul className="mt-6 space-y-2">
                  <li className="text-[#252B42] font-semibold flex items-center gap-[2px]"><BsArrowUpRightCircleFill className='text-[#2DC071]' />Unlimited product updates</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplepricing;
