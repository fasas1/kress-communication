import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 border-t border-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            KROSSKRAFT COMMUNICATION
          </h2>
          <p className="text-sm mt-2 text-gray-400">
            Capturing stories, creating magic.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-5">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            href="https://www.instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400 transition"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            href="https://www.youtube.com/yourchannel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-400 transition"
          >
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>

        {/* Bottom note */}
        <div className="text-xs text-gray-500">
          © {new Date().getFullYear()} KROSSKRAFT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
