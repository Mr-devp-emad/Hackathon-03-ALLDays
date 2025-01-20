import React from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaEye } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import image from "../../../public/product/product1.jpg"
import image1 from "../../../public/product/tumbnail.png"
import image2 from "../../../public/product/tumbnail-1.png"
import color from "../../../public/Home/product-colors.png"
import Button from "../components/button";



import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});


const ProductCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 mt-5 bg-[#FAFAFA] rounded-md shadow-lg">
      {/* Left: Product Images */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            src={image}
            alt="Floating Phone"
            width={300} height={300}
            className="w-[506px] h-[450px] object-cover rounded-md"
          />
          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400  ">
          <IoIosArrowBack />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-gray-400 ">
          <IoIosArrowForward />
          </button>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2">
          <Image
            src={image1}
            alt="Thumbnail 1"
            className="w-[60px] h-[60px] object-cover rounded-md border border-gray-300 cursor-pointer"
          />
          <Image
            src={image2}
            alt="Thumbnail 2"
            className="w-[60px] h-[60px] object-cover rounded-md border border-gray-300 cursor-pointer"
          />
        </div>
      </div>

      {/* Right: Product Details */}
      <div className={`${montserrat.className} flex flex-col gap-0 md:gap-4  `}>
        {/* Title */}
        <h4 className="text-2xl font-normal leading-7 text-[#252B42]  mb-2">Floating Phone</h4>

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500 mb-2">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-sm" />
          ))}
          <span className="text-[#737373] text-sm">(10 Reviews)</span>
        </div>

        {/* Price */}
        <h3 className="text-xl font-bold leading-8 text-[#252B42] mb-2">$1,139.33</h3>

        {/* Availability */}
        <h6 className="text-sm  font-bold leading-6 text-[#737373] mb-4">
          Availability: <span className="text-[#23A6F0] font-bold leading-6 text-sm ">In Stock</span>
        </h6>

        {/* Description */}
        <p className="text-sm w-[300px] md:w-[464px] text-[#858585] font-normal leading-5 mb-4">
          Met minim Mollie non deserunt Alamo est sit aliqua dolor do amet sent. 
          Reelit officia consequat duis enim velit mollit. Exercitation veniam 
          consequat sunt nostrud amet.
        </p>
        <div className="border border-[#BDBDBD] w-[300px] md:w-[510px] m-3"></div>

        <Image src={color} alt="colors" height={30} width={150} className="m-3"/>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button title="Select Options" style="px-4 py-2 bg-[#23A6F0] text-white text-sm font-medium rounded-md hover:bg-blue-700"/>
            <AiOutlineHeart className="text-xl text-[#252B42]" />
            <AiOutlineShoppingCart className="text-xl text-[#252B42]" />
            <FaEye className="text-xl text-[#252B42]" />
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
