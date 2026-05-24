"use client"

import { motion } from "framer-motion"
import { fadeUp, containerStagger } from "@/lib/motion"

const skills = [
  // Programming
  { name: "Python", level: "Advanced", color: "from-blue-500 to-cyan-400" },
  { name: "C Programming", level: "Intermediate", color: "from-slate-600 to-slate-400" },

  // CAD / Design / PLM
  { name: "Autodesk Fusion 360", level: "Advanced", color: "from-orange-500 to-yellow-400" },
  { name: "SolidWorks", level: "Advanced", color: "from-blue-600 to-indigo-400" },
  { name: "CATIA V6", level: "Intermediate", color: "from-purple-500 to-pink-400" },
  { name: "AutoCAD", level: "Advanced", color: "from-red-500 to-orange-400" },
  { name: "PLM Concepts", level: "Intermediate", color: "from-indigo-500 to-blue-400" },

  // Industrial Systems
  { name: "ERP Systems", level: "Basic", color: "from-green-500 to-emerald-400" },
  { name: "MES (Manufacturing Execution Systems)", level: "Basic", color: "from-teal-500 to-cyan-400" },
  { name: "Predictive Maintenance Systems", level: "Intermediate", color: "from-rose-500 to-orange-400" },

  // Productivity
  { name: "MS Office Suite", level: "Advanced", color: "from-emerald-500 to-lime-400" },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">

        {/* SECTION TITLE */}
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 text-transparent bg-clip-text">
            Skills
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "110px" }}
            transition={{ duration: 0.7 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />

          <p className="text-slate-600 max-w-2xl mx-auto mt-5">
            Engineering, design, and industrial systems skills developed through academic and project experience.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <motion.div
          variants={containerStagger as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={fadeUp as any}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="relative group"
            >
              {/* Glow background */}
              <div
                className="absolute inset-0 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-all duration-300"
                style={{
                  backgroundImage: "linear-gradient(to right, var(--tw-gradient-stops))",
                }}
              />

              {/* Card */}
              <div className="relative p-5 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">

                {/* Skill Name */}
                <div className={`text-lg font-bold bg-gradient-to-r ${skill.color} text-transparent bg-clip-text`}>
                  {skill.name}
                </div>

                {/* Level */}
                <div className="text-xs text-slate-500 mt-1">
                  {skill.level}
                </div>

                {/* Progress Bar */}
                <div className="mt-3 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                    style={{
                      width:
                        skill.level === "Advanced"
                          ? "90%"
                          : skill.level === "Intermediate"
                          ? "65%"
                          : "40%",
                    }}
                  />
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}