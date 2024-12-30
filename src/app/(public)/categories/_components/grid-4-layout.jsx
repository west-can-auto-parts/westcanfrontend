"use client";

import { useRouter } from "next/navigation";

export const Grid4Layout = ({ products }) => {
  const router = useRouter();
  console.log('products', products);

  // Handle click event
  const handleClick = (listing, category) => {

    // Determine the category slug based on the category name
    const categorySlug = category === 'Replacement Parts' || category === 'Fluids & Lubricants'
      ? 'replacement-parts'
      : 'shop-supplies';

    // Navigate to the specific product page with category and subcategory
    router.push(`/${categorySlug}/${listing}`);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {products.map((part, index) => (
        <div
          key={index}
          className="bg-white p-4 hover:shadow-md hover:scale-105 transition border border-gray-100 cursor-pointer"
          onClick={() => handleClick(part.name, part.categoryName, part.subCategoryName)}
        >
          <img
            src={part.imageUrl[0]}
            alt={part.name}
            className="w-full h-40 object-contain"
          />
          <h3 className="font-semibold mb-2 text-center text-sm">{part.name}</h3>
          <p className="text-gray-500 text-center text-xs">View Products</p>
        </div>
      ))}
    </div>
  );
};
