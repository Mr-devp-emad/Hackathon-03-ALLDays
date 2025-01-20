import React from 'react';
import Image from 'next/image';
import editpack1 from "../../../public/Home/editpick1.png";
import editpack2 from "../../../public/Home/editpick2.png";
import editpack3 from "../../../public/Home/editpick3.png";
import editpack4 from "../../../public/Home/editpick4.png";
import Button from '../components/button';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const Editpick = () => {
  return (
    <div>
      <div className={`w-full h-auto px-6 md:px-[195px] flex flex-col bg-[#FAFAFA] ${montserrat.className}`}>
        <div className="w-full py-10 md:py-28 gap-6 md:gap-12 flex flex-col">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-center text-lg md:text-xl font-bold mb-2 text-[#252B42]">EDITOR&apos;S PICK</h2>
            <p className="text-center text-gray-500 mb-8">
              Problems trying to resolve the conflict between
            </p>
          </div>

          {/* Images Container */}
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-[30px] text-[#252B42]">
            {/* Image 1 */}
            <div className="relative w-full md:w-[500px] h-[600px] md:h-[510px]">
              <Image src={editpack1} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
              <div className="absolute left-4 bottom-4 md:bottom-8">
                <Button
                  title="MEN"
                  style="w-[170px] h-[48px] bg-[#FFFFFF] text-black text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold leading-6"
                />
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative w-full md:w-[270px] h-[600px] md:h-[510px]">
              <Image src={editpack2} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
              <div className="absolute left-4 bottom-4 md:bottom-8">
                <Button
                  title="WOMEN"
                  style="w-[170px] h-[48px] bg-[#FFFFFF] text-black text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold leading-6"
                />
              </div>
            </div>

            
            <div className="w-full md:w-[240px] flex flex-col gap-6">
              {/* Image 3 */}
              <div className="relative w-full h-[242px] md:h-[242px] ">
                <Image src={editpack3} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
                <div className="absolute left-4 bottom-4">
                  <Button
                    title="ACCESSORIES"
                    style="w-[170px] h-[48px] bg-[#FFFFFF] text-black text-[16px] hover:bg-gray-300 duration-500  rounded-none text-center font-bold leading-6"
                  />
                </div>
              </div>

              {/* Image 4 */}
              <div className="relative w-full h-[242px] md:h-[242px]">
                <Image src={editpack4} alt="image" className="w-full h-full object-cover hover:scale-95 duration-500" />
                <div className="absolute left-4 bottom-4">
                  <Button
                    title="KIDS"
                    style="w-[170px] h-[48px] bg-[#FFFFFF] text-black text-[16px] hover:bg-gray-300 duration-500 rounded-none text-center font-bold leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editpick;
