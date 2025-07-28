import React from 'react';

export default function Hero() {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-cover bg-center relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero1.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fadeInSlow z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-slideFadeUp">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-400 mb-4">
             KROSSKRAFT
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Filmmaker • Director • Storyteller
        </p>

        <a
          href="#portfolio"
          className="inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition duration-300"
        >
          View Portfolio
        </a>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeInSlow {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          .animate-fadeInSlow {
            animation: fadeInSlow 2s ease-out forwards;
          }

          @keyframes slideFadeUp {
            0% {
              opacity: 0;
              transform: translateY(30px) scale(1.02);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .animate-slideFadeUp {
            animation: slideFadeUp 1.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
