import React from "react";

import { Link } from "react-router-dom";



        function Nav() {
          return (
            <nav className="Navbar flex items-center justify-between px-8 py-4 bg-gray-400 shadow">
              
              <div className="text-2xl font-bold">Dealerships</div>
             
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-blue-600 font-medium">About Us</Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link>
                </li>
              </ul>
            </nav>
          );
        }
        
        export default Nav;

     
