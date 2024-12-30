// src/app/admin/contacts/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Contacts {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  message: string;
  agreed: boolean;
  createdAt: string;
}

const AdminContactsPage = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [filters, setFilters] = useState({ firstName: "", startDate: "", endDate: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const isProduction = process.env.NODE_ENV === 'production';
  const apiUrl = isProduction
    ? 'https://adminbackend-production-6c17.up.railway.app/admin/api'
    : 'http://localhost:8081/admin/api';

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/contact`);
        const contactRes = await response.json();
        setContacts(contactRes);
      } catch (err) {
        setContacts([]); // Default to empty array on error
        setError("Failed to fetch contacts.");
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const filteredContacts = (contacts || []).filter((contact) => {
    const matchesFirstName =
      filters.firstName === "" ||
      contact.firstName.toLowerCase().includes(filters.firstName.toLowerCase());
    const matchesDate =
      (!filters.startDate || new Date(contact.createdAt) >= new Date(filters.startDate)) &&
      (!filters.endDate || new Date(contact.createdAt) <= new Date(filters.endDate));
    return matchesFirstName && matchesDate;
  });
  const handleDownloadExcel = async () => {
    try {
      const response = await axios.get(`${apiUrl}/download-contacts`, {
        responseType: "blob", // Ensure the response is treated as a file
      });

      // Create a URL for the blob and trigger a download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "contacts.xlsx");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      setError("Failed to download the Excel file.");
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Admin - Contacts</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {loading && <p>Loading contacts...</p>}
      <div>
        <h2 className="text-xl font-semibold mb-4">Filters</h2>
        <div className="mb-4 flex gap-4">
          <input
            type="text"
            placeholder="Filter by First Name"
            className="border p-2 rounded w-full"
            value={filters.firstName}
            onChange={(e) => setFilters({ ...filters, firstName: e.target.value })}
          />
          <input
            type="date"
            placeholder="Start Date"
            className="border p-2 rounded"
            value={filters.startDate}
            onChange={(e) => setFilters({ ...filters, startDate: e.target.value })}
          />
          <input
            type="date"
            placeholder="End Date"
            className="border p-2 rounded"
            value={filters.endDate}
            onChange={(e) => setFilters({ ...filters, endDate: e.target.value })}
          />
          <button
            onClick={() => setFilters({ firstName: "", startDate: "", endDate: "" })}
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
        <h2 className="text-xl font-semibold mb-4">Contacts List</h2>
        {filteredContacts.length === 0 ? (
          <p>No contacts found.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">First Name</th>
                <th className="border p-2">Last Name</th>
                <th className="border p-2">Company</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">Phone Number</th>
                <th className="border p-2">Message</th>
                <th className="border p-2">Agreed</th>
                <th className="border p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {filteredContacts.map((contact) => (
                <tr key={contact.id}>
                  <td className="border p-2">{contact.firstName}</td>
                  <td className="border p-2">{contact.lastName}</td>
                  <td className="border p-2">{contact.company || "N/A"}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2">{contact.phoneNumber}</td>
                  <td className="border p-2">{contact.message}</td>
                  <td className="border p-2">{contact.agreed ? "Yes" : "No"}</td>
                  <td className="border p-2">{contact.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminContactsPage;





