import React from 'react';
import ProfileNav from './_components/ProfileNav';
import { FaLock } from 'react-icons/fa6';
import Link from 'next/link';

// Define the layout component
const Layout = ({ children }) => {
  return (
    <main className='bg-gray-100 py-12'>
      <section className='w-10/12 mx-auto flex flex-wrap md:flex-nowrap gap-8'>
        <aside className='w-full md:w-1/4'>
          {/* Profile navigation */}
          <ProfileNav />

          {/* Admin button (if needed, uncomment or modify as per your requirements) */}
          {/* <button className="mt-4 bg-[#b91b29] text-white font-bold py-2 px-4 rounded">
            <Link href='/admin' className='flex items-center justify-center gap-2'>
              <FaLock />
              <p>Admin Panel</p>
            </Link>
          </button> */}
        </aside>
        <section className='w-full md:w-3/4'>
          {children}
        </section>
      </section>
    </main>
  );
};

export default Layout;
