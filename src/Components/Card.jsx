import React from 'react';
import profileImage from "../assets/Vector.png"

const Card = ({  name, title }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex">
      {/* Profile Image (left side) */}
      <div className="bg-green-300 h-16 w-16 mr-4 rounded-full overflow-hidden">
        <img
          src={profileImage}
          alt={`${name}'s Profile`}
          className=" m-auto mt-4 w-6 h-6 "
        />
      </div>

      {/* Name and Title (right side) */}
      <div className="flex-1">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-600">{title}</p>
      </div>

      {/* View Button (right bottom) */}
      <div className="self-end mt-4">
        <button className="bg-white text-pink-700 px-2 py-1 rounded-full">
          View
        </button>
      </div>
    </div>
  );
};

export default Card;
