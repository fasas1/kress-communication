import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CinematicShowcase() {
  const projects = [
    // Your existing 4 projects
    {
      title: "The Art of Sound",
      description: "A magnetic performance by Africa’s highlife king — every chord, every cheer, every heartbeat captured in vivid detail",
      image: "/assets/7.jpeg",
    },
    {
      title: "Live in Vibes",
      description: "Backstage and on stage — an intimate portrait of a musical icon shaping rhythms that transcend borders",
      image: "/assets/11.jpeg",
    },
    {
      title: "Wide Angle Moment",
      description: "A sweeping view that immerses you in the scale, the energy, and the electric unity of the event.",
      image: "/assets/9.jpeg",
    },
    {
      title: "Screen Elegance",
      description: "One of Nollywood’s most celebrated actresses — commanding presence, timeless elegance, and stories told with every glance.",
      image: "/assets/10.jpeg",
    },
  ];

  // Additional images to show in the gallery modal
  const extraImages = [
     "/assets/41.jpeg",
     "/assets/13.jpeg",
      "/assets/32.jpeg",
    "/assets/21.jpeg",
    "/assets/22.jpeg",
    "/assets/23.jpeg",
    "/assets/26.jpeg",
     "/assets/12.jpeg",
    
    "/assets/14.jpeg",
    "/assets/20.jpeg",
    "/assets/31.jpeg",
   
    "/assets/9.jpeg",
    "/assets/1.jpeg",
    "/assets/2.jpeg",
    "/assets/3.jpeg",
    "/assets/4.jpeg",
      "/assets/40.jpeg",
   
    "/assets/42.jpeg",
    "/assets/43.jpeg",
    "/assets/44.jpeg",

  ];

  // Modal state
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Open modal at specific image index
  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  // Navigation in modal
  const prevImage = () => setCurrentIndex((i) => (i === 0 ? extraImages.length - 1 : i - 1));
  const nextImage = () => setCurrentIndex((i) => (i === extraImages.length - 1 ? 0 : i + 1));

  return (
    <section className="relative bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white py-24 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>

      {/* Section header */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
        >
          Cinematic Showcase
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 mt-3 text-base md:text-lg italic"
        >
          Selected scenes from my portfolio of moving stories.
        </motion.p>
      </div>

      {/* Showcase items */}
      <div className="max-w-6xl mx-auto space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 1 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image with cinematic hover */}
            <div className="relative w-full md:w-1/2 group overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                <FaPlay className="text-white text-3xl opacity-80 group-hover:scale-110 transition-transform" />
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Letterbox effect */}
              <div className="absolute top-0 left-0 w-full h-10 bg-black"></div>
              <div className="absolute bottom-0 left-0 w-full h-10 bg-black"></div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* New Thumbnail Gallery Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h4 className="text-xl font-semibold mb-6 text-center">More Scenes</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {extraImages.slice(0, 4).map((src, i) => (
            <button
              key={i}
              onClick={() => openModal(i)}
              className="rounded-lg overflow-hidden border border-gray-700 hover:border-pink-500 transition"
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Extra scene ${i + 1}`}
                className="w-full h-32 object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
        {extraImages.length > 4 && (
          <div className="text-center mt-6">
            <button
              onClick={() => openModal(0)}
              className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:opacity-90 transition-opacity"
            >
              View All Scenes
            </button>
          </div>
        )}
      </div>

      {/* Modal Carousel for Extra Images */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-3xl w-full mx-4 rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-black text-3xl z-50"
              aria-label="Close gallery"
            >
              <FaTimes />
            </button>

            <img
              src={extraImages[currentIndex]}
              alt={`Scene ${currentIndex + 1}`}
              className="w-full max-h-[80vh] object-contain bg-black"
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-black bg-black/50 p-2 rounded-full hover:bg-black/80"
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black bg-black/50 p-2 rounded-full hover:bg-black/80"
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
