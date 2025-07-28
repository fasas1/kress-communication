import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white via-gray-50 to-white text-black py-24 px-6 md:px-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Text Section */}
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Behind the Lens
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            With over 25 years of hands-on experience in broadcast production, I am a seasoned TV/Film Director and Producer deeply rooted in the Nigerian creative industry.
            <br /><br />
            I specialize in crafting high-impact TV commercials, reality shows, branded content, documentaries, and docudramas that engage both local and international audiences.
            <br /><br />
            As the Owner and Lead Creative at <strong>KROSSKRAFT COMMUNICATIONS</strong>, I’ve led successful campaigns and original formats for multinationals and premium Nigerian brands—delivering with mastery across the full production cycle: from ideation and scripting to casting, directing, editing, and final delivery.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full animate-slide-in flex justify-center">
          <div className="relative w-[95%] max-w-[500px] aspect-[3/4] md:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/assets/Owolabi@2x.png"
              alt="Creative Director Toks"
              className="w-full h-full object-cover object-bottom transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
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

        .animate-fade-in {
          animation: fadeIn 1.2s ease-out forwards;
        }

        .animate-slide-in {
          animation: slideIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
