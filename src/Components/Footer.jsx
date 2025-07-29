import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20 border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        
        {/* Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            KROSSKRAFT
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Capturing stories, creating magic.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-6">
          <a href="#about" className="hover:text-pink-400 transition">About</a>
          <a href="#portfolio" className="hover:text-pink-400 transition">Portfolio</a>
          <a href="#contact" className="hover:text-pink-400 transition">Contact</a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"
            className="hover:text-blue-400 transition">
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer"
            className="hover:text-pink-400 transition">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer"
            className="hover:text-red-400 transition">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} KROSSKRAFT. All rights reserved.
      </div>
    </footer>
  );
}
