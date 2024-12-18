"use client";

import React, { useState } from 'react';
import parts from '@/datas/catalogue';
import { ProductCards } from './_components/product-cards';
import { PageHeading } from '@/components/page-heading';

const Page = () => {
    const options = parts.filter(part => part.title === "Tools & Equipment" || part.title === "Industrial & Safety");
    const [filteredParts, setFilteredParts] = useState(options);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState([]);
    const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
    const [subcategoryDropdownOpen, setSubcategoryDropdownOpen] = useState(false);

    // Handle Category Selection
    const handleCategoryChange = (category) => {
        setSelectedCategories(prev => {
            const isSelected = prev.includes(category);
            if (isSelected) {
                return prev.filter(cat => cat !== category);
            } else {
                return [...prev, category];
            }
        });
    };

    // Handle Subcategory Selection
    const handleSubCategoryChange = (subCategory) => {
        setSelectedSubCategories(prev => {
            const isSelected = prev.includes(subCategory);
            if (isSelected) {
                return prev.filter(subCat => subCat !== subCategory);
            } else {
                return [...prev, subCategory];
            }
        });
    };

    // Filter parts based on selected categories and subcategories
    const filterParts = () => {
        const categoryFilteredParts = options.filter(part =>
            selectedCategories.length === 0 || selectedCategories.includes(part.title)
        );

        const finalFilteredParts = categoryFilteredParts.map(part => ({
            ...part,
            subParts: part.subParts.filter(subPart =>
                selectedSubCategories.length === 0 || selectedSubCategories.includes(subPart.listing)
            )
        })).filter(part => part.subParts.length > 0);

        setFilteredParts(finalFilteredParts);
    };

    // Update filtered parts when categories or subcategories change
    React.useEffect(() => {
        filterParts();
    }, [selectedCategories, selectedSubCategories]);

    return (
        <section>
            <PageHeading siteTitle={"Tools & Equipment"} />
            <div className='w-10/12 mx-auto py-2 md:py-4'>
                <div className='flex flex-wrap md:flex-nowrap gap-4'>
                    <div className="w-full md:w-1/4 md:sticky md:top-24 h-fit">
                        <div className="w-full bg-white rounded-md px-4 py-6 h-fit relative">
                            {/* Category Filter */}
                            <p className="text-[#b12b29] font-semibold text-xs md:text-sm pb-2">Filter By Category</p>
                            {/* Desktop Checkboxes */}
                            <div className="hidden md:block space-y-2">
                                {options.map(part => (
                                    <label key={part.title} className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(part.title)}
                                            onChange={() => handleCategoryChange(part.title)}
                                            className="form-checkbox"
                                        />
                                        <span>{part.title}</span>
                                    </label>
                                ))}
                            </div>
                            {/* Mobile Dropdown */}
                            <div className="md:hidden">
                                <button
                                    className="w-full bg-white border border-gray-300 rounded-md shadow-sm p-2"
                                    onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                                >
                                    {selectedCategories.length > 0 ? selectedCategories.join(', ') : 'Select Category'}
                                </button>
                                {categoryDropdownOpen && (
                                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
                                        {options.map(part => (
                                            <div
                                                key={part.title}
                                                className="p-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => {
                                                    handleCategoryChange(part.title);
                                                    setCategoryDropdownOpen(false);
                                                }}
                                            >
                                                {part.title}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Subcategory Filter */}
                            <p className="text-[#b12b29] font-semibold text-xs md:text-sm py-2 mt-4">Filter By Subcategory:</p>
                            {/* Desktop Checkboxes */}
                            <div className="hidden md:block max-h-[50vh] overflow-y-auto space-y-2">
                                {options
                                    .filter(part => selectedCategories.includes(part.title) || selectedCategories.length === 0)
                                    .flatMap(part => part.subParts)
                                    .filter((subPart, index, self) => self.findIndex(sp => sp.listing === subPart.listing) === index) // Unique subparts
                                    .map(subPart => (
                                        <label key={subPart.listing} className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                checked={selectedSubCategories.includes(subPart.listing)}
                                                onChange={() => handleSubCategoryChange(subPart.listing)}
                                                className="form-checkbox"
                                            />
                                            <span>{subPart.listing}</span>
                                        </label>
                                    ))}
                            </div>
                            {/* Mobile Dropdown */}
                            <div className="md:hidden">
                                <button
                                    className="w-full bg-white border border-gray-300 rounded-md shadow-sm p-2"
                                    onClick={() => setSubcategoryDropdownOpen(!subcategoryDropdownOpen)}
                                >
                                    {selectedSubCategories.length > 0 ? selectedSubCategories.join(', ') : 'Select Sub-Category'}
                                </button>
                                {subcategoryDropdownOpen && (
                                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-[50vh] overflow-y-auto">
                                        {options
                                            .filter(part => selectedCategories.includes(part.title) || selectedCategories.length === 0)
                                            .flatMap(part => part.subParts)
                                            .filter((subPart, index, self) => self.findIndex(sp => sp.listing === subPart.listing) === index) // Unique subparts
                                            .map(subPart => (
                                                <div
                                                    key={subPart.listing}
                                                    className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                                                    onClick={() => {
                                                        handleSubCategoryChange(subPart.listing);
                                                        setSubcategoryDropdownOpen(false);
                                                    }}
                                                >
                                                    {subPart.listing}
                                                </div>
                                            ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="rounded bg-black text-white mt-4">
                            <div className="p-4">
                                <p className="text-lg font-bold mb-4">Confused on What To Buy?</p>
                                <button className='px-4 w-full py-2 rounded-md bg-[#b12b29]'>View Our Catalogue</button>
                            </div>
                        </div>
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
