import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/About/col-md-2.png'
import image2 from '../../../public/About/fa-brands-2.png'
import image3 from '../../../public/About/col-md-2 (1).png'
import image4 from '../../../public/About/col-md-2 (2).png'
import image5 from '../../../public/About/col-md-2 (3).png'
import image6 from '../../../public/About/col-md-2 (4).png'




import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
    weight: ['400', '700'],
    style: 'normal',
    subsets:['latin'],
    display: 'swap'
    })

const Companies = () => {
  return (
    <div>
        <div className='w-screen h-[1000px] md:h-[479px] flex flex-col justify-center items-center bg-[#FAFAFA]'>
            <div className='w-full  md:w-[1050px] h-[1192px] md:h-[479px] py-20 gap-6 flex flex-col justify-center items-center '>
                <div className={` ${montserrat.className} w-[350px] md:w-[864px] h-[240px] md:h-[120px] gap-[30px] flex flex-col justify-center items-center`}>
                    <h2 className='text-[40px] font-bold leading-[50px] text-center text-[#252B42]'>Big Companies Are Here</h2>
                    <p className='text-sm font-normal text-center  text-[#737373] leading-5'>Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                 {/* logos */}
                <div className='w-full  md:w-[1054px] h-[952px] md:h-[175px] flex flex-col md:flex-row justify-center items-center py-[50px] gap-[60px] md:gap-[30px]'>
                <Image src={image1} alt='logo' className='hover:scale-110'/>
                <Image src={image2} alt='logo'className='hover:scale-110'/>
                <Image src={image3} alt='logo'className='hover:scale-110'/>
                <Image src={image4} alt='logo'className='hover:scale-110'/>
                <Image src={image5} alt='logo'className='hover:scale-110'/>
                <Image src={image6} alt='logo'className='hover:scale-110'/>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Companies