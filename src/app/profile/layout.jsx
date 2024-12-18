import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '../../auth'; // Adjust the import path to your auth module
import ProfileNav from './_components/ProfileNav';
import { FaLock } from 'react-icons/fa6';
import Link from 'next/link';

// Define the layout component
const Layout = async ({ children }) => {
  // Fetch the current session or user state
  const session = await auth();

  // If the user is not authenticated, redirect to the sign-in page
  if (!session || !session.user) {
    redirect('/sign-in');
    return null; // Ensure nothing is rendered after redirection
  }

  return (
    <main className='bg-gray-100 py-12'>
      <section className='w-10/12 mx-auto flex flex-wrap md:flex-nowrap gap-8'>
        <aside className='w-full md:w-1/4'>
          <ProfileNav />

          {/* Conditional rendering of the Admin button */}
          {session.user.role === 'ADMIN' && (
            <button className="mt-4  bg-[#b91b29] text-white font-bold py-2 px-4 rounded">
              <Link href='/admin' className='flex items-center justify-center gap-2'><FaLock/><p>Admin Panel</p></Link>
            </button>
          )}
        </aside>
        <section className='w-full md:w-3/4'>
          {children}
        </section>
      </section>
    </main>
  );
};

export default Layout;
