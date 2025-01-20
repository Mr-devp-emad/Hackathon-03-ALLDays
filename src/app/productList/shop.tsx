"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { useCart } from "@/app/components/cartcheck"; // Import cart context
import staticImage1 from "../../../public/productlist/col-md-4.png";
import staticImage2 from "../../../public/productlist/col-md-4 (1).png";
import staticImage3 from "../../../public/productlist/col-md-4 (2).png";
import staticImage4 from "../../../public/productlist/col-md-4 (3).png";
import staticImage5 from "../../../public/productlist/col-md-4 (4).png";

// Sanity Client Setup
const sanity = createClient({
  projectId: "ebhd59z4",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

const urlFor = (source: any) => builder.image(source);

interface Product {
  _id: string;
  title: string;
  price: number; // Add price to the product interface
  productImage: {
    asset: {
      _ref: string;
    };
  };
}

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { addToCart } = useCart(); // Use cart context for adding items to cart

  // Fetch products from Sanity
  const fetchProducts = async () => {
    try {
      const query = `
        *[_type == "product"] | order(_createdAt asc) [0...8] {
          _id,
          title,
          price, // Fetch price from Sanity
          productImage
        }
      `;
      const data = await sanity.fetch(query);
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="w-screen flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>

      {/* Static Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[staticImage1, staticImage2, staticImage3, staticImage4, staticImage5].map(
          (image, index) => (
            <div
              key={index}
              className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Image src={image} alt={`Static Product ${index + 1}`} className="rounded-md" />
              <h2 className="text-lg font-bold mt-2">{`Static Product ${index + 1}`}</h2>
            </div>
          )
        )}
      </div>

      {/* Sanity Dynamic Products */}
      <h2 className="text-xl font-bold mt-8">Dynamic Products from Sanity</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="cursor-pointer border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {/* Product Image */}
            {product.productImage?.asset?._ref && (
              <Image
                src={urlFor(product.productImage).url()}
                alt={product.title}
                width={250}
                height={250}
                className="rounded-md object-cover"
              />
            )}
            <h2 className="text-lg font-bold mt-2">{product.title}</h2>
            <p className="text-gray-700 mt-1">${product.price.toFixed(2)}</p>

            {/* Add to Cart Button */}
            <button
              onClick={() =>
                addToCart({
                  id: product._id,
                  title: product.title,
                  price: product.price,
                  quantity: 1,
                  image: urlFor(product.productImage).url(), // Pass image URL to cart
                })
              }
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>

            {/* Link to Product Details */}
            <Link href={`/product2/${product._id}`}>
              <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
