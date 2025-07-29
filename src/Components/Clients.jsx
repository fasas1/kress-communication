import React from "react";

export default function ClientsCollaborations() {
  const clients = [
    { name: "Coca-Cola", logo: "/assets/clients/cocacola.png" },
    { name: "Unilever", logo: "/assets/clients/unilever.png" },
    { name: "Exxon Mobil", logo: "/assets/clients/exxon.png" },
    { name: "First Bank", logo: "/assets/clients/firstbank.png" },
    { name: "British American Tobacco", logo: "/assets/clients/bat.png" },
    { name: "MTN", logo: "/assets/clients/mtn.png" },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0b0b0b] to-black text-white py-24 px-6 overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-16 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-fadeIn">
          Clients & Collaborations
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg italic animate-fadeIn delay-200">
          Trusted by leading global brands and agencies.
        </p>
      </div>

      {/* Clients Logos Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 place-items-center">
        {clients.map((client, idx) => (
          <div
            key={idx}
            className="group relative bg-gray-900/30 rounded-xl p-6 w-40 h-24 flex items-center justify-center border border-gray-800 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500 opacity-0 translate-y-8 animate-cardFadeIn"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <img
              src={client.logo}
              alt={client.name}
              className="max-h-12 object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Moving Film Reel Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-blue-400/40 animate-reelMotion"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400/40 via-pink-400/40 to-purple-400/40 animate-reelMotion delay-1000"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes reelMotion {
          0% { transform: translateX(-100%); opacity: 0.3; }
          50% { opacity: 0.6; }
          100% { transform: translateX(100%); opacity: 0.3; }
        }

        .animate-fadeIn {
          animation: fadeIn 1.3s ease-out forwards;
        }

        .animate-cardFadeIn {
          animation: fadeIn 1.1s ease-out forwards;
        }

        .animate-reelMotion {
          animation: reelMotion 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
