import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© {new Date().getFullYear()} Thiyaana Vidanaarachchi. All rights reserved.</p>
          </div>
          
          <div className="flex items-center">
            <p className="text-gray-400 flex items-center">
              Made with <FaHeart className="text-red-500 mx-1 animate-pulse" /> by 
              <span className="ml-1 font-medium text-white">Thiyaana Vidanaarachchi</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;