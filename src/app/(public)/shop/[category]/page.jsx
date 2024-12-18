"use client"

import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import parts from '@/datas/catalogue';
import Link from 'next/link';
import suppliers from '@/datas/suppliers';

import { RelatedProduct } from './_components/related-product';
import { SubCategories } from './_components/sub-categories';
import { AboutPart } from './_components/about-part';
import { PartSupplier } from './_components/part-supplier';
import { PartTags } from './_components/part-tags';

const Page = ({ params }) => {
  const router = useRouter();

  const cat = decodeURIComponent(params.category);
  const slug = params.category; // Getting the slug from the URL

  // Helper function to convert the string to slug
  function stringToSlug(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  }

  // Reverse engineer the slug to find the corresponding subcategory and category
  const findSubPartBySlug = (slug) => {
    for (const category of parts) {
      for (const subPart of category.subParts) {
        const subPartSlug = stringToSlug(subPart.listing); // Convert subPart listing to slug format
        if (subPartSlug === slug) {
          return { subPart, category }; // Return matching subPart and category
        }
      }
    }
    return null; // Return null if no match is found
  };

  const mySubPartData = findSubPartBySlug(slug);

  // Handle if no subPart is found
  if (!mySubPartData) {
    return <div>Sub-category not found</div>;
  }

  const { subPart, category } = mySubPartData;
  const tags = subPart.tags;

  // Handle product click
  const handleClick = (product,  title) => {
    const categorySlug = title === 'Replacement Parts' || title === 'Fluids & Lubricants'
      ? 'replacement-parts'
      : 'shop-supplies';

    // Generate the route slug for the product
    const route = stringToSlug(product.listing);

    // Navigate to the product page with the category slug
    router.push(`/${categorySlug}/${route}`);
  };

  return (
    <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap w-10/12 mx-auto gap-8">
      <div className="w-full md:w-1/5 bg-white h-fit">
        <div className="mb-4">
          <AboutPart mySubPart={subPart} />
          <SubCategories mySubPart={subPart} myPart={category} />
          <RelatedProduct parts={parts} myPart={category} mySubPart={subPart} />
          <PartTags tags={tags} />
        </div>
      </div>

      <div className="w-full md:w-4/5 py-2 md:py-0">
        <div className="pb-2">
          <div className="flex flex-wrap gap-1 md:pb-4">
            <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/`}>
              Home
            </Link>
            /
            <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/categories/`}>
              Categories
            </Link>
            /
            <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/${stringToSlug(category.title)}/`}>
              {category.title}
            </Link>
            /
            <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/shop/${category.title}/${subPart.listing}`}>
              {subPart.listing}
            </Link>
          </div>
          <h1 className="text-2xl font-bold py-2">{subPart.listing}</h1>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {subPart.parts.map((product, index) => (
            <div key={index} className="" onClick={() => handleClick(product, mySubPartData.category.title)}>
              <div className="bg-white shadow-md rounded h-full flex flex-col justify-between group">
                <div>
                  <img src={product.imageUrl1} alt={product.title} className="w-full h-[15vh] md:h-[20vh] object-cover object-center mb-4 rounded" />
                  <div className="p-3 md:p-4 group-hover:bg-gray-100 transition">
                    <h3 className="text-sm md:text-lg font-semibold mb-2 !line-clamp-1">{product.listing}</h3>
                    <p className="text-sm text-gray-600 mb-2 hidden md:block !line-clamp-3">{product.content}</p>
                    <div className="flex justify-between items-center">
                      <button className="text-[#b12b29] py-1 text-sm font-semibold">Explore</button>
                      <FaChevronRight className="h-3 w-3 text-[#b12b29]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supplier Section */}
        <PartSupplier suppliers={suppliers} myPart={category} mySubPart={subPart} />
      </div>
    </div>
  );
};

export default Page;
