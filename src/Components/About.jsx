import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // play animation once
        }
      },
      { threshold: 0.2 } // trigger when 20% visible
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-black text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Artistic Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      {/* Film Grain Overlay */}
      <div className={`pointer-events-none absolute inset-0 bg-[url('/assets/film-grain.png')] opacity-[0.12] mix-blend-overlay z-10 ${isVisible ? "about-animate-grain" : ""}`}></div>

      {/* Light Streaks */}
      <div className={`pointer-events-none absolute top-0 left-0 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] rotate-12 opacity-20 ${isVisible ? "about-animate-streak" : ""}`}></div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? "about-animate-fade-in" : "opacity-0"}`}>
          <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            Behind the Lens
          </h3>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            With over <span className="text-pink-400 font-semibold">25 years</span> of hands-on experience in broadcast production, I am a seasoned TV/Film Director and Producer deeply rooted in the Nigerian creative industry.
            <br /><br />
            I specialize in crafting <span className="text-purple-400 font-semibold">high-impact commercials, reality shows, documentaries,</span> and branded content that captivate both local and global audiences.
            <br /><br />
            As the Owner and Lead Creative at <strong className="text-blue-400">KROSSKRAFT COMMUNICATIONS</strong>, I’ve helmed iconic campaigns and original formats for multinationals and premium Nigerian brands—delivering end-to-end mastery: from ideation and scripting to casting, directing, editing, and final delivery.
          </p>
          <button
            onClick={() =>
              window.open("https://www.youtube.com/@owolabiodesola9245", "_blank")
            }
            className={`relative flex items-center gap-3 px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold tracking-wider shadow-lg transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-pink-500/40 ${isVisible ? "about-animate-bounce" : ""}`}
          >
            <span className="relative flex items-center justify-center w-6 h-6">
              <span className={`absolute w-8 h-8 rounded-full bg-white/20 ${isVisible ? "about-animate-pulse" : ""}`}></span>
              <FaPlay className="relative text-sm z-10" />
            </span>
            Watch Reel
          </button>
        </div>

        {/* Image Section */}
        <div className={`w-full flex justify-center relative transition-all duration-1000 ${isVisible ? "about-animate-slide-in" : "opacity-0"}`}>
          <div className="relative w-[95%] max-w-[500px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/assets/Owo@2x.jpeg"
              alt="Creative Director Toks"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes aboutFadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes aboutSlideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes aboutBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes aboutPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 0.8; }
        }
        @keyframes aboutGrain {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }
        @keyframes aboutStreak {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .about-animate-fade-in { animation: aboutFadeIn 1.2s ease-out forwards; }
        .about-animate-slide-in { animation: aboutSlideIn 1.2s ease-out forwards; }
        .about-animate-bounce { animation: aboutBounce 2.5s ease-in-out infinite; }
        .about-animate-pulse { animation: aboutPulse 2.5s ease-in-out infinite; }
        .about-animate-grain { animation: aboutGrain 1s steps(2) infinite; }
        .about-animate-streak { animation: aboutStreak 6s linear infinite; }
      `}</style>
    </section>
  );
}
