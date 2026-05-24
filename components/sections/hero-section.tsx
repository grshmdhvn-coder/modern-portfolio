"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#3b0764] text-white"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight whitespace-normal sm:whitespace-nowrap bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent"
            >
             Girish Madhavan Anusuri
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-gray-300 max-w-xl"
            >
              Applied AI graduate student in Germany specializing in digital production systems,
              combining frontend engineering, AI-driven workflows, and industrial manufacturing expertise.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center gap-4"
            >
              <button
                onClick={() => {
                  const section = document.getElementById("projects")
                  if (section) {
                    const yOffset = -100
                    const y =
                      section.getBoundingClientRect().top +
                      window.pageYOffset +
                      yOffset
                    window.scrollTo({ top: y, behavior: "smooth" })
                  }
                }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm hover:scale-105 transition"
              >
                View Projects
              </button>

              <a
                href="/resume.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-600 text-sm font-semibold text-white hover:bg-white hover:text-black transition"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="w-[240px] sm:w-[280px] rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:scale-105 transition">
              <img
                src="/images/profile.jpg"
                alt="Girish Madhavan"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}