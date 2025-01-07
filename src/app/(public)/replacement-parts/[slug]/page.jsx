"use client";

import React, { useState, useEffect } from "react";

import { ImageGallery } from "./_components/image-gallery";
import { ProductDescription } from "./_components/product-description";
import { RelatedParts } from "./_components/related-parts";
import { BreadCrumbs } from "./_components/head-links";
import { PartSupplier } from "./_components/part-supplier";

const Page = ({ params }) => {
  const slug = params.slug;

  function stringToSlug(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  }

  const [myProduct, setMyProduct] = useState(null);
  const [categoryType, setCategoryType] = useState("");
  const [categorySlug, setCategorySlug] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productId, setProductId] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const isProduction = process.env.NODE_ENV === "production";
  const apiUrl = isProduction
    ? "https://frontendbackend-production.up.railway.app/api/product"
    : "http://localhost:8080/api/product";

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/product-category/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        const data = await response.json();
        setMyProduct(data);
        determineCategory(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const determineCategory = (product) => {
    if (
      product.categoryName === "Replacement Parts" ||
      product.categoryName === "Fluids & Lubricants"
    ) {
      setCategoryType("Replacement Parts");
      setCategorySlug("replacement-parts");
    } else {
      setCategoryType("Tools & Equipments");
      setCategorySlug("tools");
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!myProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-10/12 mx-auto flex flex-wrap gap-2 md:gap-4">
      <div className="w-full">
        <BreadCrumbs
          categorySlug={categorySlug}
          categoryType={categoryType}
          parentCategory={myProduct.subCategoryName}
          parentCategorySlug={encodeURIComponent(myProduct.subCategoryName)}
          productLising={myProduct.name}
          productSlug={stringToSlug(myProduct.name)}
        />
        <div className="w-full flex flex-wrap md:flex-nowrap gap-2 md:gap-8">
          <ImageGallery myProduct={myProduct} />
          <ProductDescription myProduct={myProduct} />
        </div>
        <RelatedParts subCategoryName={myProduct.subCategoryName} />
      </div>
      <div className="w-full">
        <PartSupplier subCategoryName={myProduct.name} />
      </div>

      {showPopup && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">

          {/* Close Button */}
          <button
            className="absolute -top-6 -right-6 bg-white text-[#b12b29] font-bold border-2 border-[#b12b29] rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-[#b12b29] hover:text-white transition focus:outline-none shadow-md"
            onClick={(e) => {
              e.stopPropagation(); // Prevent the link from being triggered
              closePopup(); // Close the popup
            }}
          >
            ✕
          </button>
          <a
            href="https://store.westcanauto.com/store/portal"
            target="_blank"
            rel="noopener noreferrer"
            className="relative bg-[#b12b29] text-white shadow-lg border rounded-lg p-4 flex items-center gap-4 w-full max-w-lg cursor-pointer"
          >

            {/* Product Image */}
            <div className="flex-shrink-0">
              <img
                src={myProduct.imageUrl[0]} // Replace `imageUrl` with the correct field for product image
                alt={myProduct.name}
                className="w-16 h-16 object-cover rounded"
              />
            </div>

            {/* Product Details */}
            <div>
              <h3 className="font-bold text-lg mb-1">{myProduct.name}</h3>
              <p className="text-sm">{myProduct.description?.slice(0, 100)}...</p>
            </div>
          </a>
        </div>
      )}
    </div>
  );
};

export default Page;
