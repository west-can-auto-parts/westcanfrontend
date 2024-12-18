'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface SubCategory {
  name: string;
  description: string;
  images: string[];
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
  parentId?: string;
}

interface Category {
  id: string;
  name: string;
}

const EditSubCategoryPage = ({ params }: { params: { id: string } }) => {
  const [formData, setFormData] = useState<SubCategory>({
    name: '',
    description: '',
    images: [],
    tags: [],
    featured: false,
    bestSeller: false,
    parentId: '',
  });
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { id } = params;

  // Fetch the subcategory and categories to edit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const subCategoryRes = await fetch(`/api/productcategories/${id}`);
        const categoryRes = await fetch('/api/subcategories');

        if (!subCategoryRes.ok || !categoryRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const subCategoryData: SubCategory = await subCategoryRes.json();
        const categoryData: Category[] = await categoryRes.json();

        setFormData(subCategoryData);
        setCategories(categoryData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type,} = e.target;
  
    if (type === 'checkbox' && (e.target as HTMLInputElement).checked !== undefined) {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Handle form submission for updating the subcategory
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/productcategories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update subcategory');
      router.push('/admin/subcategories'); // Redirect back to the list
    } catch (error) {
      console.error('Error updating subcategory:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit SubCategory</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Images</label>
          {/* For simplicity, just displaying image URLs as text */}
          <div className="border p-2 rounded w-full">
            {formData.images.map((img, index) => (
              <p key={index}>{img}</p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Tags</label>
          <div className="border p-2 rounded w-full">
            {formData.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 p-1 mr-2 rounded">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Parent Category</label>
          <select
            name="parentId"
            value={formData.parentId || ''}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Parent Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block">Featured</label>
          <input
            type="checkbox"
            name="featured"
            checked={formData.featured}
            onChange={handleInputChange}
            className="mr-2"
          />
        </div>
        <div className="mb-4">
          <label className="block">Best Seller</label>
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={handleInputChange}
            className="mr-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update SubCategory
        </button>
      </form>
    </div>
  );
};

export default EditSubCategoryPage;
