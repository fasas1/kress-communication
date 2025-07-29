import React from "react";

export default function Portfolio() {
  const expertise = [
    {
      title: "TV Commercials",
      description:
        "Directed high-profile campaigns for Delta Soap, Devon Soap, Procold, Passion Energy Drink, Gynsomin Multivitamins, Coatal Soft gel, Amino Pep and more—delivering crisp storytelling with visual flair, even under tight schedules and budgets.",
      image: "/assets/1.jpeg",
    },
    {
      title: "Branded Content & Reality TV",
      description:
        "Producer/Content Director of top-rated formats like The Next Titan, The Debaters, Bank PHB Intern, and Moments with Mo, Fund It Forward (A Channels TV Original), Justice Court (a Nigerian based arbitration Courtroom reality series).",
      image: "/assets/2.jpeg",
    },
    {
      title: "Corporate & Political Documentaries",
      description:
        "Produced and directed impactful narratives for Unilever, First Bank, British America Tobacco (BAT), Coca-Cola, Exxon Mobil and government agencies.",
      image: "/assets/3.jpeg",
    },
    {
      title: "Script Development & Creative Direction",
      description:
        "From biopics to training videos and documentaries, I bring a broadcast journalist’s mind and a director’s eye to every story.",
      image: "/assets/4.jpeg",
    },
    {
      title: "Radio Jingles",
      description:
        "Creative and production direction for radio campaigns that amplify brand messaging through captivating audio storytelling.",
      image: "/assets/2.jpeg",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white py-20 px-6 overflow-hidden animate-sectionFadeIn"
    >
      {/* Background glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-14 animate-titleFadeIn">
          Core Expertise
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className={`group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-500 opacity-0 translate-y-6 animate-cardFadeIn`}
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Cinematic Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold mb-2 text-pink-400 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes sectionFadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes titleFadeIn {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes cardFadeIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-sectionFadeIn {
          animation: sectionFadeIn 1s ease-out forwards;
        }

        .animate-titleFadeIn {
          animation: titleFadeIn 1.2s ease-out forwards;
        }

        .animate-cardFadeIn {
          animation: cardFadeIn 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
