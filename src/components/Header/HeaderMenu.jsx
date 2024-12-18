"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaChevronDown, FaChevronUp, FaTimes, FaLocationArrow, FaChevronRight } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import parts from '@/datas/catalogue';

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Shop All' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/suppliers', label: 'Suppliers' },
    { href: '/our-advantage', label: 'Our Advantage' }
];

const stringToSlug = (str) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/--+/g, '-');
};

const HeaderMenu = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [bgImg, setBgImg] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
        setActiveCategory(null);
    };

    useEffect(() => {
        // Close dropdown if clicking outside of it
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubCategoryClick = (partTitle, subPart, subPartListing) => {
        let titleSlug = '';

        // Check if the title is "Replacement Parts" or "Fluids and Lubricants"
        if (partTitle === 'Replacement Parts' || partTitle === 'Fluids and Lubricants') {
            titleSlug = 'replacement-parts';
        } else {
            titleSlug = 'shop-supplies';
        }

        const subPartSlug = stringToSlug(subPartListing);
        router.push(`/shop/${subPartSlug}`);
    };

    const handlePartClick = (titleSlug, activeCategoryListing, partListing) => {
        if (titleSlug === 'Replacement Parts' || titleSlug === 'Fluids and Lubricants') {
            const slug = 'replacement-parts';
            const partSlug = stringToSlug(partListing);
            router.push(`/${slug}/${partSlug}`);
        } else {
            const slug = 'shop-supplies';
            const partSlug = stringToSlug(partListing);
            router.push(`/${slug}/${partSlug}`);
        }
       


    };

    return (
        <div className="hidden lg:block border-b-2 border-[#00000010] py-1 shadow-sm">
            <div className="w-10/12 mx-auto hidden lg:flex justify-between items-center gap-4">
                {/* Shop By Category Section */}
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="text-sm py-2 flex items-center gap-3 font-semibold border-r-2 border-[#00000010] h-full hover:text-[#b91b29] transition pr-6 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        {isDropdownOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
                        <span className="w-[150px]">Shop By Category</span>
                        {isDropdownOpen ? <FaChevronUp className="h-4 w-4" /> : <FaChevronDown className="h-4 w-4" />}
                    </div>

                    {/* Dropdown Content */}
                    {isDropdownOpen && (
                        <div className="absolute z-10 top-full left-0 mt-2 bg-white shadow-lg rounded-lg border border-gray-200 flex" onMouseLeave={closeDropdown}>
                            <div className="w-[300px]  bg-red-800 text-white p-4 max-h-[50vh] overflow-y-auto">
                                {/* Categories */}
                                {parts.map((part) =>
                                    part.subParts.map((subPart, index) => (
                                        <div
                                            onClick={() => handleSubCategoryClick(part.title, subPart, subPart.listing)}
                                            key={index}
                                            className="group text-sm px-4 py-2 font-semibold cursor-pointer text-gray-200 hover:text-white transition flex justify-between items-center"
                                            onMouseEnter={() => { setActiveCategory(subPart); setTitle(part.title); setBgImg(subPart.imageUrl1); }}
                                        >
                                            {subPart.listing}
                                            <FaChevronRight className="hidden group-hover:block h-4 w-4 " />
                                        </div>
                                    ))
                                )}
                            </div>

                            {/* Subcategories */}
                            {activeCategory && (
                                <div className={`bg-no-repeat w-[500px] p-4 ${activeCategory ? '' : 'opacity-50'}`} onMouseLeave={() => setActiveCategory(null)} style={{ backgroundImage: `url(${bgImg})`, backgroundPosition: 'bottom right', backgroundSize: '275px' }}>
                                    <div>
                                        {activeCategory.parts.map((part, index) => (
                                            <div key={index} onClick={() => handlePartClick(title, activeCategory.listing, part.listing)} className="cursor-pointer transition block px-4 py-2 text-sm text-gray-700 hover:bg-red-800 hover:text-white font-semibold">
                                                {part.listing}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <div className="flex justify-between w-full items-center">
                    <div className="flex text-sm gap-2 px-4 font-semibold">
                        {navItems.map((item) => (
                            <Link key={item.href} href={item.href} className="flex items-center gap-2 px-2">
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-2">
                        <Link href="/store" className="flex items-center gap-2">
                            Locate Us <FaLocationArrow className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;
