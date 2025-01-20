import React from 'react';
import Button from './button';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer className="bg-white py-10 ">
      <div className="max-w-7xl mx-auto ">
        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-center gap-6 md:gap-0 md:justify-between items-center bg-gray-100 px-6 md:px-14 lg:px-28 py-6'>
          <div>
            <h3 className={`${montserrat.className} text-2xl font-bold text-[#252B42]`}>Bandage</h3>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="#" className="text-blue-600 text-xl hover:scale-125" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="#" className="text-blue-600 text-xl hover:scale-125" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="text-blue-600 text-xl hover:scale-125" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-300 my-8"></div>

        {/* Middle Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 px-6 md:px-14 lg:px-28 mb-10">
          {/* Company Info */}
          <div className={`${montserrat.className} w-full md:w-auto`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Company Info</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Legal */}
          <div className={`${montserrat.className} w-full md:w-auto`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Legal</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>About Us</li>
              <li>Carrier</li>
              <li>We are hiring</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Features */}
          <div className={`${montserrat.className} w-full md:w-auto`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Features</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>Business Marketing</li>
              <li>User Analytics</li>
              <li>Live Chat</li>
              <li>Unlimited Support</li>
            </ul>
          </div>

          {/* Resources */}
          <div className={`${montserrat.className} w-full md:w-auto`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Resources</h4>
            <ul className="text-[#737373] font-bold space-y-2">
              <li>iOS & Android</li>
              <li>Watch a Demo</li>
              <li>Customers</li>
              <li>API</li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className={`${montserrat.className} w-full md:w-auto`}>
            <h4 className="text-lg font-bold text-[#252B42] mb-4">Get in Touch</h4>
            <form className="flex flex-col md:flex-row gap-5 ">
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-sm font-bold w-full md:w-auto"
              />
              <Button title="Subscribe" style="bg-blue-600 text-white font-bold hover:bg-blue-700 px-6 py-3" />
            </form>
            <p className="text-sm text-[#737373] mt-3 font-bold">
              Lore imp sum dolor Amit
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`${montserrat.className} text-center md:text-left w-full bg-[#FAFAFA] flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-14 lg:px-28 py-4 text-[#737373] text-sm font-bold`}>
          Made By Emad Ahmed with All Right Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;