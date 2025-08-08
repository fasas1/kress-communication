import React, { useEffect, useRef } from "react";
import { FaVideo, FaAward, FaTv, FaUsers } from "react-icons/fa";

export default function CareerHighlights() {
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: <FaVideo />,
      text: "Directed 40+ high-impact TV commercials for leading FMCG and finance brands.",
    },
    {
      icon: <FaTv />,
      text: "Led two seasons of The Debaters, a pan-African oratory and public speaking reality TV show.",
    },
    {
      icon: <FaUsers />,
      text: "Directed Bank PHB Intern and helmed The Next Titan (S1 & S2) as Unit Director (Content).",
    },
    {
      icon: <FaVideo />,
      text: "Oversaw Moments with Mo (Season 6) as Supervising Producer, shaping top-tier TV content.",
    },
    {
      icon: <FaAward />,
      text: "Worked across 5+ production houses and networks, leaving a trail of award-worthy storytelling.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-card");
          }
        });
      },
      { threshold: 0.15 }
    );

    const cards = sectionRef.current.querySelectorAll(".highlight-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="career"
      className="relative bg-gradient-to-b from-black via-[#0c0c0c] to-black text-white py-24 px-6 overflow-hidden"
      ref={sectionRef}
    >
      {/* Ambient Glow */}
      <div className="absolute top-16 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-16 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 fade-heading">
          Career Highlights
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg italic fade-subheading">
          A track record of creative excellence in filmmaking and broadcast production.
        </p>

        {/* Highlights Grid */}
        <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="highlight-card opacity-0 translate-y-8 group flex items-center space-x-5 p-6 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500"
              style={{ animationDelay: `${idx * 0.25}s` }}
            >
              <div className="text-pink-400 text-3xl group-hover:text-purple-400 transition-colors">
                {item.icon}
              </div>
              <p className="text-gray-300 text-left leading-relaxed text-base group-hover:text-white transition-colors">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cinematic Lights */}
      <div className="absolute top-10 left-1/3 w-40 h-40 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-full blur-3xl pulse-slow -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-r from-blue-400/10 to-pink-400/10 rounded-full blur-3xl pulse-slow -z-10"></div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        .show-card {
          animation: fadeInUp 1s ease-out forwards;
        }
        .fade-heading {
          animation: fadeInUp 1s ease-out forwards;
        }
        .fade-subheading {
          animation: fadeInUp 1s ease-out forwards;
          animation-delay: 0.2s;
        }
        .pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
