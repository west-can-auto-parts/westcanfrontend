"use client";

import React, { useState, useEffect } from "react";

export const PartSupplier = ({ subCategoryName }) => {
  const [showMore, setShowMore] = useState(false);
  const [suppliers, setSuppliers] = useState([]); // State to hold suppliers
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  // Ensure `mySubPart` is valid and has the required property
  const currentListing = subCategoryName || "";

  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://westcanuserbackend.onrender.com/api/suppliers'
    : 'http://localhost:8080/api/suppliers';
  // Fetch suppliers by product category from the backend
  useEffect(() => {
    if (!currentListing) return;

    const fetchSuppliers = async () => {
      setLoading(true);
      setError(null);
      try {
        const encodedSubCategoryName = encodeURIComponent(subCategoryName);
        const response = await fetch(`${apiUrl}/search?query=${encodedSubCategoryName}`);
        if (!response.ok) {
          throw new Error("Failed to fetch suppliers");
        }
        const data = await response.json();
        setSuppliers(data); // Set the suppliers data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, [currentListing]);

  // Show limited suppliers on mobile, all on desktop
  const suppliersToDisplay =
    isMobile && !showMore ? suppliers.slice(0, 4) : suppliers;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <p className="text-xl font-bold py-2 md:py-4">Our Suppliers</p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        {suppliersToDisplay.map((supplier, index) =>
          supplier.logoUrl ? (
            <div key={index} className="bg-white p-3">
              <div
                className="bg-white h-[100px] bg-contain bg-no-repeat bg-center p-2"
                style={{ backgroundImage: `url(${supplier.logoUrl})` }}
              />
              <p className="text-center text-xs text-gray-500 font-semibold">
                {supplier.name}
              </p>
            </div>
          ) : null
        )}
      </div>

      {/* Button to show more suppliers on mobile */}
      {isMobile && !showMore && suppliers.length > 4 && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-4 text-[#b21b29] font-semibold"
        >
          View More
        </button>
      )}

      {/* Button to collapse back the suppliers list */}
      {isMobile && showMore && (
        <button
          onClick={() => setShowMore(false)}
          className="mt-4 text-[#b21b29] font-semibold"
        >
          View Less
        </button>
      )}
    </div>
  );
};
