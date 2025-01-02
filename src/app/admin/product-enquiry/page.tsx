// src/app/admin/enquiries/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Enquiry {
    id: string;
    name: string;
    email: string;
    store: string;
    productName: string[];
    message: string;
    createdAt: string;
}

const AdminEnquiriesPage = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [filters, setFilters] = useState({ name: "", productName: "" });
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const isProduction = process.env.NODE_ENV === 'production';
    const apiUrl = isProduction
        ? 'https://adminbackend-production-6c17.up.railway.app/admin/api'
        : 'http://localhost:8081/admin/api';

    useEffect(() => {
        const fetchEnquiries = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${apiUrl}/product-enquiry-form`);
                const enquiryRes = await response.json();
                setEnquiries(enquiryRes);
            } catch (err) {
                setEnquiries([]); // Default to empty array on error
                setError("Failed to fetch enquiries.");
            } finally {
                setLoading(false);
            }
        };

        fetchEnquiries();
    }, []);

    const filteredEnquiries = (enquiries || []).filter((enquiry) => {
        const matchesName =
            filters.name === "" ||
            enquiry.name?.toLowerCase().includes(filters.name.toLowerCase());
        const matchesProductName =
            filters.productName === "" ||
            (Array.isArray(enquiry.productName) &&
                enquiry.productName.some((product) =>
                    product.toLowerCase().includes(filters.productName.toLowerCase())
                ));
        return matchesName && matchesProductName;
    });
    

    const handleDownloadExcel = async () => {
        try {
            const response = await axios.get(`${apiUrl}/download-enquiries`, {
                responseType: "blob", // Ensure the response is treated as a file
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", "product-enquiries.xlsx");
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (err) {
            setError("Failed to download the Excel file.");
        }
    };

    return (
        <div className="">
            <h1 className="text-2xl font-bold mb-4">Product Enquiries</h1>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {loading && <p>Loading enquiries...</p>}
            <div>
                <h2 className="text-xl font-semibold mb-4">Filters</h2>
                <div className="mb-4 flex gap-4">
                    <input
                        type="text"
                        placeholder="Filter by Name"
                        className="border p-2 rounded w-full"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Filter by Product Name"
                        className="border p-2 rounded w-full"
                        value={filters.productName}
                        onChange={(e) => setFilters({ ...filters, productName: e.target.value })}
                    />
                    <button
                        onClick={() => setFilters({ name: "", productName: "" })}
                        className="bg-gray-200 p-2 rounded"
                    >
                        Reset Filters
                    </button>
                </div>
                <button
                    onClick={handleDownloadExcel}
                    className="bg-blue-500 text-white p-2 rounded mb-4"
                >
                    Download Excel
                </button>
                <h2 className="text-xl font-semibold mb-4">Enquiries List</h2>
                {filteredEnquiries.length === 0 ? (
                    <p>No enquiries found.</p>
                ) : (
                    <table className="w-full border-collapse border border-gray-200">
                        <thead>
                            <tr>
                                <th className="border p-2">Name</th>
                                <th className="border p-2">Email</th>
                                <th className="border p-2">Store</th>
                                <th className="border p-2">Product Name(s)</th>
                                <th className="border p-2">Message</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEnquiries.map((enquiry) => (
                                <tr key={enquiry.id}>
                                    <td className="border p-2">{enquiry.name}</td>
                                    <td className="border p-2">{enquiry.email}</td>
                                    <td className="border p-2">{enquiry.store || "N/A"}</td>
                                    <td className="border p-2">
                                        {enquiry.productName && Array.isArray(enquiry.productName)
                                            ? enquiry.productName.join(', ')
                                            : "N/A"}
                                    </td>
                                    <td className="border p-2">{enquiry.message}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default AdminEnquiriesPage;
