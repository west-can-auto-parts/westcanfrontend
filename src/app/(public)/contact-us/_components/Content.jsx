"use client";

import React, { useState } from "react";
import locations from "@/datas/store";
import { useRouter } from "next/navigation";

const Content = ({ onLocationSelect }) => {
    const [selectedLocation, setSelectedLocation] = useState(locations[0]); // Default to the first location
    const router = useRouter();

    const handleCardClick = (location) => {
        setSelectedLocation(location);
        console.log('location.name', location.name)
        if (onLocationSelect) {
            console.log('location.name', location.name)
            onLocationSelect(location.name); // Pass location name to ParentComponent
        }
    };

    return (
        <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Find Us At</h2>
            <div
                className="bg-white w-full cursor-pointer group text-start mb-4 shadow-md rounded-lg mx-auto flex flex-wrap md:flex-nowrap gap-6 p-2"
                onClick={() => router.push(`/store/${selectedLocation.id}`)}
            >
                <img
                    src={selectedLocation.imgUrl}
                    alt={selectedLocation.name}
                    className="w-full md:w-32 h-32 rounded-lg object-cover"
                />
                <div className="my-auto">
                    <h3 className="text-lg font-semibold mb-1 text-[#b12b29] group-hover:underline transition">
                        {selectedLocation.name}
                    </h3>
                    <p className="text-gray-600 mb-1 text-sm">
                        <strong>Address:</strong> {selectedLocation.address}
                    </p>
                    {selectedLocation.phone && (
                        <p className="text-gray-600 mb-1 text-sm">
                            <strong>Phone:</strong> {selectedLocation.phone}
                        </p>
                    )}
                    <button className="text-[#b91b29] hover:text-red-700 transition">View Store</button>
                </div>
            </div>

            {/* Horizontal Scrollable Cards */}
            <div className="flex flex-col gap-6 mb-6 h-[50vh] overflow-y-auto py-4">
                {locations.map((location) => (
                    <div
                        key={location.id}
                        onClick={() => handleCardClick(location)}
                        className={`p-4 rounded-md cursor-pointer transition flex gap-4 items-center ${selectedLocation.id === location.id
                                ? "bg-[#b12b29] text-white"
                                : "bg-white text-gray-800 border shadow-md"
                            }`}
                    >
                        <div>
                            <h3 className="text-sm md:text-lg font-semibold">{location.name}</h3>
                            <p className="text-xs md:text-sm">{location.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
