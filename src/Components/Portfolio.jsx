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
    <section id="portfolio" className="bg-gray-100 text-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-4xl font-bold text-center mb-12">Core Expertise</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertise.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
