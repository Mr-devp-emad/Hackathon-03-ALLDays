
import React from 'react';
import { LuPhone } from "react-icons/lu";
import { IoLocationSharp } from "react-icons/io5";
import { PiArrowBendRightDownBold } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import Button from '../components/button';

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});

const ContactDeals = () => {
  return (
    <div className="w-full min-h-screen flex flex-col  items-center py-10">
      {/* Heading */}
      <div className={` ${montserrat.className} w-[90%] max-w-4xl text-center flex flex-col items-center gap-3`}>
        <h6 className="text-sm font-bold tracking-wide text-[#252B42]">VISIT OUR OFFICE</h6>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight text-[#252B42]">
          We help small businesses with big ideas
        </h2>
      </div>

      {/* Cards */}
      <div className={` ${montserrat.className} flex flex-col md:flex-row justify-center items-center gap-6 py-10 w-full`}>
        {/* Contact Card */}
        <div className={` ${montserrat.className} bg-white rounded-lg p-6 w-[90%] max-w-sm flex flex-col gap-4 items-center text-center shadow-md`}>
          <LuPhone className="text-6xl text-[#23A6F0] " />
          <h5 className="text-sm font-bold text-[#252B42]">georgia.young@example.com</h5>
          <h5 className="text-sm font-bold text-[#252B42]">georgia.young@ple.com</h5>
          <h5 className="text-base font-bold text-[#252B42]">Get Support</h5>
          <Button title="Submit Request" style="text-[#23A6F0] px-8 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white border-2 border-[#23A6F0]" />
        </div>

        {/* Location Card */}
        <div className={` ${montserrat.className} bg-[#252B42] text-white rounded-lg p-6 w-[90%] max-w-sm flex flex-col gap-4 items-center text-center shadow-md`}>
          <IoLocationSharp className="text-6xl text-[#23A6F0]" />
          <h5 className="text-sm font-bold">georgia.young@example.com</h5>
          <h5 className="text-sm font-bold">georgia.young@ple.com</h5>
          <h5 className="text-base font-bold">Get Support</h5>
          <Button title="Submit Request" style="text-[#23A6F0] px-8 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white border-2 border-[#23A6F0]" />
        </div>

        {/* Email Card */}
        <div className={` ${montserrat.className} bg-white rounded-lg p-6 w-[90%] max-w-sm flex flex-col gap-4 items-center text-center shadow-md`}>
          <MdEmail className="text-6xl text-[#23A6F0]" />
          <h5 className="text-sm font-bold text-[#252B42]">georgia.young@example.com</h5>
          <h5 className="text-sm font-bold text-[#252B42]">georgia.young@ple.com</h5>
          <h5 className="text-base font-bold text-[#252B42]">Get Support</h5>
          <Button title="Submit Request" style="text-[#23A6F0] px-8 py-3 rounded-full hover:bg-[#23A6F0] hover:text-white border-2 border-[#23A6F0]" />
        </div>
      </div>

      {/* Let's Talk Section */}
      <div className="w-full flex justify-center items-center  py-10 bg-gray-50">
        <div className={` ${montserrat.className} flex flex-col items-center gap-6`}>
          <PiArrowBendRightDownBold className="text-5xl md:text-6xl -rotate-12 text-[#23A6F0]" />
          <h5 className="text-sm font-bold text-[#252B42]">WE CAN&apos;T WAIT TO MEET YOU</h5>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight text-[#252B42]">Let&apos;s Talk</h2>
          <Button title="Try it free now" style="text-sm font-bold hover:bg-white hover:text-[#23A6F0] text-white bg-[#23A6F0] px-10 py-3 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default ContactDeals;