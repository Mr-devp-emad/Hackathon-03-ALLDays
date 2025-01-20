import React from 'react';
import { AiOutlineRight } from "react-icons/ai";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Button from '../components/button';

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const PricingFAQ = () => {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-full md:w-[1056px] flex flex-col items-center py-10 gap-10">
        {/* Title Section */}
        <div className={`${montserrat.className} text-center w-[90%] md:w-[607px]`}>
          <h2 className="font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[50px] text-[#252B42]">
            Pricing FAQs
          </h2>
          <p className="font-normal text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms of Classical physics.
          </p>
        </div>

        {/* FAQ Grid Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`${montserrat.className} flex flex-col items-center md:items-start gap-2 p-4 md:p-[25px] bg-white shadow-md rounded-lg`}
            >
              <h3 className="text-base font-bold leading-6 flex items-center text-[#252B42]">
                <AiOutlineRight /> The quick fox jumps over the lazy dog
              </h3>
              <p className="text-sm text-[#737373] leading-5">
                Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet
                sent. Reelit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h3 className="text-xl font-bold leading-7 text-[#737373]">
            Haven&apos;t got your answer? Contact our support
          </h3>
        </div>

        {/* Free Trial Section */}
        <div className={`${montserrat.className} w-full flex flex-col items-center py-8 px-4 md:px-0 text-center bg-white mt-10 md:mt-16`}>
          {/* Title */}
          <h2 className="font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[50px] text-[#252B42]">
            Start your 14 days free trial
          </h2>
          {/* Subtitle */}
          <p className="text-sm md:text-base font-normal text-[#737373] mt-2">
            Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sont. RELIT official consequent.
          </p>
          {/* Button */}
          <Button
            title="Try it free now"
            style="mt-4 bg-[#23A6F0] text-white font-bold hover:bg-[#1b8dd0] transition"
          />
          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <FaTwitter className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
            <FaFacebookF className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
            <FaInstagram className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
            <FaLinkedinIn className="text-[#252B42] text-xl hover:text-[#23A6F0] transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingFAQ;
