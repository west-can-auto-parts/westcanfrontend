"use client";

import React, { useEffect, useState } from 'react';

interface Order {
  number: string;
  date: string;
  status: string;
  total: string;
}

interface User {
  name: string;
  email: string;
  image?: string;
  address?: string;
  phoneNumber?: string;
}

const Page: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace these with your actual API endpoints
        const userResponse = await fetch('http://localhost:8080/api/user');
        const userData: User = await userResponse.json();
        setUser(userData);

        const ordersResponse = await fetch('http://localhost:8080/api/orders');
        const ordersData: Order[] = await ordersResponse.json();
        setOrders(ordersData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
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
              src={user?.image || "https://www.gravatar.com/avatar?d=mp&s=88"}
              alt="Profile Picture"
              className='w-15 h-15 object-cover rounded-full mb-6'
            />
            <div className="mb-6 text-center">
              <p className='font-bold text-xl'>
                {user?.name || 'First Name Last Name'}
              </p>
              <p className="text-sm text-gray-500">
                {user?.email || 'useremail@site.com'}
              </p>
            </div>
            <button className='bg-gray-100 text-sm font-bold px-4 py-2'>Edit Profile</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white gap-4">
          <div className='p-8'>
            <p className='font-bold mb-1'>Address :</p>
            <p className="text-sm mb-3">
              {user?.address || 'No address available'}
            </p>
            <p className='font-bold mb-1'>Phone :</p>
            <p className="text-sm mb-3">
              {user?.phoneNumber || 'No phone number available'}
            </p>
            <p className='font-bold mb-1'>Email :</p>
            <p className="text-sm mb-3">
              {user?.email || 'No email available'}
            </p>
            <button className='text-[#b12b29] font-semibold'>Edit Profile</button>
          </div>
        </div>
      </section>
      {/* <section className='mt-6'>
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
      </section> */}
    </>
  );
};

export default Page;
