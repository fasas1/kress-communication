import React from "react";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/2348176840381?text=Hi%20I'm%20interested%20in%20your%20videography%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-bounce"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48a11.9 11.9 0 00-16.9 0 11.9 11.9 0 000 16.9 11.9 11.9 0 0016.9 0 11.9 11.9 0 000-16.9zM12 22a9.95 9.95 0 01-5.36-1.56l-5.68 1.48 1.52-5.52A10 10 0 1112 22zm5.05-6.38c-.26-.13-1.55-.76-1.8-.85-.24-.09-.42-.13-.6.13-.17.26-.69.85-.85 1.02-.15.17-.31.19-.57.06-.26-.13-1.11-.41-2.12-1.31-.78-.7-1.31-1.57-1.46-1.83-.15-.26-.02-.41.11-.54.11-.11.26-.28.39-.41.13-.13.17-.22.26-.37.09-.15.04-.28-.02-.41-.06-.13-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47-.15-.01-.33-.01-.51-.01-.17 0-.45.06-.68.34-.24.28-.89.86-.89 2.09 0 1.23.91 2.42 1.03 2.58.13.17 1.78 2.71 4.31 3.8.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.55-.63 1.77-1.24.22-.6.22-1.11.15-1.24-.06-.13-.24-.2-.5-.33z"/>
      </svg>
    </a>
  );
}
