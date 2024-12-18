"use client";

import { useRouter } from "next/navigation";
import parts from "@/datas/catalogue";

export const Grid4Layout = ({ products }) => {
  const router = useRouter();

  // Create a lookup table for titles
  const titleLookup = parts.reduce((acc, part) => {
    part.subParts.forEach(subPart => {
      subPart.parts.forEach(p => {
        acc[p.listing] = part.title;
      });
    });
    return acc;
  }, {});

  // Convert a string to a URL slug
  function stringToSlug(str) {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  }

  // Handle click event
  const handleClick = (listing) => {
    const title = titleLookup[listing] || '';

    // Determine the category slug based on the title
    const categorySlug = title === 'Replacement Parts' || title === 'Fluids & Lubricants'
      ? 'replacement-parts'
      : 'shop-supplies';

    // Generate the route slug
    const route = stringToSlug(listing);

    // Navigate to the product page with the category slug
    router.push(`/${categorySlug}/${route}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {products.map((part, index) => (
        <div
          key={index}
          className="bg-white p-4 hover:shadow-md hover:scale-105 transition border border-gray-100 cursor-pointer"
          onClick={() => handleClick(part.listing)}
        >
          <img
            src={part.imageUrl1}
            alt={part.listing}
            className="w-full h-40 object-contain"
          />
          <h3 className="font-semibold mb-2 text-center text-sm">{part.listing}</h3>
          <p className="text-gray-500 text-center text-xs">View Products</p>
        </div>
      ))}
    </div>
  );
};
