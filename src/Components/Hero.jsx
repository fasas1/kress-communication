import React from 'react';

export default function Hero() {
  return (
    <div
      className="relative w-screen h-screen bg-no-repeat bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/assets/hero1.jpg')",
      }}
    >
      {/* 🎥 Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 backdrop-blur-sm animate-fadeInSlow z-0"></div>

      {/* ✨ Light Streaks */}
      <div className="absolute top-0 left-0 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12)_0%,transparent_70%)] rotate-12 opacity-15 animate-streak z-10"></div>

      {/* 🎞️ Film Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/film-grain.png')] opacity-[0.1] mix-blend-overlay z-20 animate-grain"></div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 animate-slideFadeUp">
  <h1 className="text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold tracking-wide mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 drop-shadow-lg leading-tight">
    KROSSKRAFT
  </h1>

  <p className="text-[clamp(1rem,2.2vw,1.5rem)] text-gray-300 mb-8 italic tracking-wide">
    Filmmaker • Director • Storyteller • Content Creator
  </p>

  <a
    href="#portfolio"
    className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300"
  >
    View Portfolio
  </a>
</div>


      {/* Animations */}
      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; }
          100% { opacity: 1; }
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

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }

        @keyframes streak {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .animate-fadeInSlow {
          animation: fadeInSlow 2s ease-out forwards;
        }

        .animate-slideFadeUp {
          animation: slideFadeUp 1.4s ease-out forwards;
        }

        .animate-grain {
          animation: grain 1s steps(2) infinite;
        }

        .animate-streak {
          animation: streak 7s linear infinite;
        }
      `}</style>
    </div>
  );
}
