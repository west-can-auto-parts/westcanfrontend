'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CldUploadWidget } from 'next-cloudinary';

interface ProductCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string[];
  categoryId: string;
  subCategoryId: string;
  tags: string[];
  featured: boolean;
  bestSeller: boolean;
}

interface Category {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
}

const EditSubCategoryPage = ({ params }: { params: { id: string } }) => {
  const [formData, setFormData] = useState<ProductCategory>({
    id: '',
    name: '',
    description: '',
    imageUrl: [],
    tags: [],
    featured: false,
    bestSeller: false,
    categoryId: '',
    subCategoryId: '',

  });
  const [productCategories, setProductCategories] = useState<Category[]>([]);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [allsubCategory, setAllSubCategory] = useState<SubCategory[]>([]);
  const [tag, setTag] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { id } = params;
  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://adminbackend-r86i.onrender.com/admin/api'
    : 'http://localhost:8081/admin/api';

  // Fetch the subcategory and categories to edit
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productCategoryRes = await fetch(`${apiUrl}/product-category/${id}`);
        const allCategoryRes = await fetch(`${apiUrl}/category`);
        const allSubCategoryRes = await fetch(`${apiUrl}/subcategory`);

        if (!productCategoryRes.ok || !allCategoryRes.ok || !allSubCategoryRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const productCategoryData = await productCategoryRes.json();
        const allCategoryData = await allCategoryRes.json();
        const allSubCategoryData = await allSubCategoryRes.json();

        setFormData(productCategoryData);
        setAllCategories(allCategoryData);
        setAllSubCategory(allSubCategoryData);
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
      const res = await fetch(`${apiUrl}/product-category/update/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to update subcategory');
      router.push('/admin/productcategories'); // Redirect back to the list
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
      imageUrl: [...(prevData.imageUrl || []), imageUrl] // Ensure imagesUrl is an array
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
            className="border p-2 rounded w-full"
            required
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
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
            {formData.imageUrl?.map((img, index) => (
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
          <label className="block">SubCategory</label>
          <select
            name="subCategoryId"
            value={formData.subCategoryId || ''}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
          >
            <option value="">Select SubCategory</option>
            {allsubCategory.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block">Category</label>
          <select
            name="categoryId"
            value={formData.categoryId || ''}
            onChange={handleInputChange}
            className="border p-2 rounded w-full"
            style={{
              width: "500px", // Set dynamic height based on content
              resize: "none", // Disable manual resizing
              overflow: "hidden", // Prevent scrollbars
            }}
          >
            <option value="">Select Category</option>
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
