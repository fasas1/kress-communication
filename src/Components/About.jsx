import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full bg-gradient-to-b from-[#0d0d0d] via-[#1a1a1a] to-black text-white py-28 px-6 md:px-20 overflow-hidden"
    >
      {/* Artistic Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10"></div>

      {/* 🎞️ Film Grain Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/assets/film-grain.png')] opacity-[0.12] mix-blend-overlay z-10 animate-grain"></div>

      {/* ✨ Light Streaks */}
      <div className="pointer-events-none absolute top-0 left-0 w-[200%] h-full bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.1)_0%,transparent_70%)] rotate-12 opacity-20 animate-streak"></div>

      <div className="relative z-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Section */}
        <div className="space-y-8 animate-fade-in">
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
       
        </div>

        {/* Image Section */}
        <div className="w-full animate-slide-in flex justify-center relative">
          <div className="relative w-[95%] max-w-[500px] aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <img
              src="/assets/Owo@2x.jpeg"
              alt="Creative Director Toks"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
            />
            {/* Artistic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
          {/* Floating Artistic Element */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-tr from-pink-500 to-purple-500 opacity-20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }

        @keyframes streak {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 1.2s ease-out forwards;
        }

        .animate-grain {
          animation: grain 1s steps(2) infinite;
        }

        .animate-streak {
          animation: streak 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
