import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import image1 from "../../../public/About/team-1-user-1.jpg"
import image2 from "../../../public/About/team-1-user-2.jpg"
import image3 from "../../../public/About/team-1-user-3.jpg"

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })


const OurTeam = () => {
  return (
    <div>
        <div className='w-screen h-[1627px] md:h-[826px] flex justify-center items-center  bg-white '>
            <div className='w-full md:w-[1050px] h-[1609px] md:h-[819px] flex flex-col justify-center items-center py-[112px] gap-[112px] '>
                {/* Heading */}
                <div className={` ${montserrat.className}  md:w-[607px] h-[280px] md:h-[100px] flex flex-col gap-[10px] justify-center items-center `}>
                    <h2 className='font-bold text-[40px] leading-[50px] text-[#252B42]'>Meet Our Team</h2>
                    <p className='font-normal text-[14px] leading-[20px] text-[#737373] text-center'>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                      {/* card div */}
                <div className='w-full md:w-[1034px] h-[1270px] md:h-[383px] flex flex-col md:flex-row justify-center items-center   gap-[30px]'>
                    <div className={` ${montserrat.className} w-[316] h-[383px] flex flex-col  bg-white`}>
                        <Image src={image1} alt='image' className='w-[316px] h-[231px]'/>
                        <div className='w-[316px] h-[152px] flex justify-center items-center flex-col gap-[10px] p-8'>
                            <h5 className='font-bold text-[16px] leading-[24px] text-[#252B42]'>Username</h5>
                            <h6 className='font-bold text-[14px] leading-[24px] text-[#737373]'>Profession</h6>
                            <div className='w-[112px] h-[24px] flex justify-center items-center gap-5 text-[#23A6F0]'>
                             <FaFacebook className='w-4 h-4'/>
                             <FaInstagram className='w-4 h-4'/>
                             <FaTwitter className='w-4 h-4'/>
                             </div>
                        </div>
                    </div>
                    <div className={` ${montserrat.className} w-[316] h-[383px] flex flex-col  bg-white`}>
                        <Image src={image2} alt='image' className='w-[316px] h-[231px]'/>
                        <div className='w-[316px] h-[152px] flex justify-center items-center flex-col gap-[10px] p-8'>
                            <h5 className='font-bold text-[16px] leading-[24px] text-[#252B42]'>Username</h5>
                            <h6 className='font-bold text-[14px] leading-[24px] text-[#737373]'>Profession</h6>
                            <div className='w-[112px] h-[24px] flex justify-center items-center gap-5 text-[#23A6F0]'>
                             <FaFacebook className='w-4 h-4'/>
                             <FaInstagram className='w-4 h-4'/>
                             <FaTwitter className='w-4 h-4'/>
                             </div>
                        </div>
                    </div>
                    <div className={` ${montserrat.className} w-[316] h-[383px] flex flex-col  bg-white`}>
                        <Image src={image3} alt='image' className='w-[316px] h-[231px]'/>
                        <div className='w-[316px] h-[152px] flex justify-center items-center flex-col gap-[10px] p-8'>
                            <h5 className='font-bold text-[16px] leading-[24px] text-[#252B42]'>Username</h5>
                            <h6 className='font-bold text-[14px] leading-[24px] text-[#737373]'>Profession</h6>
                            <div className='w-[112px] h-[24px] flex justify-center items-center gap-5 text-[#23A6F0]'>
                             <FaFacebook className='w-4 h-4'/>
                             <FaInstagram className='w-4 h-4'/>
                             <FaTwitter className='w-4 h-4'/>
                             </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default OurTeam