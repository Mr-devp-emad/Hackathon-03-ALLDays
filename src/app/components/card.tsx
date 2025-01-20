import Image from "next/image";
import coloursIcon from "../../../public/Home/product-colors.png"

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

export default function CardText() {
  return (
    <div className={`${montserrat.className} w-[239px] h-[188px] py-[25px] px-[25px] flex flex-col items-center justify-center gap-[10px]`}>
      <h5 className="w-full  font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="w-full  font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      <div className="w-full px-[3px] py-[5px] flex justify-center gap-[5px]">
        <h5 className=" font-bold text-[16px] leading-[24px] text-[#BDBDBD]">
          $16.48
        </h5>
        <h5 className=" font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      <div className="w-[82.2px] h-[16px] flex justify-center">
        <Image src={coloursIcon} alt="colours" />
      </div>
    </div>
  );
}