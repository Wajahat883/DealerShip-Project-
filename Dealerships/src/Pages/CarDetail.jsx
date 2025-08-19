import React from "react";
import { useParams } from "react-router-dom";
import cars from "../DummyData/carsData"; 

function CarDetail() {
    const { id } = useParams();
    const car = cars.find(car => car.id === parseInt(id));
    if(!car){
        return <h2 className="text-center text-red-500">Car not found</h2>;

    }
    return(

        <div className="p-6 text-center">
            <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
            <img src={car.image} alt={car.name} className="w-full h-64 object-cover rounded-lg mb-4" />
            <p className="text-lg mb-2">Price: ${car.price}</p>
            <p className="text-gray-700">{car.description}</p>
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300">
                Contact Us for More Details
            </button>
        </div>

    )
}
export default CarDetail;
