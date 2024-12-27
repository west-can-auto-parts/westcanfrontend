"use client";

import Usps from '@/app/(public)/product-view/_components/Usps';
import { FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import React, { useState } from 'react';
import locations from '@/datas/store';

const apiUrl = 'http://localhost:8080/api/product/productenquiry';

export const ProductDescription = ({ myProduct }) => {
    const [product, setProduct] = useState(myProduct || {});
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        store: '',
        phoneNumber: '',
        part: '',
        message: ''
    });
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState('');

    // Toggle Modal visibility
    const handleModalToggle = () => {
        setIsModalOpen(!isModalOpen);
        if (!isModalOpen) {
            setFormData((prevData) => ({
                ...prevData,
                part: product.description || '', // Default part when modal opens
            }));
        }
    };

    // Handle input change
    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormError('');
        setFormSuccess('');
    
        if (!formData.name || !formData.email || !formData.store || !formData.phoneNumber || !formData.message) {
            setFormError('All fields are required.');
            return;
        }
    
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            // Check if the response is ok (status code 200-299)
            if (response.ok) {
                const contentType = response.headers.get('content-type');
                let responseData;
    
                if (contentType && contentType.includes('application/json')) {
                    responseData = await response.json();
                } else {
                    responseData = await response.text();
                }
    
                setFormSuccess(responseData || 'Enquiry submitted successfully.');
    
                // Reset form and close modal
                setFormData({
                    name: '',
                    email: '',
                    store: '',
                    phoneNumber: '',
                    part: '',
                    message: ''
                });
                setIsModalOpen(false); // Close the modal
            } else {
                const errorText = await response.text();
                setFormError(errorText || 'Failed to submit enquiry.');
            }
        } catch (err) {
            setFormError('An error occurred while submitting the enquiry.');
        }
    };
    
    

    return (
        <div className='w-full md:w-1/2'>
            <h1 className="text-2xl font-bold mb-2 py-2">{myProduct.name}</h1>
            <p className="text-xs md:text-sm text-justify">{myProduct.description}</p>
            <div className="py-2 flex flex-wrap gap-2 md:gap-4 text-xs md:text-sm">
                {myProduct.tags.map((tag, index) => (
                    <p key={index} className='bg-gray-200 font-semibold px-2 rounded-md'>{tag}</p>
                ))}
            </div>
            <Usps />
            <div className="flex flex-col md:flex-row md:flex-nowrap w-full gap-2 md:gap-4">
                <button
                    className='bg-white border-2 rounded-md px-4 py-2 text-[#b12b29] w-full md:w-1/2 flex justify-center gap-2'
                    onClick={handleModalToggle}
                >
                    <FaEnvelope className='w-5 h-5' /> Message Us
                </button>
                {isModalOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white w-11/12 mx-auto md:max-w-xl p-6 rounded-lg shadow-lg">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-lg md:text-2xl font-bold">Enquiry Form</h2>
                                <button onClick={handleModalToggle} type="button" className="bg-[#b21b29] text-white px-2 rounded-md">
                                    X
                                </button>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Your Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29] sm:text-sm"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29] sm:text-sm"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="store" className="block text-sm font-medium text-gray-700">
                                        Select Store
                                    </label>
                                    <select
                                        id="store"
                                        value={formData.store}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29]"
                                    >
                                        <option value="">Select Your Nearest Store</option>
                                        {locations.map((location) => (
                                            <option key={location.name} value={location.name}>
                                                {location.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        type="tel"
                                        value={formData.phoneNumber}
                                        onChange={handleInputChange}
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29] sm:text-sm"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="part" className="block text-sm font-medium text-gray-700">
                                        Part to Query About
                                    </label>
                                    <select
                                        id="part"
                                        value={formData.part}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29] sm:text-sm"
                                    >
                                        <option value={product.description}>{product.description}</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#b21b29] focus:border-[#b21b29] sm:text-sm"
                                        rows="4"
                                    />
                                </div>
                                {formError && <div className="text-red-600 mb-4">{formError}</div>}
                                {formSuccess && <div className="text-green-600 mb-4 text-center">{formSuccess}</div>}
                                <div className="flex justify-between">
                                    <button type="submit" className="w-full bg-[#b21b29] text-white px-4 py-2 rounded-md hover:bg-[#a1121d]">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
                <button className='bg-[#b12b29] text-white px-4 py-2 rounded-md w-full md:w-1/2 flex justify-center gap-2'>
                    <FaShoppingCart className='w-5 h-5' /> Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDescription;
