"use client"

import React, { useEffect, useState } from 'react';
import { auth } from '../../auth';

interface Order {
  number: string;
  date: string;
  status: string;
  total: string;
}

interface Address {
  street: string;
}

interface PhoneNumber {
  number: string;
}

interface User {
  name: string;
  email: string;
  image?: string;
  addresses?: Address[];
  phoneNumbers?: PhoneNumber[];
}

interface Session {
  user?: User;
}

const Page: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedSession = await auth();
      
        setSession(fetchedSession as Session);
        
        // Fetch or set example orders data based on user session
        // Here you would fetch real orders data
        const exampleOrders: Order[] = [
          // Add orders data here
        ];
        setOrders(exampleOrders);
      } catch (error) {
        console.error('Failed to authenticate:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className='flex flex-wrap md:flex-nowrap gap-8'>
        <div className="w-full md:w-1/2 bg-white flex items-center justify-center gap-4">
          <div className='p-12 flex flex-col items-center justify-center'>
            <img 
              src={session?.user?.image || "https://www.gravatar.com/avatar?d=mp&s=88"} 
              alt="Profile Picture" 
              className='w-15 h-15 object-cover rounded-full mb-6' 
            />
            <div className="mb-6 text-center">
              <p className='font-bold text-xl'>
                {session?.user?.name || 'First Name Last Name'}
              </p>
              <p className="text-sm text-gray-500">
                {session?.user?.email || 'useremail@site.com'}
              </p>
            </div>
            <button className='bg-gray-100 text-sm font-bold px-4 py-2'>Edit Profile</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white gap-4">
          <div className='p-8'>
            <p className='font-bold mb-1'>
              Address :
            </p>
            <p className="text-sm mb-3">
              {session?.user?.addresses?.[0]?.street || 'No address available'}
            </p>
            <p className='font-bold mb-1'>
              Phone :
            </p>
            <p className="text-sm mb-3">
              {session?.user?.phoneNumbers?.[0]?.number || 'No phone number available'}
            </p>
            <p className='font-bold mb-1'>
              Email :
            </p>
            <p className="text-sm mb-3">
              {session?.user?.email || 'No email available'}
            </p>
            <button className='text-[#b12b29] font-semibold'>Edit Profile</button>
          </div>
        </div>
      </section>
      <section className='mt-6'>
        <div className="w-full mx-auto bg-white">
          <h2 className="text-xl font-bold p-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 px-4">
              <thead>
                <tr className="bg-white px-4">
                  <th className="py-2 px-4 border-b text-left">Number</th>
                  <th className="py-2 px-4 border-b text-left">Date</th>
                  <th className="py-2 px-4 border-b text-left">Status</th>
                  <th className="py-2 px-4 border-b text-left">Total</th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 ? (
                  orders.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50 text-sm">
                      <td className="py-2 px-4 border-b">{order.number}</td>
                      <td className="py-2 px-4 border-b">{order.date}</td>
                      <td className={`py-2 px-4 border-b ${order.status === 'Shipped' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {order.status}
                      </td>
                      <td className="py-2 px-4 border-b">{order.total}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="py-4 text-center text-gray-500">No orders found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
