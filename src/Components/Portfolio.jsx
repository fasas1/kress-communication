import React, { useEffect, useRef } from "react";

export default function Portfolio() {
  const sectionRef = useRef(null);

  const expertise = [
    {
      title: "TV Commercials",
      description:
        "Directed high-profile campaigns for Delta Soap, Devon Soap, Procold, Passion Energy Drink, Gynsomin Multivitamins, Coatal Soft gel, Amino Pep and more—delivering crisp storytelling with visual flair, even under tight schedules and budgets.",
      image: "/assets/4.jpeg",
    },
    {
      title: "Branded Content & Reality TV",
      description:
        "Producer/Content Director of top-rated formats like The Next Titan, The Debaters, Bank PHB Intern, and Moments with Mo, Fund It Forward (A Channels TV Original), Justice Court (a Nigerian based arbitration Courtroom reality series).",
      image: "/assets/2.jpeg",
    },
    {
      title: "Script Development & Creative Direction",
      description:
        "From biopics to training videos and documentaries, I bring a broadcast journalist’s mind and a director’s eye to every story.",
      image: "/assets/90.jpeg",
    },
    {
      title: "Corporate & Political Documentaries",
      description:
        "Produced and directed impactful narratives for Unilever, First Bank, British America Tobacco (BAT), Coca-Cola, Exxon Mobil and government agencies.",
      image: "/assets/99.jpeg",
    },
    {
      title: "Radio Jingles",
      description:
        "Creative and production direction for radio campaigns that amplify brand messaging through captivating audio storytelling.",
      image: "/assets/14.jpeg",
    },
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("mh-visible");
            obs.disconnect(); // one-time play; remove if you want repeat-on-reenter
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative bg-gradient-to-b from-black via-[#0d0d0d] to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background glow (keeps your look, but with controlled animation) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-[120px] -z-10 mh-glow"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] -z-10 mh-glow mh-glow--alt"></div>

      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mb-14 mh-title">
          Core Expertise
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <article
              key={idx}
              className="group relative bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/30 transition duration-500 mh-card"
              style={{ ["--delay"]: `${idx * 0.18}s` }}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                />
                {/* Cinematic Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <h4 className="text-xl font-semibold mb-2 text-pink-400 group-hover:text-purple-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Component-local CSS & keyframes (works with Vite) */}
      <style>{`
        /* KEYFRAMES */
        @keyframes mhTitleIn {
          0% { opacity: 0; transform: translateY(-18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mhCardIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          60% { opacity: 1; transform: translateY(-6px) scale(1.03); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes mhGlowPulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.08); opacity: 0.85; }
          100% { transform: scale(1); opacity: 0.5; }
        }

        /* INITIAL (hidden) STATES */
        .mh-title { opacity: 0; transform: translateY(-18px); will-change: transform, opacity; }
        .mh-card { opacity: 0; transform: translateY(40px) scale(0.98); will-change: transform, opacity; }

        /* VISIBLE - added by IntersectionObserver */
        .mh-visible .mh-title { animation: mhTitleIn 800ms cubic-bezier(.2,.9,.2,1) forwards; animation-delay: 0.05s; }
        .mh-visible .mh-card { animation: mhCardIn 1s cubic-bezier(.2,.9,.2,1) forwards; animation-delay: var(--delay); }

        /* Glow blobs */
        .mh-glow { animation: mhGlowPulse 6s ease-in-out infinite; }
        .mh-glow--alt { animation-delay: 1s; }

        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .mh-title, .mh-card, .mh-glow { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}
