"use client";

import React from 'react';
import Link from 'next/link';
import { HiUser } from 'react-icons/hi';
import { useAuth } from '../../../app/AuthContext'; // Import useAuth hook

export const UserButton = () => {
  const { username } = useAuth(); // Access the username from context

  return (
    <div className="flex gap-2 items-center">
      <div className="bg-[#b91b29] text-white rounded-md md:rounded-full p-1">
        <HiUser className="h-5 w-5 md:h-7 md:w-7" />
      </div>
      <Link href={username ? "/profile" : "/sign-in"} className="hidden md:flex items-center justify-end gap-2">
        <div className="hidden lg:block">
          {username ? (
            <>
              <p className="text-xs text-gray-500">Hello</p>
              <p className="font-semibold">{username}</p>
            </>
          ) : (
            <>
              <p className="text-xs text-gray-500">Hello, Log In</p>
              <p className="font-semibold">My Account</p>
            </>
          )}
        </div>
      </Link>
    </div>
  );
};
