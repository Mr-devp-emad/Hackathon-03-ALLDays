import Image from "next/image";
import CardText from "../components/card";

import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  weight: ['400', '700'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap'
});


// Define product data
const products = [
  { src: "/productlist/fixed-height.png", alt: "Product 1" },
  { src: "/productlist/fixed-height (1).png", alt: "Product 2" },
  { src: "/productlist/fixed-height (2).png", alt: "Product 3" },
  { src: "/productlist/fixed-height (3).png", alt: "Product 4" },
  { src: "/productlist/fixed-height (4).png", alt: "Product 5" },
  { src: "/productlist/fixed-height (5).png", alt: "Product 6" },
  { src: "/productlist/fixed-height (6).png", alt: "Product 7" },
  { src: "/productlist/fixed-height (7).png", alt: "Product 8" },
  { src: "/productlist/fixed-height (8).png", alt: "Product 9" },
  { src: "/productlist/fixed-height (9).png", alt: "Product 10" },
  { src: "/productlist/fixed-height (10).png", alt: "Product 11" },
  { src: "/productlist/fixed-height (11).png", alt: "Product 12" },
 
];

const List = () => {
  return (
    <div >
      <div className=" w-full mt-10  justify-center   py-[80px] flex flex-col  items-center gap-[80px]">
       
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.map((product, index) => (
            <div key={index} className="w-[238px] h-[515px] mx-auto">
              <div className="w-[239px] h-[300px]">
                <Image src={product.src} alt={product.alt} width={239} height={300} className="hover:scale-95 duration-500 hover:opacity-80" />
              </div>
              <CardText />
            </div>
          ))}
        </div>
        <div className={`${montserrat.className} w-[300px]    h-[75px] flex  items-center rounded-[7px] border-[1.35px]`}>
            <div className="flex justify-center items-center w-[84px] h-[74px]  ">
                <h2 className="text-sm font-bold leading-6 p-[25px] text-[#BDBDBD]  bg-[#F3F3F3] ">First</h2>
            </div>
            <div className="flex justify-center items-center w-[46px] h-[74px] ">
                <h2 className="text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0]  ">1</h2>
            </div>
            <div className="flex justify-center items-center w-[46px] h-[74px]">
                <h2 className=" text-sm font-bold leading-6 py-[25px] px-5 text-[#FFFFFF] bg-[#23A6F0]  ">2</h2>
            </div>
            <div className="flex justify-center items-center w-[46px] h-[74px]">
                <h2 className=" text-sm font-bold leading-6 py-[25px] px-5 text-[#23A6F0]  ">3</h2>
            </div>
            <div className="flex justify-center items-center w-[84px] h-[74px]">
                <h2 className="text-sm font-bold leading-6 p-[25px]  text-[#23A6F0] ">Next</h2>
            </div>
           


        </div>
        
      </div>
    </div>
  );
};

export default List
