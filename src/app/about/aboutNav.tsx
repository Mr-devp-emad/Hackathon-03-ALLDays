"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Montserrat } from "next/font/google";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';
import Button from '../components/button';

const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
});

const AboutNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      {/* Navigation Wrapper */}
      <div className="w-full flex justify-center  bg-white shadow-md">
        <div className={`${montserrat.className} container max-w-screen-xl flex justify-between items-center px-4 md:px-6 py-3`}>
          {/* Brand Name */}
          <div className="flex items-center">
            <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          </div>

          {/* Links and Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/home" className="text-sm font-bold text-[#737373] hover:text-blue-500">Home</Link>
            <Link href="/product" className="text-sm font-bold text-[#737373] hover:text-blue-500">Product</Link>
            <Link href="/pricing" className="text-sm font-bold text-[#737373] hover:text-blue-500">Pricing</Link>
            <Link href="/contact" className="text-sm font-bold text-[#737373] hover:text-blue-500">Contact</Link>
          </div>

          {/* Account and Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MdOutlineAccountCircle className="text-[#23A6F0]" />
              <button className="text-sm font-bold text-[#23A6F0]">Login</button>
            </div>
            <Button
              title="Become a member"
              style="bg-[#23A6F0] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            />
          </div>

          {/* Mobile Icons */}
          <div className="flex md:hidden items-center  space-x-4">
            <button className="text-xl">
              <CiSearch />
            </button>
            <button className="text-xl flex items-center">
              <IoCartOutline />
              <span className="ml-1 text-sm">1</span>
            </button>
            <button
              className="text-2xl"
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-white shadow-lg md:hidden z-10">
          <div className="flex flex-col items-center py-4 space-y-4">
            <Link href="/home" className="text-lg font-normal text-[#737373] hover:text-blue-500">Home</Link>
            <Link href="/product" className="text-lg font-normal text-[#737373] hover:text-blue-500">Product</Link>
            <Link href="/pricing" className="text-lg font-normal text-[#737373] hover:text-blue-500">Pricing</Link>
            <Link href="/contact" className="text-lg font-normal text-[#737373] hover:text-blue-500">Contact</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutNav;
