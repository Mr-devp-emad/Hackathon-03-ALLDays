import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import image1 from "../../../public/innovate/unsplash_1.png";
import image2 from "../../../public/innovate/unsplash_2.png";
import image3 from "../../../public/innovate/unsplash_3.png";
import image4 from "../../../public/innovate/unsplash_4.png";
import image5 from "../../../public/innovate/unsplash_5.png";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Inovation = () => {
  return (
    <div className="w-screen h-auto flex flex-col justify-center mt-10 items-center px-4">
      <div className={`${montserrat.className} w-full  max-w-[827px] flex flex-col items-center gap-4`}>
        <h5 className="text-base font-bold leading-6 tracking-[0.100px] text-center text-[#737373]">WHAT WE DO</h5>
        <h5 className="text-[28px] md:text-[52px] font-bold leading-snug text-center text-[#252B42]">
          Innovation tailored for you
        </h5>
        <h6 className="text-sm font-bold flex items-center gap-2">
          <Link href="/" className="text-[#252B42]">Home</Link>
          <IoIosArrowForward className="text-[#BDBDBD]" />
          <Link href="/" className="text-[#BDBDBD]">Shop</Link>
        </h6>
      </div>

      <div className="w-full h-auto mt-6 border-3 border-red">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-6 md:gap-[30px] text-[#252B42]">
          {/* Main Image */}
          <div className="w-full max-w-[500px] h-[300px] sm:h-[400px] md:h-[510px]">
            <Image src={image1} alt="image" className="w-full h-full object-cover hover:scale-105 duration-500" />
          </div>

          {/* Small Images */}
          <div className="w-full grid grid-cols-2 gap-4 md:gap-6 md:max-w-[480px]">
            <div className="h-[150px] sm:h-[200px] md:h-[242px]">
              <Image src={image2} alt="image" className="w-full h-full object-cover hover:scale-105 duration-500" />
            </div>
            <div className="h-[150px] sm:h-[200px] md:h-[242px]">
              <Image src={image3} alt="image" className="w-full h-full object-cover hover:scale-105 duration-500" />
            </div>
            <div className="h-[150px] sm:h-[200px] md:h-[242px]">
              <Image src={image4} alt="image" className="w-full h-full object-cover hover:scale-105 duration-500" />
            </div>
            <div className="h-[150px] sm:h-[200px] md:h-[242px]">
              <Image src={image5} alt="image" className="w-full h-full object-cover hover:scale-105 duration-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inovation;
