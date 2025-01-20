import image1 from '../../../public/Home/unsplash1.png'
import image2 from '../../../public/Home/unsplash2.png'
import image3 from '../../../public/Home/unsplash3.png'
import Image from 'next/image';
import { FaRegClock } from "react-icons/fa6";
import { LiaComments } from "react-icons/lia";
import { IoIosArrowForward } from "react-icons/io";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});



const FeaturedPosts = () => {
    
    return (
      <div className=" w-screen md:w-1050 h-[1044] flex flex-col justify-center items-center py-28 mt-5 gap-20 ">
        {/* Section Header */}
        <div className={`${montserrat.className} w-[350px] md:w-[691px] h[134px] flex flex-col items-center gap-[10px] `}>
            <h6 className='font-bold text-sm leading-6 tracking-[0.200px] text-center text-[#23A6F0]'>Practice Advice</h6>
          <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.200px] text-center text-[#737373]">Featured Posts</h2>
          <p className="w-[300px] md:w-[469px] h-10 font-normal text-sm leading-5 text-center text-[#737373] ">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
  
        {/* Cards Grid */}
        <div className="flex flex-col md:flex-row gap-5 w-screen md:w-[1045px] justify-center items-center h-full  md:h-[606px]  ">
          {/* Card 1 */}
            <div className={`${montserrat.className} w-[338px] h-[606px] mx-auto bg-white shadow-md hover:scale-95 duration-500 rounded-lg overflow-hidden`}>
              <div className="relative">
                <Image src={image1} alt='Loudest' className="w-full h-[300px] object-cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              
              <div className="w-[338px] h-[306px] py-[25px] px-[25px] flex flex-col gap-[10px] ">
                <div className='w-[159px] h-4 flex gap-[15px] '>
                    <p className='font-normal text-xs leading-4 text-[#8EC2F2]'>Google</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>Trending</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>New</p>
                </div>
                <h3 className="w-[247px] h-[60px] text-xl font-normal text-[#252B42] leading-7  hover:text-[#8EC2F2]">Loudest a la Madison #1 (L&apos;Integrál)</h3>
                <p className="w-[247px] h-[60px] font-normal text-sm leading-5 text-[#737373]">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="w-[298px] h-[46px] flex justify-between items-center py-[15px] text-[#737373] text-xs leading-4 ">
                  <span className='flex items-center gap-1'><FaRegClock className='text-[#8EC2F2]'/> 22 April 2021</span>
                  <span className='flex items-center gap-1'><LiaComments className='text-green-600' /> 10 comments</span>
                </div>
                <h6 className="text-[#737373] text-sm font-bold leading-6  flex items-center gap-1 hover:underline">
                  Learn More <IoIosArrowForward className='text-[#8EC2F2] text-lg'/>
                </h6>
              </div>
            </div>
           {/* Card 2 */}
            <div className={`${montserrat.className} w-[338px] h-[606px]  bg-white shadow-md hover:scale-95 duration-500 rounded-lg overflow-hidden`}>
              {/* Post Image */}
              <div className="relative">
                <Image src={image2} alt='Loudest' className="w-full h-[300px] object-cover " />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              
              <div className="w-[338px] h-[306px] py-[25px] px-[25px] flex flex-col gap-[10px] ">
                <div className='w-[159px] h-4 flex gap-[15px] '>
                    <p className='font-normal text-xs leading-4 text-[#8EC2F2]'>Google</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>Trending</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>New</p>
                </div>
                <h3 className="w-[247px] h-[60px] text-xl font-normal text-[#252B42] leading-7 hover:text-[#8EC2F2] ">Loudest à la Madison #1 (L&apos;Integrál)</h3>
                <p className="w-[247px] h-[60px] font-normal text-sm leading-5 text-[#737373]">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="w-[298px] h-[46px] flex justify-between items-center py-[15px] text-[#737373] text-xs leading-4 ">
                  <span className='flex items-center gap-1'><FaRegClock className='text-[#8EC2F2]'/> 22 April 2021</span>
                  <span className='flex items-center gap-1'><LiaComments  className='text-green-600' /> 10 comments</span>
                </div>
                <h6 className="text-[#737373] text-sm font-bold leading-6  flex items-center gap-1 hover:underline">
                  Learn More <IoIosArrowForward className='text-[#8EC2F2] text-lg'/>
                </h6>
              </div>
            </div>
              {/* Card 3 */}
            <div className={`${montserrat.className} w-[338px] h-[606px]  bg-white shadow-md hover:scale-95 duration-500 rounded-lg overflow-hidden`}>
              
              <div className="relative">
                <Image src={image3} alt='Loudest' className="w-full h-[300px] object-cover" />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
                  NEW
                </span>
              </div>
              <div className="w-[338px] h-[306px] py-[25px] px-[25px] flex flex-col gap-[10px] ">
                <div className='w-[159px] h-4 flex gap-[15px] '>
                    <p className='font-normal text-xs leading-4 text-[#8EC2F2]'>Google</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>Trending</p>
                    <p className='font-normal text-xs leading-4 text-[#737373] hover:text-[#8EC2F2]'>New</p>
                </div>
                <h3 className="w-[247px] h-[60px] text-xl font-normal text-[#252B42] leading-7  hover:text-[#8EC2F2]">Loudest à la Madison #1 (L&apos;Integrál)</h3>
                <p className="w-[247px] h-[60px] font-normal text-sm leading-5 text-[#737373]">We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away.</p>
                <div className="w-[298px] h-[46px] flex justify-between items-center py-[15px] text-[#737373] text-xs leading-4 ">
                  <span className='flex items-center gap-1'><FaRegClock className='text-[#8EC2F2]'/> 22 April 2021</span>
                  <span className='flex items-center gap-1'><LiaComments  className='text-green-600' /> 10 comments</span>
                </div>
                <h6 className="text-[#737373] text-sm font-bold leading-6  flex items-center gap-1 hover:underline">
                  Learn More <IoIosArrowForward className='text-[#8EC2F2] text-lg'/>
                </h6>
              </div>
            </div>
        
        </div>
      </div>
    );
  };
  
  export default FeaturedPosts;