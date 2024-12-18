// src/app/admin/contacts/page.tsx

"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminContactsPage = () => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phoneNumber: '',
    message: '',
    agreed: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fetch contacts from the API
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contacts');
        setContacts(response.data.contacts);
      } catch (err) {
        setError('Failed to fetch contacts.');
      }
    };

    fetchContacts();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post('/api/contacts', formData);
      setSuccess('Contact created successfully.');
      setError(null);
      // Refresh the contact list
      const response = await axios.get('/api/contacts');
      setContacts(response.data.contacts);
    } catch (err) {
      setError('Failed to create contact.');
      setSuccess(null);
    }
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-4">Admin - Contacts</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <div>
        <h2 className="text-xl font-semibold mb-4">Contacts List</h2>
        {contacts.length === 0 ? (
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
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td className="border p-2">{contact.firstName}</td>
                  <td className="border p-2">{contact.lastName}</td>
                  <td className="border p-2">{contact.company || 'N/A'}</td>
                  <td className="border p-2">{contact.email}</td>
                  <td className="border p-2">{contact.phoneNumber}</td>
                  <td className="border p-2">{contact.message}</td>
                  <td className="border p-2">{contact.agreed ? 'Yes' : 'No'}</td>
                  <td className="border p-2">{new Date(contact.createdAt).toLocaleString()}</td>
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
