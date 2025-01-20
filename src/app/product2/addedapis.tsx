// "use client";
// import React, { useEffect, useState } from "react";
// import { createClient } from "@sanity/client";
// import imageUrlBuilder from "@sanity/image-url";

// // Sanity Client Setup
// const sanity = createClient({
//   projectId: "ebhd59z4",
//   dataset: "production",
//   apiVersion: "2025-01-13",
//   useCdn: true,
// });

// // Create image URL builder instance
// const builder = imageUrlBuilder(sanity);

// // Function to get the full image URL
// const urlFor = (source: any) => builder.image(source);

// interface Product {
//   _id: string;
//   title: string;
//   price: number;
//   description: string;
//   discountPercentage: number;
//   productImage: {
//     asset: {
//       _ref: string;
//     };
//   };
//   tags: string[];
//   isNew: boolean;
// }

// export const ProductCards: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [cart, setCart] = useState<Product[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = async () => {
//     try {
//       const query = `
//         *[_type == "product"] {
//           _id,
//           title,
//           price,
//           description,
//           discountPercentage,
//           productImage,
//           tags
//         }
//       `;
//       const data = await sanity.fetch(query);
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addToCart = (product: Product) => {
//     setCart((prevCart) => {
//       const isAlreadyInCart = prevCart.some((item) => item._id === product._id);
//       if (isAlreadyInCart) {
//         alert(`${product.title} is already in the cart`);
//         return prevCart;
//       }
//       return [...prevCart, product];
//     });
//   };

//   const truncateText = (text: string, maxLength: number) => {
//     return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const filteredProducts = products.filter(
//     (product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       product.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
//   );

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Products</h1>
      
//       {/* Search Bar */}
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="mb-4 p-2 border rounded w-full"
//       />

//       {/* Product Grid */}
//       {loading ? (
//         <p>Loading products...</p>
//       ) : filteredProducts.length === 0 ? (
//         <p className="text-center text-gray-600">No products found</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {filteredProducts.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300"
//             >
//               {/* Product Image */}
//               {product.productImage?.asset?._ref ? (
//                 <img
//                   src={urlFor(product.productImage).url()}
//                   alt={product.title}
//                   className="w-full h-48 rounded-md object-cover"
//                   loading="lazy"
//                 />
//               ) : (
//                 <div className="w-full h-48 rounded-md bg-gray-200 flex items-center justify-center">
//                   <p className="text-gray-500">No Image</p>
//                 </div>
//               )}

//               {/* Product Details */}
//               <h2 className="text-lg font-semibold text-gray-800 mt-4">{product.title}</h2>
//               <p className="text-sm text-gray-600">{truncateText(product.description, 80)}</p>
//               <div className="flex justify-between items-center mt-2">
//                 <p className="text-slate-600 font-bold">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 {product.discountPercentage > 0 && (
//                   <p className="text-green-500 font-bold">
//                     {product.discountPercentage}% OFF
//                   </p>
//                 )}
//               </div>

//               {/* Product Tags */}
//               <div className="mt-4 flex flex-wrap gap-2">
//                 {product.tags.map((tag, index) => (
//                   <span
//                     key={index}
//                     className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Add to Cart */}
//               <button
//                 onClick={() => addToCart(product)}
//                 className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Cart Summary */}
//       <div className="mt-8 bg-gray-100 p-4 rounded-md">
//         <h3 className="text-lg font-semibold text-gray-800">Cart Summary</h3>
//         <p>Total Items: {cart.length}</p>
//         <p>
//           Total Price: $
//           {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
//         </p>
//       </div>
//     </div>
//   );
// };
