
import Image from "next/image";
import image from "../../../public/Home/universeImage.png";
import Button from "../components/button";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Universe = ()=> {
  return (
    <div className="w-screen h-[682px] flex justify-center  ">
      <div className="w-[350px] md:w-screen  flex flex-col-reverse justify-center items-center lg:flex-row gap-[30px] px-4 lg:px-0">
        {/* Image Section */}
        <div className="relative w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={image}
            alt="image"
            className="object-contain w-[100%] h-auto"
            
          />
        </div>

        {/* Text Section */}
        <div className={`${montserrat.className} w-[350px] lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0`}>
          <h5 className="text-[16px]  font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="lg:w-[375px] text-[40px]   font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className=" lg:w-[375px] text-[20px]  font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
        <div className="flex flex-wrap flex-col md:flex-row justify-center lg:justify-start gap-[10px]">
            <Button title="BUYNOW" style="w-[156px] h-[52px] text-[14px] text-white hover:bg-green-600 bg-[#23A6F0] md:bg-[#2DC071] "/>
            <Button title="READMORE" style="w-[156px] h-[52px] text-[14px] text-blue-500 hover:bg-[#2DC071] hover:text-white  md:text-[#2DC071] border-2 border-[#23A6F0] md:border-[#2DC071] "/>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe