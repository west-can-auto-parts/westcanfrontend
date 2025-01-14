"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/AuthContext'; 

const ProfileNav = () => {
    const navLinks = [
        {
            label: 'Dashboard',
            href: '/',
        },
        {
            label: 'Garage',
            href: 'garage',
        },
        {
            label: 'Addresses',
            href: 'address',
        },
        {
            label: 'Edit',
            href: 'edit-profile',
        },
        {
            label: 'Password',
            href: 'password',
        },
    ];

    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();  // This will remove username from localStorage and update context
        router.push('/');  // Redirect to home page after logout
      };

    return (
        <div className='bg-white'>
            <p className="hidden md:block text-2xl font-bold pb-6 p-4">
                Navigation
            </p>
            <div className="text-sm md:text-md flex flex-row md:flex-col gap-3 pb-0 md:pb-4 border-b-2 overflow-x-auto flex-grow">
                {navLinks.map((navLink, index) => (
                    <button
                        key={index}
                        onClick={() => router.push(`/profile/${navLink.href}`)}
                        className='px-2 py-1 w-fit border-none md:px-4'
                    >
                        {navLink.label}
                    </button>
                ))}
            </div>
            <div className="text-sm md:text-md p-2 md:p-4">
                <button onClick={handleLogout} className='text-[#b12b29]'>
                    Logout
                </button>
            </div>
        </div>
    );
};

export default ProfileNav;
