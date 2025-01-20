import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from '../components/button';

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});


const FreeTrial = () => {
  return (
    <div className={`${montserrat.className}  w-full h-[282px] flex flex-col justify-center items-center mt-20 text-center md:mt-10 bg-white gap-7`}>
      {/* Title */}
      <h2 className="font-bold text-[30px] md:text-[40px] leading-[50px] text-[#252B42]">
        Start your 14 days free trial
      </h2>
      {/* Subtitle */}
      <p className="text-sm font-normal text-[#737373] text-center ">
        Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sont. RELIT official consequent.
      </p>
      {/* Button */}
      <Button title='Try it free now' style=" bg-[#23A6F0] text-white font-bold hover:bg-blue-600 transition"/>
      
      
      {/* Social Icons */}
      <div className="flex items-center justify-center gap-4 ">
        <FaTwitter className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
        <FaFacebookF className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
        <FaInstagram className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
        <FaLinkedinIn className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
      </div>
    </div>
  );
};

export default FreeTrial;
