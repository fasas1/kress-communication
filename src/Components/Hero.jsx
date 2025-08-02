import React, { useState } from "react";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero1.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 backdrop-blur-sm z-0"></div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 animate-slideFadeUp">
        <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold tracking-wide mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg leading-tight">
          KROSSKRAFT
        </h1>
        <p className="text-[clamp(1rem,2.2vw,1.5rem)] text-gray-300 mb-6 italic tracking-wide">
          Filmmaker • Director • Storyteller
        </p>
        <p className="text-sm mt-2 text-gray-400">
          Capturing stories, creating magic.
        </p>
      </div>

      {/* 🎬 Centered Play Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute z-40 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg hover:scale-110 transition-all duration-300 animate-pulseGlow group"
        style={{
          bottom: "24%",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        ▶
        <span className="absolute w-24 h-24 bg-pink-500/30 rounded-full animate-ripple"></span>
      </button>

      {/* 🎥 Modal Video Player */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 animate-fadeInSlow"
        >
          <div className="relative w-[90%] max-w-3xl aspect-video bg-black rounded-lg overflow-hidden">
            <video
              src="/assets/Showreel.mp4"
              type="video/mp4"
              controls
              autoPlay
              className="w-full h-full object-cover"
            ></video>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-white bg-black/60 rounded-full px-3 py-1 text-sm hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        @keyframes slideFadeUp {
          0% { opacity: 0; transform: translateY(30px) scale(1.02); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pulseGlow {
          0% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.4), 0 0 30px rgba(147, 51, 234, 0.2); }
          50% { box-shadow: 0 0 25px rgba(236, 72, 153, 0.7), 0 0 50px rgba(147, 51, 234, 0.5); }
          100% { box-shadow: 0 0 15px rgba(236, 72, 153, 0.4), 0 0 30px rgba(147, 51, 234, 0.2); }
        }

        @keyframes ripple {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }

        .animate-fadeInSlow { animation: fadeInSlow 2s ease-out forwards; }
        .animate-slideFadeUp { animation: slideFadeUp 1.4s ease-out forwards; }
        .animate-pulseGlow { animation: pulseGlow 2s infinite ease-in-out; }
        .animate-ripple { animation: ripple 1.8s infinite ease-out; }
      `}</style>
    </div>
  );
}
