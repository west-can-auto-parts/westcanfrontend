"use client";

import React, { useState, useEffect } from "react";

export const PartSupplier = ({ subCategoryName }) => {
  const [showMore, setShowMore] = useState(false);
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://westcanuserbackend.onrender.com/api/suppliers'
    : 'http://localhost:8080/api/suppliers';

  // const brand=subCategoryName.brandAndPosition;
  // console.log("BrandWithPosition: ", brand);

  useEffect(() => {
    if (!subCategoryName || !subCategoryName.brandAndPosition) return;

    const fetchSuppliers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl}/all`);
        if (!response.ok) {
          throw new Error("Failed to fetch suppliers");
        }
        const allSuppliers = await response.json();
        console.log("SupplierList: ",allSuppliers);

        // Filter and sort suppliers based on brandAndPosition
        const brandPositions = subCategoryName.brandAndPosition || {};
        const filteredAndSortedSuppliers = allSuppliers
          .filter(supplier => brandPositions[supplier.id] !== undefined)
          .sort((a, b) => {
            const positionA = brandPositions[a.id] || 0;
            const positionB = brandPositions[b.id] || 0;
            return positionA - positionB;
          });

        setSuppliers(filteredAndSortedSuppliers);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, [subCategoryName, apiUrl]);

  // Show limited suppliers on mobile, all on desktop
  const suppliersToDisplay = isMobile && !showMore ? suppliers.slice(0, 4) : suppliers;

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
        {suppliersToDisplay.map((supplier) =>
          supplier.logoUrl ? (
            <div key={supplier.id} className="bg-white p-3">
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

      {isMobile && !showMore && suppliers.length > 4 && (
        <button
          onClick={() => setShowMore(true)}
          className="mt-4 text-[#b21b29] font-semibold"
        >
          View More
        </button>
      )}

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