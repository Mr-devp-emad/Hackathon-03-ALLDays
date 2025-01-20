import Image from "next/image";
import CardText from "../components/card";

// Define product data
const products = [
  { src: "/Home/product-cover-5.png", alt: "Product 1" },
  { src: "/Home/product-cover-5 (1).png", alt: "Product 2" },
  { src: "/Home/product-cover-5 (2).png", alt: "Product 3" },
  { src: "/Home/product-cover-5 (3).png", alt: "Product 4" },
  { src: "/Home/product-cover-5 (4).png", alt: "Product 5" },
  { src: "/Home/product-cover-5 (5).png", alt: "Product 6" },
  { src: "/Home/product-cover-5 (6).png", alt: "Product 7" },
  { src: "/Home/product-cover-5 (7).png", alt: "Product 8" },
];

const BestSeller = () => {
  return (
    <div className="w-screen mt-10 flex justify-center">
      <div className="w-[328px] md:w-[1124px] py-[80px] flex flex-col items-center gap-[80px]">
        {/* Text Section */}
        <div className="w-[300px] md:w-[500px] text-center">
          <h4 className="font-normal text-[20px] text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-bold text-[24px] text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-normal text-[14px] text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {products.map((product, index) => (
            <div key={index} className="w-[238px] h-[615px] mx-auto">
              <div className="w-[239px] h-[427px]">
                <Image src={product.src} alt={product.alt} width={239} height={427} className="hover:scale-95 duration-500 hover:opacity-80"/>
              </div>
              <CardText />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSeller;
