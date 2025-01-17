"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import suppliers from '@/datas/suppliers';

const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://frontendbackend-wn0p.onrender.com/api/blog'
    : 'http://localhost:8080/api/blog';
const fetchBlogs = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
}

const LatestNews = () => {
    const [visibleRows, setVisibleRows] = useState(20);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const myBlogs = await fetchBlogs();
                setBlogs(myBlogs);
            } catch (error) {
                console.error(error, error.message);
            }
        };
        getBlogs();
    }, []);

    const handleViewMore = () => {
        setVisibleRows(suppliers.length);
    };

    const router = useRouter();

    return (
        <section className='py-12'>
            <div className="">
                <h2 className="w-10/12 mx-auto text-2xl font-bold mb-6">Latest News & Blogs</h2>

                {/* Blog Section */}
                <div className="w-10/12 mx-auto mb-8">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={6}
                        slidesPerView={2}
                        pagination={{ clickable: true }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 4,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 4,
                            },
                        }} >
                        {blogs.map(blog => (
                            <SwiperSlide key={blog.id} className="py-2 h-full">
                                <div className='bg-white shadow-md rounded-lg h-full flex flex-col' onClick={() => router.push(`/blogs/${blog.id}`)}>
                                    <img src={blog.imageUrl} alt={blog.title} className="w-full h-52 object-cover mb-4 rounded-t" />
                                    <p className="font-semibold text-sm bg-white w-fit text-[#b12b29] px-4 py-1 rounded-md mt-[-30px]">{blog.categories[0]}</p>
                                    <div className='p-4 flex flex-1 flex-col'>
                                        <h4 className="text-md font-semibold mb-2 !line-clamp-2">{blog.title}</h4>
                                        <p className="text-xs text-gray-500 mb-4">{blog.date}</p>
                                        <a href={blog.link} className="text-[#b12b29] hover:underline mt-auto">Read More</a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Suppliers Section */}
                <div className="w-full py-6 md:py-12 bg-gray-100">
                    <div className="w-10/12 mx-auto">
                        <h3 className="text-2xl font-bold mb-8 text-center">Our Suppliers</h3>

                        <div className="w-full mx-auto">
                            <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={6}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 3,
                                        spaceBetween: 10,
                                    },
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                    },
                                    1280: {
                                        slidesPerView: 6,
                                        spaceBetween: 30,
                                    },
                                }}>
                                {suppliers.slice(0, visibleRows).map((supplier, index) => (
                                    supplier.logoUrl ? (
                                        <SwiperSlide key={index} className="bg-white border-2 p-3 rounded-md">
                                            <div
                                                className="bg-white h-[100px] bg-contain bg-no-repeat bg-center p-2 transition-all duration-300 ease-in-out filter grayscale hover:grayscale-0"
                                                style={{ backgroundImage: `url(${supplier.logoUrl})` }}
                                            />
                                            <p className="text-center text-xs text-gray-500 font-semibold">{supplier.brand}</p>
                                        </SwiperSlide>
                                    ) : null
                                ))}
                            </Swiper>
                            {visibleRows < suppliers.length && (
                                <div className="text-center mt-4">
                                    <button
                                        className="px-4 mt-6 py-2 text-white bg-[#b12b29] text-xs rounded"
                                        onClick={()=>router.push('/suppliers')}
                                    >
                                        View All
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Testimonial Section */}
                {/* Add your testimonials here */}
            </div>
        </section>
    );
}

export default LatestNews;
