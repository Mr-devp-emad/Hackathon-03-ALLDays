"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/app/components/cartcheck";
import { useParams, useRouter } from "next/navigation";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity client setup
const sanity = createClient({
  projectId: "ebhd59z4",
  dataset: "production",
  apiVersion: "2025-01-13",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);

// Helper function to build image URLs
const urlFor = (source: any) => builder.image(source).url();

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: {
    asset: {
      _ref: string;
    };
  };
  reviews: Review[];
}

interface Review {
  _id: string;
  rating: number;
  comment: string;
  user: string;
}

const sampleReviews: Review[] = [
  {
    _id: "1",
    user: "John",
    rating: 5,
    comment: "Absolutely love this product! The quality is top-notch.",
  },
  {
    _id: "2",
    user: "Mr. Watson",
    rating: 4,
    comment: "Great value for the price. Slight delay in delivery but worth it.",
  },
  {
    _id: "3",
    user: "Alfred",
    rating: 3,
    comment: "It's decent, but I expected better packaging.",
  },
  {
    _id: "4",
    user: "Mr. Satoshi Nakamoto",
    rating: 5,
    comment: "Innovative design and superb craftsmanship!",
  },
  {
    _id: "5",
    user: "Eden",
    rating: 4,
    comment: "Very happy with my purchase. Would recommend to others.",
  },
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();
  const router = useRouter();
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const query = `
          *[_type == "product" && _id == "${id}"][0] {
            _id,
            title,
            description,
            price,
            productImage,
          }
        `;
        const data = await sanity.fetch(query);
        setProduct({ ...data, reviews: sampleReviews }); // Attach static sample reviews
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  const averageRating =
    product.reviews?.reduce((sum, review) => sum + review.rating, 0) /
      product.reviews?.length || 0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`${
          i < rating ? "text-yellow-500" : "text-gray-300"
        } text-lg`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Product image */}
        {product.productImage?.asset?._ref ? (
          <img
            src={urlFor(product.productImage)}
            alt={product.title}
            className="rounded-md w-full md:w-1/2"
          />
        ) : (
          <div className="w-full md:w-1/2 h-64 bg-gray-200 rounded-md flex items-center justify-center">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}

        {/* Product details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p>{product.description}</p>
          <p className="text-xl font-bold">Price: ${product.price}</p>
          <div className="flex gap-4">
            <button
              onClick={() =>
                addToCart({
                  id: product._id,
                  title: product.title,
                  price: product.price,
                  quantity: 1,
                  image: urlFor(product.productImage),
                })
              }
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <button
              onClick={() => router.push("/checkout")}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Checkout
            </button>
            <button
              onClick={() => router.push("/")}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Go Back to Home
            </button>
          </div>
        </div>
      </div>

      {/* Reviews and Ratings */}
      <div className="mt-8">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        <p className="text-gray-600">
          Average Rating: {averageRating.toFixed(1)} / 5 (
          {product.reviews?.length || 0} reviews)
        </p>

        <div className="mt-4 border-t pt-4">
          {product.reviews?.map((review) => (
            <div key={review._id} className="border-b py-4">
              <div className="flex items-center gap-2">
                {renderStars(review.rating)}
                <p className="text-gray-600">by {review.user}</p>
              </div>
              <p className="mt-1">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Submit a Review */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Submit Your Review</h3>
          <div className="flex flex-col gap-2 mt-2">
            <label>
              Rating:
              <input
                type="number"
                value={newReview.rating}
                onChange={(e) =>
                  setNewReview({ ...newReview, rating: Number(e.target.value) })
                }
                max="5"
                min="1"
                className="border rounded p-2 w-full"
              />
            </label>
            <label>
              Comment:
              <textarea
                value={newReview.comment}
                onChange={(e) =>
                  setNewReview({ ...newReview, comment: e.target.value })
                }
                className="border rounded p-2 w-full"
              />
            </label>
            <button
              onClick={() => alert("Submit Review Functionality Coming Soon!")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
