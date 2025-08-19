import React from "react";
import CarCard from "../Components/CarCard";
import cars from "../DummyData/carsData";
import heroImage from "../assets/showroom.jpeg"; // apni hero image ka path

function Home() {
  return (
    <div className="p-6">
      {/* Hero Section */}
      <div className="relative w-full h-80 md:h-96 rounded-lg overflow-hidden mb-10">
        <img
          src={heroImage}
          alt="dealership"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Dealerships!
          </h1>
          <p className="text-sm md:text-lg max-w-2xl">
            Explore our premium collection of cars. Find the perfect car for
            yourself with detailed info and trusted dealers near you.
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition">
            Explore Cars
          </button>
        </div>
      </div>

      {/* Cars Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}

export default Home;
