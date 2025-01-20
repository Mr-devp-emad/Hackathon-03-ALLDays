import React from 'react';
import Image from 'next/image';
import image from "../../../public/Contact/background.png";
import { FaTwitter, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin'],
    display: 'swap'
});

const GetInTouch = () => {
    return (
        <div className='w-full h-full px-20 flex flex-col md:flex-row  justify-between mt-10 items-center '>
            {/* Left Side */}
            <div className={`w-screen md:w-[500px] flex flex-col justify-center text-center md:text-left items-center md:items-start px-6 md:px-10 gap-4 md:gap-6 ${montserrat.className}`}>
                <h5 className='text-xs sm:text-sm md:text-base font-bold tracking-wide text-[#252B42]'>Contact</h5>
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-wide text-[#252B42]'>
                    Get in touch today!
                </h1>
                <h4 className='text-sm sm:text-base md:text-lg font-normal leading-6 text-[#737373]'>
                    We know how large objects will act,<br />
                    but things on a small scale
                </h4>
                <h3 className='text-base sm:text-lg md:text-xl font-bold text-[#252B42]'>
                    Phone: +451 215 215
                </h3>
                <h3 className='text-base sm:text-lg md:text-xl font-bold text-[#252B42]'>
                    Email: example@email.com
                </h3>
                <div className='flex text-lg sm:text-xl md:text-2xl gap-4 text-[#252B42]'>
                    <FaTwitter />
                    <FaFacebookSquare />
                    <AiFillInstagram />
                    <FaLinkedin />
                </div>
             </div>

            {/* Right Side */}
           
                <Image
                    src={image}
                    alt='Background Image'
                    className=' w-screen h-full md:w-[600px] md:h-[600px] object-cover   rounded-md md:rounded-none'
                />
            
        </div>
    );
};

export default GetInTouch;
