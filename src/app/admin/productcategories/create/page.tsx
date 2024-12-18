'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {CldUploadWidget} from 'next-cloudinary'

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
  const [formData, setFormData] = useState<ProductCategory>({
    id: '', // Assuming ID is managed by the backend and not needed on the form
    name: '',
    description: '',
    images: [],
    parentId: '',
    properties: [],
    tags: [],
    featured: true,
    bestSeller: true,
  });
  const [imageUrl, setImageUrl] = useState<string>('');
  const [propertyKey, setPropertyKey] = useState<string>('');
  const [propertyValue, setPropertyValue] = useState<string>('');
  const [tag, setTag] = useState<string>('');

  const router = useRouter();

  const handleImageUpload = (result:any) => {
    const imageUrl = result.info.secure_url;
    setFormData(prevData => ({
      ...prevData,
      imageUrls: [...prevData.images, imageUrl] // Append new image URL to the array
    }));
    console.log(formData.images)
  };


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

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle image URL addition
  const handleAddImage = () => {
    if (imageUrl) {
      setFormData({
        ...formData,
        images: [...formData.images, imageUrl],
      });
      setImageUrl('');
    }
  };

  // Handle property addition
  const handleAddProperty = () => {
    if (propertyKey && propertyValue) {
      setFormData({
        ...formData,
        properties: [...formData.properties, { key: propertyKey, value: propertyValue }],
      });
      setPropertyKey('');
      setPropertyValue('');
    }
  };

  // Handle tag addition
  const handleAddTag = () => {
    if (tag) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag],
      });
      setTag('');
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('/api/productcategories', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.refresh(); // Refresh the page to update the list
    }
  };

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

      {/* Form to add new product category */}
      <form onSubmit={handleSubmit} className="mb-6">
        <h2 className="text-xl mb-2">Add New Product Category</h2>
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
          <CldUploadWidget
            uploadPreset="my-next-cloudinary-app"
            onSuccess={handleImageUpload}
          >
            {({ open }) => (
              <button type="button" onClick={() => open()} className="bg-gray-200 p-2 rounded">
                Upload an Image
              </button>
            )}
          </CldUploadWidget>
          <div className="mt-2">
            {formData.images.map((img, index) => (
              <p key={index}>{img}</p>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Tags</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button type="button" onClick={handleAddTag} className="bg-gray-500 text-white px-4 py-2 rounded mt-2">
            Add Tag
          </button>
          <div className="mt-2">
            {formData.tags.map((tag, index) => (
              <span key={index} className="inline-block bg-gray-200 p-1 mr-2 rounded">{tag}</span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Properties</label>
          <input
            type="text"
            value={propertyKey}
            onChange={(e) => setPropertyKey(e.target.value)}
            placeholder="Key"
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            value={propertyValue}
            onChange={(e) => setPropertyValue(e.target.value)}
            placeholder="Value"
            className="border p-2 rounded w-full mb-2"
          />
          <button type="button" onClick={handleAddProperty} className="bg-gray-500 text-white px-4 py-2 rounded mt-2">
            Add Property
          </button>
          <div className="mt-2">
            {formData.properties.map((prop, index) => (
              <p key={index}>
                {prop.key}: {prop.value}
              </p>
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
            {allCategories.map((category) => (
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
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="mr-2"
          />
          <label className="block">Best Seller</label>
          <input
            type="checkbox"
            name="bestSeller"
            checked={formData.bestSeller}
            onChange={(e) => setFormData({ ...formData, bestSeller: e.target.checked })}
            className="mr-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product Category
        </button>
      </form>

      {/* Product Categories Table */}
    </div>
  );
};

export default ProductCategoriesPage;
