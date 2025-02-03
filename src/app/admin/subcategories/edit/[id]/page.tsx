'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';

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
  const [tag, setTag] = useState<string>('');

  const router = useRouter();
  const { id } = params;

  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://adminbackend-r86i.onrender.com/admin/api'
    : 'http://localhost:8081/admin/api';
  const token = typeof window !== "undefined" ? localStorage.getItem("jwt_token") : null;
  // Fetch the subcategory and categories to edit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {Authorization: `Bearer ${token}` };
        const subCategoryRes = await fetch(`${apiUrl}/subcategory/${id}`,{headers});
        const categoryRes = await fetch(`${apiUrl}/category`,{headers});

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
    const { name, value, type, } = e.target;

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
      const res = await fetch(`/api/subcategories/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json',Authorization: `Bearer ${token}` },
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

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (result: any) => {
    const imageUrl = result.info.secure_url;
    setFormData(prevData => ({
      ...prevData,
      images: [...prevData.images, imageUrl] // Append new image URL to the array
    }));
  };
  const handleAddTag = () => {
    if (tag) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tag],
      });
      setTag('');
    }
  };

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
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
            className="border p-2 rounded w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Description</label>
          <textarea
            id="content"
            name="description" // This must match the key in formData
            value={formData.description} // Bind to the correct key in formData
            onChange={handleChange} // Attach the event handler
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            style={{
              width: "500px", // Fixed width
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
            rows={6}
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
          <div className="mt-2 flex flex-wrap gap-4">
            {formData.images.map((img, index) => (
              <div key={index} className="relative">
                <img src={img} alt={`Preview ${index + 1}`} className="w-24 h-24 object-cover rounded" />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Tags</label>
          <input
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
            className="border p-2 rounded w-full"
          />
          <button type="button" onClick={handleAddTag} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Tag
          </button>
          <div className="mt-2">
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
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
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