"use client"
import React, { useState } from 'react';

export const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Implement subscription logic here
    alert(`Subscribed with ${email}`);
  };

  return (
    <div className="bg-black/90 shadow-md rounded-lg p-8 mb-8 text-white">
      <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
      <p className='mb-4 text-gray-100 text-sm'>Enter your email address below to subscribe to our newsletter and keep up to date with the latest news, discounts and special offers.</p>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="placeholder:text-white w-full px-3 py-2 rounded-md mb-4 bg-black/50"
          required
        />
        <button type="submit" className="w-full bg-[#b12b29] text-white px-4 py-2 rounded-md">
          Subscribe
        </button>
      </form>
    </div>
  );
};


