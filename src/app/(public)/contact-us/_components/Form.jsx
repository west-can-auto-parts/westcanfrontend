'use client'

import { useState } from 'react'
import { Field, Label, Switch } from '@headlessui/react';
import SuccessModal from './SuccessModal'; // Adjust the path based on your project structure
import FailureModal from './FailureModal';
export default function Form() {
    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [responseType, setResponseType] = useState(''); // success or error
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const dataToSend = { ...formData, agreed };

        try {
            const response = await fetch('/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                setIsSuccessModalOpen(true);
                setResponseMessage('Your message has been sent successfully!');
                setResponseType('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    company: '',
                    email: '',
                    phoneNumber: '',
                    message: ''
                });
                setAgreed(false);
            } else {
                const errorData = await response.json();
                setResponseMessage(`Error: ${errorData.message}`);
                setResponseType('error');
                setIsFailureModalOpen(true);
            }
        } catch (error) {
            setResponseMessage('Error: Could not send the message. Please try again later.');
            setResponseType('error');
            setIsFailureModalOpen(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-full md:w-1/2 px-8">
            <p className="text-2xl font-bold my-4">Reach Out To Us</p>

            {responseMessage && (
                <p className={`my-4 text-sm ${responseType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {responseMessage}
                </p>
            )}

            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                    <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="first-name"
                            name="firstName"
                            type="text"
                            autoComplete="given-name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="last-name"
                            name="lastName"
                            type="text"
                            autoComplete="family-name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                        Address
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="company"
                            name="company"
                            type="text"
                            autoComplete="organization"
                            value={formData.company}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                        Email
                    </label>
                    <div className="mt-2.5">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                        Phone number
                    </label>
                    <div className="relative mt-2.5">
                        <div className="absolute inset-y-0 left-0 flex items-center">
                            <label htmlFor="country" className="sr-only">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            >
                                <option>CA</option>
                                <option>US</option>
                                <option>EU</option>
                            </select>
                            {/* <FaChevronDown
                                aria-hidden="true"
                                className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                            /> */}
                        </div>
                        <input
                            id="phone-number"
                            name="phoneNumber"
                            type="tel"
                            autoComplete="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                        Message
                    </label>
                    <div className="mt-2.5">
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <Field className="flex gap-x-4 sm:col-span-2">
                    <div className="flex h-6 items-center">
                        <Switch
                            checked={agreed}
                            onChange={setAgreed}
                            className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                        >
                            <span className="sr-only">Agree to policies</span>
                            <span
                                aria-hidden="true"
                                className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                            />
                        </Switch>
                    </div>
                    <Label className="text-sm leading-6 text-gray-600">
                        By selecting this, you agree to our{' '}
                        <a href="#" className="font-semibold">
                            privacy&nbsp;policy
                        </a>
                        .
                    </Label>
                </Field>
            </div>
            <SuccessModal isOpen={isSuccessModalOpen} onClose={() => setIsSuccessModalOpen(false)} />
            <FailureModal isOpen={isFailureModalOpen} onClose={() => setIsFailureModalOpen(false)} errorMessage={errorMessage} />
            <div className="mt-10">
                <button
                    type="submit"
                    className="block w-full rounded-md bg-[#b12b29] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                    Let's Connect
                </button>
            </div>
        </form>
    );
}
