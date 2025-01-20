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
  { src: "/product/fixed-height.png", alt: "Product 1" },
  { src: "/product/fixed-height (1).png", alt: "Product 2" },
  { src: "/product/fixed-height (2).png", alt: "Product 3" },
  { src: "/product/fixed-height (3).png", alt: "Product 4" },
  { src: "/product/fixed-height (4).png", alt: "Product 5" },
  { src: "/product/fixed-height (5).png", alt: "Product 6" },
  { src: "/product/fixed-height (6).png", alt: "Product 7" },
  { src: "/product/fixed-height (7).png", alt: "Product 8" },
 
];

const BestProduct = () => {
  return (
    <div className="w-screen mt-10 flex justify-center  bg-[#FAFAFA]">
      <div className="w-[328px] md:w-[1124px] py-[80px] flex flex-col items-center gap-[120px]">
       
        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-[30px]">
          {products.map((product, index) => (
            <div key={index} className="w-[238px] h-[470px] bg-white mx-auto">
              <div className="w-[239px] h-[300px]">
                <Image src={product.src} alt={product.alt} width={239} height={300} className="hover:scale-95 duration-500" />
              </div>
              <CardText />
            </div>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default BestProduct
