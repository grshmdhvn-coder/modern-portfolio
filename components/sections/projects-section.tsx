"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Predictive Maintenance System",
    color: "cyan",
    description: [
      "Built Arduino-based system using vibration & temperature sensors",
      "Applied Z-score normalization for anomaly detection",
      "Designed real-time monitoring pipeline for rotating machinery",
    ],
    outcome: [
      "Low-cost industrial monitoring solution",
      "Early fault detection using statistical thresholds",
    ],
    tech: ["Arduino", "Sensors", "Python", "Signal Processing"],
  },
  {
    title: "AI Image Generation Pipeline (SDXL)",
    color: "violet",
    description: [
      "Developed automated product image generation pipeline",
      "Used Stable Diffusion XL with LoRA fine-tuning",
      "Optimized prompts for fashion-based outputs",
    ],
    outcome: [
      "Reduced manual design effort",
      "Enabled scalable AI content generation",
    ],
    tech: ["SDXL", "LoRA", "Diffusers", "Python"],
  },
  {
    title: "Sentiment Analysis System",
    color: "emerald",
    description: [
      "Built NLP pipeline for product review analysis",
      "Extracted sentiment insights from large datasets",
      "Converted text into actionable product signals",
    ],
    outcome: [
      "Improved product decision-making",
      "Structured unorganized review data",
    ],
    tech: ["NLP", "Python", "Data Analysis"],
  },
  {
    title: "Solid Modeling & Simulation",
    color: "orange",
    description: [
      "Designed mechanical components using CAD tools",
      "Performed structural & stress simulations",
      "Validated designs before manufacturing",
    ],
    outcome: [
      "Reduced design errors",
      "Improved manufacturing readiness",
    ],
    tech: ["CAD", "Simulation", "Engineering"],
  },

  // 🆕 NEW PROJECT ADDED
  {
    title: "Diesel Engine Performance Analysis with Coconut Biodiesel",
    color: "cyan",
    description: [
      "Studied effect of injection pressure on vibration, noise, and engine performance",
      "Used coconut biodiesel and methanol blends as alternative fuels",
      "Tested engine at multiple loads and injection pressures (140–210 bar)",
      "Analyzed emissions, brake thermal efficiency, and combustion behavior",
    ],
    outcome: [
      "Reduced emissions (HC, NOx, smoke density) in biodiesel blends",
      "Identified D70B25M5 as optimal fuel blend",
      "Improved understanding of renewable fuel performance in CI engines",
    ],
    tech: [
      "Diesel Engine Testing",
      "Biodiesel",
      "Experimental Analysis",
      "Emissions Study",
    ],
  },
]

// Card hover effects
const colorMap: any = {
  cyan: "hover:border-cyan-400 hover:shadow-cyan-200",
  violet: "hover:border-violet-400 hover:shadow-violet-200",
  emerald: "hover:border-emerald-400 hover:shadow-emerald-200",
  orange: "hover:border-orange-400 hover:shadow-orange-200",
}

// Title colors
const titleColorMap: any = {
  "Predictive Maintenance System": "text-cyan-600",
  "AI Image Generation Pipeline (SDXL)": "text-violet-600",
  "Sentiment Analysis System": "text-emerald-600",
  "Solid Modeling & Simulation": "text-orange-600",
  "Diesel Engine Performance Analysis with Coconut Biodiesel": "text-blue-600",
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">

        {/* SECTION TITLE UPDATED TO BLUE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-sky-500 to-cyan-400 text-transparent bg-clip-text">
            Projects
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"
          />

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            A collection of engineering and AI-driven projects demonstrating real-world problem solving and system design.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-3xl border border-slate-200 p-8 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${colorMap[project.color]}`}
            >

              <h3
                className={`text-2xl font-bold mb-4 transition-all duration-300 hover:tracking-wide ${titleColorMap[project.title]}`}
              >
                {project.title}
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-6">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mb-6">
                <p className="text-sm font-semibold uppercase text-slate-500 mb-2">
                  Outcome
                </p>
                <ul className="list-disc pl-5 text-slate-700 space-y-1">
                  {project.outcome.map((o, i) => (
                    <li key={i}>{o}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="bg-slate-50 border-slate-200 text-slate-700"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}