
import Image from "next/image";
import ManImage from "../../../public/Home/shop-hero-2.png";
import Button from "../components/button";


import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const VitaClassic= () => {
    return(
        <div className=" w-full rounded-[5px] h-[1040px]  md:h-full mt-20 bg-[#23856D] ">
            
             <div className="w-screen h-[709px] ">
                <div className="md:w-[1036px] h-[709px] md:h-[711px] flex absolute md:left-[210px] py-[110px] gap-28 md:gap-20 ">
                    <div className={`${montserrat.className} w-screen md:w-[1049px] h-[599px] flex  items-center flex-col md:flex-row gap-28 md:gap-[30px]  `}>
                        <div className="w-[300px] md:w-[509px] h-[432px] pt-[60px] flex flex-col items-center md:items-start gap-[20px] md:gap-[30px] text-white ">
                            <h4 className="w-[154px] h-[30px] font-normal text-[20px] leading-[30px] md:text-left text-center ">SUMMER 2020</h4>
                            <h1 className=" w-[300px] md:w-[509px] h-[100px] md:h-[160px] font-bold text-[40px] md:text-[58px] leading-10 md:leading-[80px] md:text-left text-center ">Vita Classic Product</h1>
                            <p className="w-[300px] h-[40px] font-medium text-[14px] leading-[20px] md:text-left text-center ">We know how large objects will act, We know how are objects will act, We know</p>
                            <div className=" w-[200px] md:w-[295px] h-[52px] flex flex-col md:flex-row items-center md:text-left text-center gap-[34px]">
                                <h3 className="w-[77px] h-[32px] font-bold text-[24px] leading-[32px] md:text-left text-center ">$16.48</h3>
                                <Button title="ADD TO CART" style="text-[14px] bg-[#2DC071] font-bold leading-[22px] hover:bg-green-600 tracking-[0.200]"/>
                            </div>
                        </div>
                        <div className=" w-[350px] md:w-[510px] ">
                          <Image src={ManImage} alt="manpicture"/>
                        </div>
                    </div>
                </div>
             </div>
           
        </div>
    )
}

export default VitaClassic