import React from "react";

const Listing = ({ imageSrc, description }) => {
  return (
    <div className="bg-transparent p-4 max-w-xs mx-auto rounded-lg shadow-lg">
      <img
        src={imageSrc}
        alt="Store Front"
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-800">{description}</p>
    </div>
  );
};

export default Listing;
