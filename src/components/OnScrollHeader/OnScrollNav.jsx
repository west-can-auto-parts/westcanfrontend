"use client"

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

import { useRouter } from 'next/navigation';

import { HiLocationMarker, HiUser } from 'react-icons/hi';
import { FaMagnifyingGlass, FaWhatsapp, FaChevronRight } from 'react-icons/fa6';

import parts from '@/datas/catalogue'


const OnScrollNav = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchBoxRef = useRef(null);

  const router = useRouter()

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const toggleCategory = (category) => {
    setExpandedCategory(prev => prev === category ? null : category);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    const allItems = parts.flatMap(category =>
      category.subParts.flatMap(subPart =>
        subPart.parts.map(part => ({
          label: part.listing,
          description: part.description,
          tags: [category.title, ...category.tags, subPart.listing, ...subPart.tags, ...part.tags],
          href: `/shop/${category.title}/${subPart.listing}/${part.listing}`,
          image: part.imageUrl || part.imgUrl
        }))
      )
    );
    const results = filterItemsByTags(allItems, searchQuery);
    setSearchResults(results);
    setShowResults(true);
  };

  const filterItemsByTags = (items, query) => {
    const queryTags = query.toLowerCase().split(' ').filter(tag => tag);
    return items.filter(item =>
      queryTags.every(queryTag =>
        item.tags.some(tag => tag.toLowerCase().includes(queryTag))
      )
    );
  };

  const handleClickOutside = (event) => {
    if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
      setSearchQuery('')
      setShowResults(false);
    }
  };

  const handleCloseSearch = () => {
    setSearchQuery('');
    setShowResults(false);

  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query) {
      handleSearch(event);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      router.push(`/search/${searchQuery}`);
    }
    setShowResults(false)
  };

  const handleResultClick = (href) => {
    router.push(href);
    setShowResults(false)
  };

  useEffect(() => {
    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowNavbar(true);
      } else {
        // Scrolling up
        setShowNavbar(false);
      }
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollY]);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Shop by Category', href: '/shop' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className={` md:block z-50 fixed top-0 left-0 w-full bg-white border-[1px solid] py-3 transition-transform duration-300 shadow-md ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="w-10/12 mx-auto">
        <ul className="flex justify-between items-center">
          <li className='flex justify-start gap-4 items-center'>
            <Link href={'/'}>
              <img src="https://westcanauto.com/wp-content/uploads/2023/05/WestCanAP_logoNOUSI-300x156.png" alt="Logo" className='w-[75px] lg:w-[100px]' />
            </Link>
            <form className="relative" ref={searchBoxRef} onSubmit={handleSearchSubmit}>
              <input
                type="text"
                className='hidden md:block bg-gray-100 h-full pl-4 pr-2 py-2 gap-4 w-[300px] lg:w-[500px]'
                placeholder='Enter Keyword or Part Number'
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type='submit' className='absolute top-1/2 right-2 transform -translate-y-1/2'>
                <FaMagnifyingGlass className='hidden md:block w-5 h-5 text-gray-600' />
              </button>
              {showResults && searchResults.length > 0 && (
                <div className='absolute top-full mt-2 bg-white border border-gray-300 shadow-lg z-50 w-full'>
                  {searchResults.map((result) => (
                    <div key={result.href} className='p-2 hover:bg-gray-100 cursor-pointer' onClick={() => { handleResultClick(result.href); setShowResults(false) }}>
                      <p className='font-semibold'>{result.label}</p>
                      <p className='text-sm text-gray-600'>{result.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </li>
          <li>
            <ul className="flex space-x-2 text-xs items-center">

              <button className='hidden md:block bg-[#b12b29] text-white px-4 py-2 rounded-md'>
                <Link href={'/store'} className='text-xs flex items-center gap-2'>
                  <span className='hidden md:block'>Our Stores </span><HiLocationMarker className='h-4 w-4' />
                </Link>
              </button>
              <button className='bg-[#b12b29] text-white px-4 py-2 rounded-md'>
                <Link href={'/profile'} className='text-xs flex items-center gap-2'>
                  <span className='block'>
                  My Account</span> <HiUser className='h-4 w-4' />
                </Link>
              </button>
            </ul>
          </li>


        </ul>
      </div>
    </nav>
  );
};

export default OnScrollNav;
