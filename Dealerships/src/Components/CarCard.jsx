import React from "react";

function CarCard({ car }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img
        src={car.image}
        alt={car.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{car.name}</h2>
        <p className="text-gray-600">{car.brand}</p>
        <p className="text-gray-800 font-semibold">${car.price}</p>
      </div>
    </div>
  );
}

export default CarCard; // ✅ default export
