import React from "react";
import ceoImage from "../assets/ceo.jpg";
import managerImage from "../assets/manager.jpeg";
import hrImage from "../assets/hr.jpeg";
import heroImage from "../assets/showroom.jpeg";

function About() {
  const team = [
    {
      name: "John Doe",
      role: "CEO",
      image: ceoImage,
      linkedin: "#",
      bio: "John has 20 years of experience in automotive industry and leads the company with vision and innovation."
    },
    {
      name: "Jane Smith",
      role: "Manager",
      image: managerImage,
      linkedin: "#",
      bio: "Jane ensures smooth operations and manages our dealership network efficiently."
    },
    {
      name: "Alice Johnson",
      role: "HR",
      image: hrImage,
      linkedin: "#",
      bio: "Alice takes care of our team and maintains a healthy work environment."
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-96 mb-12">
        <img
          src={heroImage}
          alt="showroom"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold  mb-4">About Dealerships</h1>
          <p className="max-w-3xl text-lg  md:text-xl">
            Delivering the best car buying experience. Trusted dealers, premium cars, and a passionate team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 flex-grow">

        {/* Mission / Vision / Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 text-center">
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Mission</h3>
            <p>To provide a seamless and enjoyable car buying experience for everyone.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Vision</h3>
            <p>Be the most trusted and innovative dealership network in the country.</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Values</h3>
            <p>Integrity, customer satisfaction, innovation, and teamwork are at our core.</p>
          </div>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:scale-105 transition-transform group"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>

              {/* Hover Bio */}
              <div className="absolute bottom-0  left-1/2 transform -translate-x-1/2 translate-y-full bg-gray-800 text-white text-center p-4 rounded-lg opacity-0 group-hover:opacity-100 transition-all w-64 z-10">
                <p className="text-sm">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block  text-blue-400 hover:underline"
                >
                  Connect
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-600 p-20 mb-8 max-w-2xl mx-auto">
  Our team of dedicated professionals works tirelessly to ensure that every customer finds their perfect car. 
  From management to HR, every member plays a crucial role in delivering the best service and maintaining our trusted reputation.
</p>

      </div>

      {/* Footer */}
      <footer className="bg-gray-800 top-20 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          <p>&copy; 2025 Dealerships. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition">Twitter</a>
            <a href="#" className="hover:text-pink-500 transition">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
