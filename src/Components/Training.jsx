import React from "react";
import { FaGraduationCap, FaCertificate, FaLightbulb } from "react-icons/fa";

export default function Training() {
  const trainings = [
    {
      icon: <FaGraduationCap />,
      title: "IBC (International Broadcasting Conference)",
      location: "Amsterdam",
    },
    {
      icon: <FaLightbulb />,
      title: "PLASA Expo on Film/TV Lighting & Sound",
      location: "London",
    },
    {
      icon: <FaCertificate />,
      title: "Associate Registered Practitioner of Advertising (APCON)",
      location: "Nigeria",
    },
  ];

  return (
    <section id="training" className="relative bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white py-24 px-6 overflow-hidden">
      {/* Ambient Glow Effects */}
      <div className="absolute top-16 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-16 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 animate-fadeIn">
          Training & Affiliations
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg italic animate-fadeIn delay-200">
          Learning, growth, and professional recognition in global filmmaking.
        </p>

        {/* Training Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {trainings.map((item, idx) => (
            <div
              key={idx}
              className="group bg-gray-900/50 rounded-xl p-8 border border-gray-800 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500 opacity-0 translate-y-8 animate-cardFadeIn"
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <div className="flex justify-center mb-4 text-pink-400 text-4xl group-hover:text-purple-400 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-lg font-semibold mb-2 text-white group-hover:text-pink-400 transition-colors">
                {item.title}
              </h4>
              <p className="text-gray-400 text-sm italic">{item.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Light Orbs */}
      <div className="absolute top-10 left-1/3 w-36 h-36 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulseSlow -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulseSlow -z-10"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        .animate-fadeIn {
          animation: fadeIn 1.3s ease-out forwards;
        }

        .animate-cardFadeIn {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-pulseSlow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
