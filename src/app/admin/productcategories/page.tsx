'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  images: string[];
  parentId?: string;
  properties: { key: string; value: string }[];
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
}

interface Category {
  id: string;
  name: string;
}

const ProductCategoriesPage = () => {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  // Fetch categories and all available categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryRes = await fetch('/api/productcategories');
        const allCategoryRes = await fetch('/api/subcategories');
        
        if (!categoryRes.ok || !allCategoryRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const categoryData = await categoryRes.json();
        const allCategoryData = await allCategoryRes.json();

        setCategories(categoryData);
        setAllCategories(allCategoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle delete category
  const handleDelete = async (id: string) => {
    const res = await fetch(`/api/productcategories/${id}`, { method: 'DELETE' });

    if (res.ok) {
      setCategories(categories.filter((category) => category.id !== id));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Product Categories</h1>
      <button
          onClick={() => router.push('/admin/productcategories/create')}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
        >
          Add a product category
        </button>
      {/* Product Categories Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Featured</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best Seller</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {categories.map((category) => (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{category.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{category.description}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.featured ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      No
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {category.bestSeller ? (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Yes
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      No
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    className="bg-yellow-500 text-white px-4 py-1 rounded mr-2"
                    onClick={() => router.push(`/admin/productcategories/edit/${category.id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-1 rounded"
                    onClick={() => handleDelete(category.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductCategoriesPage;
