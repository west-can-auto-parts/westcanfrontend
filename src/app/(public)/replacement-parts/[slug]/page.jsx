"use client"

import React, {useState, useEffect} from 'react'


import { ImageGallery } from './_components/image-gallery'
import { ProductDescription } from './_components/product-description'
import { RelatedParts } from './_components/related-parts'
import { BreadCrumbs } from './_components/head-links'
import { PartSupplier } from './_components/part-supplier';


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

  const apiUrl = 'http://localhost:8080/api/product';


  
  // Refetch product data when productId or slug changes
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
  }, [productId, slug]); // Added `slug` as a dependency

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
          parentCategorySlug={stringToSlug(myProduct.subCategoryName)}
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
    </div>
  );
};

export default Page;
