import React from "react";
import { FaHandshake } from "react-icons/fa";

export default function ClientsCollaborations() {
  const clients = [
    { name: "Coca-Cola", logo: "/assets/cocacola.png" },
    { name: "Unilever", logo: "/assets/Unilever.png" },
    { name: "Exxon Mobil", logo: "/assets/Exxon.png" },
    { name: "First Bank", logo: "/assets/FirstBank.png" },
    { name: "British American Tobacco", logo: "/assets/BAT.png" },
    { name: "MTN", logo: "/assets/MTN.png" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-24 px-6 overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-16 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-3 animate-fadeIn">
          <FaHandshake className="text-pink-500 text-3xl" />
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Clients & Collaborations
          </h2>
        </div>
        <p className="text-gray-400 mt-3 text-base md:text-lg italic animate-fadeIn delay-200">
          Trusted by iconic brands and creative agencies.
        </p>
      </div>

      {/* Clients Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="group relative bg-white/5 backdrop-blur-md rounded-xl p-6 w-40 h-24 flex items-center justify-center border border-white/10 hover:border-pink-400/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500 opacity-0 translate-y-10 animate-cardFadeIn"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
          </div>
        ))}
      </div>

      {/* Moving Film Strip Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-blue-400/30 animate-reelMotion"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/30 via-pink-400/30 to-purple-400/30 animate-reelMotion delay-1000"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes reelMotion {
          0% { transform: translateX(-100%); opacity: 0.2; }
          50% { opacity: 0.5; }
          100% { transform: translateX(100%); opacity: 0.2; }
        }

        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-cardFadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-reelMotion {
          animation: reelMotion 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
