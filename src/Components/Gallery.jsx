import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  { title: "The Art of Sound", description: "A magnetic performance by Africa’s highlife king — every chord, every cheer, every heartbeat captured in vivid detail", image: "/assets/7.jpeg", aspect: "portrait" },
  { title: "Live in Vibes", description: "Backstage and on stage — an intimate portrait of a musical icon shaping rhythms that transcend borders", image: "/assets/11.jpeg", aspect: "landscape" },
  { title: "Wide Angle Moment", description: "A sweeping view that immerses you in the scale, the energy, and the electric unity of the event.", image: "/assets/9.jpeg", aspect: "landscape" },
  { title: "Screen Elegance", description: "One of Nollywood’s most celebrated actresses — commanding presence, timeless elegance, and stories told with every glance.", image: "/assets/31.jpeg", aspect: "portrait" },
  { title: "Electric Crowd", description: "Capturing the raw energy and passion of the crowd as the beat drops.", image: "/assets/12.jpeg", aspect: "landscape" },
  { title: "Quiet Reflection", description: "A cinematic moment of solitude and thought, framed with natural light.", image: "/assets/13.jpeg", aspect: "portrait" },
  { title: "City Lights", description: "Nighttime cityscape alive with color and movement — a visual symphony.", image: "/assets/20.jpeg", aspect: "landscape" },
  { title: "Emotive Close-up", description: "An intimate look capturing raw emotion and story behind the eyes.", image: "/assets/10.jpeg", aspect: "portrait" },
  { title: "Stage Drama", description: "Theatrical lighting and dramatic angles reveal hidden narratives.", image: "/assets/90.jpeg", aspect: "landscape" },
  { title: "Golden Hour", description: "The magic of golden hour lighting transforms the scene into a dreamscape.", image: "/assets/3.jpeg", aspect: "landscape" },
  { title: "Flow and Motion", description: "Blurring motion to evoke the rhythm and pace of the story.", image: "/assets/1.jpeg", aspect: "portrait" },
  { title: "Silent Story", description: "A minimalist frame conveying a thousand words through silence.", image: "/assets/21.jpeg", aspect: "landscape" },
  { title: "Electric Pulse", description: "The energy of the crowd pulsing with vibrant colors and lights.", image: "/assets/23.jpeg", aspect: "landscape" },
  { title: "Dramatic Silhouette", description: "Silhouettes telling untold stories in the fading light.", image: "/assets/32.jpeg", aspect: "portrait" },
  { title: "The Final Cut", description: "Behind the scenes moments capturing the essence of storytelling.", image: "/assets/26.jpeg", aspect: "landscape" },
];

export default function CinematicGallery() {
  const [modalIndex, setModalIndex] = useState(null);

  const openModal = (index) => setModalIndex(index);
  const closeModal = () => setModalIndex(null);

  const prevImage = () =>
    setModalIndex((i) => (i === 0 ? projects.length - 1 : i - 1));
  const nextImage = () =>
    setModalIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <section
      id="gallery"
      className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-20 overflow-hidden"
    >
      {/* Cinematic Glow Background */}
      <div className="absolute top-16 left-1/4 w-72 h-72 bg-pink-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-16 right-1/4 w-72 h-72 bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>

      {/* Content Wrapper */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
        >
          Cinematic Gallery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-xl mx-auto mb-14 text-center italic"
        >
          A curated collection showcasing the emotion, artistry, and storytelling power of my work.
        </motion.p>

        {/* Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className="relative rounded-lg overflow-hidden cursor-pointer group"
              onClick={() => openModal(idx)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-110 shadow-2xl shadow-pink-600/70"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-transparent to-transparent px-5 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-lg font-semibold text-pink-400">{project.title}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalIndex !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 p-6"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={projects[modalIndex].image}
                alt={projects[modalIndex].title}
                className="w-full max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/95 px-8 py-6">
                <h3 className="text-3xl font-bold text-pink-500 tracking-wide">
                  {projects[modalIndex].title}
                </h3>
                <p className="text-gray-300 mt-2">{projects[modalIndex].description}</p>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                aria-label="Previous Image"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-black bg-red-600 rounded-full p-3 hover:bg-red-700 transition"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                aria-label="Next Image"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-black bg-red-600 rounded-full p-3 hover:bg-red-700 transition"
              >
                ›
              </button>

              {/* Close Button */}
              <button
                onClick={closeModal}
                aria-label="Close Modal"
                className="absolute top-4 right-4 text-black bg-red-600 rounded-full p-2 hover:bg-red-700 transition"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
