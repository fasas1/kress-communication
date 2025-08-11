import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [

    { name: "About", href: "#about" },  
    { name: "Portfolio", href: "#portfolio" },
       { name: "Gallery", href: "#gallery" },
    { name: "Career", href: "#career" },
    { name: "Training", href: "#training" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black/90 shadow-md backdrop-blur-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#hero" className="flex items-center space-x-2">
            <img
              src="./assets/logo.png"
              alt="Krosskraft Logo"
              className="w-43 h-auto opacity-90 hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative text-gray-200 hover:text-white text-lg font-medium transition duration-300 group"
                >
                  {item.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-pink-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-black via-gray-900 to-black text-white transform transition-transform duration-500 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-gray-700">
          <h2 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Menu
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-300 hover:text-pink-400 transition"
          >
            ✕
          </button>
        </div>
        <ul className="flex flex-col space-y-6 px-6 py-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-gray-300 hover:text-pink-400 transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
