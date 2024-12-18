import React, { useState } from 'react';
import { FaChevronLeft, FaChevronDown, FaBackspace } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SubCategories = ({ myPart, mySubPart }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    // Function to convert string to slug
    const stringToSlug = (str) => {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-');
    };

    // Handle conditional routing
    const handleClick = (partTitle, productTitle) => {
        const formattedPartTitle = stringToSlug(partTitle);
        const formattedProductTitle = stringToSlug(productTitle);
        
        const path = partTitle === "Replacement Parts" || partTitle === "Fluids & Lubricants"
            ? `/${formattedPartTitle}/${formattedProductTitle}`
            : `/${formattedPartTitle}`;
        
        router.push(path);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <div className="border-b-2 px-6 py-6 bg-red-800 text-white border-b-white  shadow-sm">
            <div className='flex gap-1 items-center justify-between mb-4'>
                <Link href={`/categories`}>
                    <p className="font-bold text-sm  hover:underline">All Categories</p>
                </Link>
                <Link href={'/categories'}><FaBackspace className='h-3 w-3 ' /></Link>
            </div>

            <h3 className="text-sm font-semibold mb-4 ">{mySubPart.listing}:</h3>

            {/* For large screens */}
            <ul className="hidden sm:block list-none pb-3 space-y-2">
                {mySubPart.parts.map((category) => (
                    <li 
                        key={category.listing} 
                        className='text-sm list-disc ml-2 hover:underline cursor-pointer transition-colors'
                        onClick={() => handleClick(myPart.title, category.listing)}
                    >
                        {category.listing}
                    </li>
                ))}
            </ul>

            {/* For mobile devices */}
            <div className="block sm:hidden">
                <div className="relative">
                    <button
                        onClick={handleDropdownToggle}
                        className="bg-gray-200 p-2 w-full text-left rounded-md flex justify-between items-center transition-colors duration-200 hover:bg-gray-300"
                    >
                        <span className="text-sm font-semibold text-gray-800">
                            {isDropdownOpen ? 'Select a Category' : mySubPart.listing}
                        </span>
                        <FaChevronDown className={`h-3 w-3 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                        <ul className="absolute z-10 bg-white w-full mt-2 rounded-md shadow-lg border border-gray-200">
                            {mySubPart.parts.map((category) => (
                                <li 
                                    key={category.listing} 
                                    className="py-2 px-4 hover:bg-gray-100 text-sm cursor-pointer transition-colors"
                                    onClick={() => handleClick(myPart.title, category.listing)}
                                >
                                    {category.listing}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
