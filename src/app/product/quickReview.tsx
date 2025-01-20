import React from 'react';
import Image from 'next/image';
import image from '../../../public/product/quickimage.png';


import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const QuickReview = () => {
  return (
    <div className="max-w-6xl mx-auto p-4 mt-5 flex flex-col justify-center items-center">
      {/* Tabs Navigation */}
      <div className={`${montserrat.className} flex flex-wrap gap-4 border-b justify-center  border-gray-200 mb-10 w-full`}>
        <p className="pb-2 text-[#737373] font-bold text-sm leading-6 cursor-pointer">
          Description
        </p>
        <p className="pb-2 text-[#737373] font-bold text-sm leading-6 cursor-pointer">
          Additional Information
        </p>
        <p className="pb-2 text-[#737373] font-bold text-sm leading-6 cursor-pointer">
          Reviews (0)
        </p>
      </div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Left Column */}
        <div className="flex justify-center w-full md:w-1/3">
          <Image
            src={image}
            alt="Product Image"
            className="w-full max-w-[316px] h-auto rounded-md"
          />
        </div>

        {/* Center Column */}
        <div className={`${montserrat.className} flex flex-col items-center md:items-start gap-4 w-full md:w-1/3`}>
          <h3 className="text-xl md:text-2xl font-bold leading-8 text-[#252B42]">
            the quick fox jumps over
          </h3>
          <p className="text-sm text-[#737373] leading-5">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet
            sent. Reelit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="text-sm text-[#737373] leading-5">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet
            sent. Reelit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="text-sm text-[#737373] leading-5">
            Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet
            sent. Reelit officia consequat sunt nostrud amet.
          </p>
        </div>

        {/* Right Column */}
        <div className={`${montserrat.className} flex flex-col items-center md:items-start gap-4 w-full md:w-1/3`}>
          <h3 className="text-xl md:text-2xl font-bold leading-8 text-[#252B42]">
            the quick fox jumps over
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
          </div>

          <h3 className="text-xl md:text-2xl font-bold leading-8 text-[#252B42]">
            the quick fox jumps over
          </h3>
          <div className="text-sm text-gray-600 space-y-2">
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
            <h6 className="font-bold text-[#737373] leading-5">
              <span>&#8250;</span> the quick fox jumps over the lazy dog
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickReview;
