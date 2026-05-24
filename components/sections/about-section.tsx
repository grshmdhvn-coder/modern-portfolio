"use client"

import { motion } from "framer-motion"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 mb-12"
        >
          About <span className="text-purple-600">Me</span>
        </motion.h2>

        {/* MESSAGE STYLE BOX */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-10 shadow-sm"
        >

          {/* Subtle Bubble Pointer */}
          <div className="absolute -left-2 top-10 w-4 h-4 bg-slate-50 border-l border-b border-slate-200 rotate-45"></div>

          <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed">

            <p>
              I am a Mechanical Engineer specializing in{" "}
              <span className="font-semibold text-purple-600">
                Applied Artificial Intelligence for Digital Production Systems
              </span>.
            </p>

            <p>
              I have gained practical experience in industrial manufacturing through work at{" "}
              <span className="font-semibold text-purple-600">Siemens</span> and{" "}
              <span className="font-semibold text-purple-600">BHEL</span>, 
              focusing on CAD-driven design, production data analytics, and process optimization.
            </p>

            <p>
              My core interests include{" "}
              <span className="font-semibold text-purple-600">
                ERP/MES integration, additive manufacturing,
              </span>{" "}
              and automation of visual and analytics pipelines.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  )
}