"use client"

import React, { useState } from 'react';
import parts from '@/datas/catalogue';
import { ProductCards } from './_components/product-cards';
import { PageHeading } from '@/components/page-heading'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter()
    const [filteredParts, setFilteredParts] = useState(parts);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [subcategoryDropdownOpen, setSubcategoryDropdownOpen] = useState(false);

    // Handle Category Change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setSelectedSubCategory(''); // Reset subcategory when changing category
        setCategoryDropdownOpen(false);

        if (category) {
            const filtered = parts.filter(part => part.title === category);
            setFilteredParts(filtered);
        } else {
            setFilteredParts(parts); // If no category is selected, show all parts
        }
    };

    // Handle Subcategory Change
    const handleSubCategoryChange = (subCategory) => {
        setSelectedSubCategory(subCategory);
        setSubcategoryDropdownOpen(false);

        if (subCategory) {
            const filtered = parts.map(part => ({
                ...part,
                subParts: part.subParts.filter(subPart => subPart.listing === subCategory)
            })).filter(part => part.subParts.length > 0);

            setFilteredParts(filtered);
        }
    };

    // Get the selected category object for subcategory filtering
    const selectedCategoryObj = parts.find(part => part.title === selectedCategory);

    return (
        <section>
            <PageHeading siteTitle={"Categories"} />
            <div className='w-10/12 mx-auto py-2 md:py-4'>
                <div className='flex flex-wrap md:flex-nowrap gap-4 '>
                    <div className="w-full md:w-1/4 md:sticky md:top-24 h-fit">
                        <div className=" w-full bg-white rounded-md px-4 py-6 h-fit relative " onMouseLeave={() => { setCategoryDropdownOpen(false); setSubcategoryDropdownOpen(false) }}>
                            <p className="text-[#b12b29] font-semibold: text-xs md:text-sm pb-2">Filter By Category</p>
                            {/* Category Dropdown */}
                            <div
                                className="cursor-pointer p-2 bg-white border border-gray-300 rounded-md shadow-sm"
                                onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                            >
                                {selectedCategory || 'Select Category'}
                            </div>
                            {categoryDropdownOpen && (
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg text-sm">
                                    {parts.map(part => (
                                        <div
                                            key={part.title}
                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                            onClick={() => handleCategoryChange(part.title)}
                                        >
                                            {part.title}
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Subcategory Dropdown */}
                            <p className="text-[#b12b29] font-semibold: text-xs md:text-sm py-2 mt-4">Filter By Sub Category:</p>

                            <div
                                className="relative cursor-pointer p-2 bg-white border border-gray-300 rounded-md shadow-sm "
                                onClick={() => setSubcategoryDropdownOpen(!subcategoryDropdownOpen)}
                            >
                                {selectedSubCategory || 'Select Sub-Category'}
                            </div>
                            {subcategoryDropdownOpen && selectedCategoryObj && selectedCategoryObj.subParts && (
                                <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-[50vh] overflow-y-auto">
                                    {selectedCategoryObj.subParts.map(subPart => (
                                        <div
                                            key={subPart.listing}
                                            className="flex items-center p-2 hover:bg-gray-100 cursor-pointer text-sm"
                                            onClick={() => handleSubCategoryChange(subPart.listing)}
                                        >
                                            <img
                                                src={subPart.imageUrl1}
                                                alt={subPart.listing}
                                                className="w-8 h-8 object-cover mr-2"
                                            />
                                            {subPart.listing}
                                        </div>
                                    ))}
                                </div>
                            )}


                        </div>
                        <div className="rounded bg-black text-white mt-4">
                            <div className="p-4">
                                <p className="text-lg font-bold mb-4">Confused on What To Buy?</p>
                                <button className='px-4 w-full py-2 rounded-md bg-[#b12b29]' onClick={()=>router.push('/categories')}>View Our Catalogue</button>
                            </div>
                        </div>
                        {/* <FeaturedProductsCarousel /> */}
                    </div>


                    {/* Product Cards */}
                    <div className="w-full md:w-3/4">
                     
                        <ProductCards parts={filteredParts} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;
