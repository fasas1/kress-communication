import React from "react";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Cinematic glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,150,0.15),transparent)] blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Let’s Bring Your Vision to Life
        </h2>
        <p className="text-gray-300 mb-12 max-w-xl mx-auto">
          Whether it’s a commercial, documentary, or full-scale production, let’s make something unforgettable together.
        </p>

        {/* Contact Form (Static - FormSubmit) */}
        <form
          action="https://formsubmit.co/YOUR-EMAIL@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Tell me about your project..."
            required
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://owomoney@yahoo.co.uk.com/thank-you"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-pink-500/40 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Quick Connect Options */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-10">
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/2348176840381?text=Hi%20I'm%20interested%20in%20your%20videography%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
          >
            <i className="fab fa-whatsapp text-xl mr-2"></i>
            Chat on WhatsApp
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/owolabi-odesola-a0036921"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            <i className="fab fa-linkedin text-xl mr-2"></i>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

