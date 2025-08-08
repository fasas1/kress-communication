import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-12 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-6 md:space-y-0">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            KROSSKRAFT COMMUNICATIONS
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Capturing stories, creating magic.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3 text-gray-400 text-sm">
          <div className="flex items-center space-x-2 hover:text-green-400 transition">
            <i className="fas fa-phone-alt"></i>
            <span>+234 803 329 0934</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-blue-400 transition">
            <i className="fas fa-envelope"></i>
            <span>info@krosskraftcommunications.com</span>
          </div>
            <div className="flex items-center space-x-2 hover:text-blue-400 transition">
            <i className="fas fa-envelope"></i>
            <span>owomoney@yahoo.co.uk</span>
          </div>
          <div className="flex items-center space-x-2 hover:text-yellow-400 transition">
            <i className="fas fa-map-marker-alt"></i>
            <span>7, Adeniyi Jakande Close, Surulere, Lagos</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com/@owolabiodesola9245"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-xs text-gray-500 mt-8 text-center">
        © {new Date().getFullYear()} KROSSKRAFT. All rights reserved.
      </div>
    </footer>
  );
}
