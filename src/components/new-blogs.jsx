"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export const NewBolgs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchAllBlogs = async () => {
            try {
                const response = await fetch(`/api/blogs`)
                const data = await response.json()
                setBlogs(data)
            }
            catch (error) {
                console.log(error)
            }
        }


        fetchAllBlogs();
    });

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!blogs) {
        return <p>Blog post not found.</p>;
    }

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <h3 className="text-lg font-semibold mb-4">Latest Blogs</h3>
            {blogs.slice(0, 4).map(post => (
                <div key={post._d} className="flex items-center mb-4">
                    <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-20 h-20 object-cover rounded-md mr-4"
                    />
                    <div>
                        <h4 className="text-sm font-semibold">{post.title}</h4>
                        <Link href={`/blogs/${post._id}`} className="text-[#b12b29] hover:underline text-xs">Read More</Link>
                    </div>
                </div>
            ))}
        </div>
    )
}
