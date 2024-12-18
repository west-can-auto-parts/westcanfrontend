import React from 'react'

export const AboutPart = ({ mySubPart }) => {
  return (
    <div
      className=' overflow-hidden bg-cover bg-center relative'
      style={{ backgroundImage: `url(${mySubPart.imageUrl1})` }}
    >
      {/* Adding blur effect to the container */}
      <div className="absolute inset-0 bg-cover bg-center filter blur-sm"></div>
      
      {/* Content container with backdrop overlay */}
      <div className="relative px-6 py-6 bg-[#000000d6] text-white">
        <p className="text-lg font-bold mb-2">About : {mySubPart.listing}</p>
        <p className="text-xs md:text-sm text-justify">
          {mySubPart.content}
        </p>
      </div>
    </div>
  )
}
