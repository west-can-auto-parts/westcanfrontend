"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export const RelatedProduct = ({ parts, myPart, mySubPart }) => {
    const [showAll, setShowAll] = useState(false);
    const router = useRouter();

    // Filter and map the related products
    const relatedProducts = parts
        .filter(part => part.title === myPart.title) // Filter by main part title
        .flatMap(part =>
            part.subParts
                .filter(subPart => subPart.listing !== mySubPart.listing) // Exclude the specific listing
        );

    // Display only top 5 products
    const productsToShow = showAll ? relatedProducts : relatedProducts.slice(0, 5);

    function stringToSlug(str) {
        return str
            .toLowerCase()                  // Convert the string to lowercase
            .trim()                         // Remove any leading or trailing whitespace
            .replace(/[^a-z0-9 -]/g, '')    // Remove all non-alphanumeric characters except for spaces and hyphens
            .replace(/\s+/g, '-')           // Replace spaces and consecutive spaces with a single hyphen
            .replace(/--+/g, '-');          // Replace multiple hyphens with a single hyphen
    }

    const handleClick = (route) => {
        router.push(`/shop/${stringToSlug(route)}`);
    };

    return (
        <div className="px-6 py-4">
            <h3 className="font-semibold pb-4">Related Parts</h3>
            <div className='flex flex-col gap-2 pt-4'>
                {productsToShow.map(subPart => (
                    <div
                        key={subPart.listing}
                        className='flex items-center gap-2 cursor-pointer'
                        onClick={() => handleClick(subPart.listing)} // Pass a function reference to onClick
                    >
                        <img src={subPart.imageUrl1} className='w-14 h-14 rounded-md object-cover' alt="" />
                        <p className="text-xs md:text-sm font-semibold hover:underline hover:text-red-800 transition">{subPart.listing}</p>
                    </div>
                ))}
            </div>
            {!showAll && relatedProducts.length > 5 && (
                <button
                    onClick={() => setShowAll(true)}
                    className='text-[#b12b29] font-semibold mt-4'
                >
                    View More
                </button>
            )}
            {showAll && (
                <button
                    onClick={() => setShowAll(false)}
                    className='text-[#b12b29] font-semibold mt-4'
                >
                    View Less
                </button>
            )}
        </div>
    );
};
