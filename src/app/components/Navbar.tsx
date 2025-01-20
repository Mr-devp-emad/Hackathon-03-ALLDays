"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { LuPhone } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';



type NavbarType = {
    style?: string
};

const Navbar = (props: NavbarType) => {
    const { style } = props;

    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Redirect to search results page (e.g., /search?query=...)
        if (searchQuery.trim()) {
            window.location.href = `/search?query=${encodeURIComponent(searchQuery)}`;
        }
    };

    return (
        <div>
            {/* Topline */}
            <div className={`hidden md:flex justify-between items-center w-screen h-[58px] bg-[#252B42] ${style}`}>
                <div className={`w-auto md:w-[415px] h-[46px] flex gap-[10px] text-white`}>
                    <button className='w-[145px] h-[44px] flex items-center p-[10px] gap-[5px] rounded-[5px]'>
                        <LuPhone /> <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>(225) 555-0118</h6></button>
                    <button className='w-[260px] h-[44px] flex items-center p-[10px] gap-[5px] rounded-[5px]'>
                        <TfiEmail /> <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>michelle.rivera@example.com</h6></button>
                </div>
                <div className='w-[332px] h-[44px] p-[10px] gap-[10px] text-white'>
                    <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>Follow Us and get a chance to win 80% off</h6>
                </div>
                <div className='w-[233px] h-[46px] p-[10px] flex items-center gap-[10px] text-white'>
                    <h6 className='text-sm font-bold leading-6 tracking-[0.200]'>Follow Us:</h6>
                    <div className='w-[120px] h-[26px] flex'>
                        <a href="#" className='w-[26px] h-[26px] p-[5px]'><FaInstagram className='w-4 h-4' /></a>
                        <a href="#" className='w-[26px] h-[26px] p-[5px]'><FaYoutube className='w-4 h-4' /></a>
                        <a href="#" className='w-[26px] h-[26px] p-[5px]'><FaFacebook className='w-4 h-4' /></a>
                        <a href="#" className='w-[26px] h-[26px] p-[5px]'><FaTwitter className='w-4 h-4' /></a>
                    </div>
                </div>
            </div>

            {/* Navbar */}
            <div className={`w-screen h-[58px] mx-auto md:px-10 flex justify-between items-center  text-[#252B42]`}>
                <div className='w-[150px] h-[58px] py-[13px] gap-[10px]'>
                    <h3 className={`text-2xl font-bold pl-2 leading-8 tracking-[0.100] text-[#252B42]`}>Bandage</h3>
                </div>
                <div className='hidden md:flex md:w-[500px] h-[58px] items-center py-[2px]'>
                    <div className='flex w-[361px] h-[25px] gap-[15px]'>
                        <Link href="/" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]'>Home</Link>
                        <Link href="/productList" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0] flex items-center'>Shop <RiArrowDropDownLine className='text-[20px]' /></Link>
                        <Link href="/about" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]'>About</Link>
                        <Link href="/product" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]'>Blog</Link>
                        <Link href="/contact" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]'>Contact</Link>
                        <Link href="/team" className='text-sm font-bold leading-6 tracking-[0.200] hover:text-[#23A6F0]'>Pages</Link>
                    </div>
                </div>

                {/* Icons Section */}
                <div className='flex items-center gap-4'>
                    <Link href="/login" className='flex items-center text-[#23A6F0]'>
                        <MdOutlineAccountCircle className='text-base' /> Login / Register
                    </Link>
                    <form onSubmit={handleSearch} className='hidden md:flex items-center'>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className='border-b-[1px] border-[#23A6F0] focus:outline-none text-sm px-2'
                        />
                        <button type="submit" className='text-[#23A6F0]'><CiSearch className='text-base' /></button>
                    </form>
                    <Link href="/cart" className='flex items-center text-[#23A6F0]'>
                        <IoCartOutline className='text-base' />1
                    </Link>
                    <Link href="/wishlist" className='hidden md:flex items-center text-[#23A6F0]'>
                        <CiHeart className='text-base' />1
                    </Link>
                    <button
                        className="text-2xl md:hidden"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        {menuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-16 z-10 right-0 flex w-screen justify-center items-center">
                    <div className={`flex flex-col justify-center items-center w-[300px] h-[270] gap-7  bg-white bg-opacity-80 shadow-lg space-y-4 p-4`}>
                        <Link href="/" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Home</Link>
                        <Link href="/productList" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Shop</Link>
                        <Link href="/about" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">About</Link>
                        <Link href="/product" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Product</Link>
                        <Link href="/pricing" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Pricing</Link>
                        <Link href="/contact" className=" text-[#737373] text-[30px] font-normal leading-[45px] tracking-[0.200] hover:text-blue-500">Contact</Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
