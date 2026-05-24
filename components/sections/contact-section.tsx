"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/motion"

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <motion.div
          variants={fadeUp as any}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-transparent bg-clip-text">
            Get In Touch
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            transition={{ duration: 0.7 }}
            className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mt-4 rounded-full"
          />

          <p className="text-slate-600 max-w-2xl mx-auto mt-5">
            Open to opportunities in AI-driven manufacturing, embedded systems, and engineering roles. Let’s collaborate.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* FORM */}
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6 text-slate-900">
              Send a Message
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />

              <button
                type="button"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO */}
          <motion.div
            variants={fadeUp as any}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* Email */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition">
              <p className="text-sm text-slate-500">Email</p>
              <a
                href="mailto:grshmdhvn@gmail.com"
                className="text-lg font-semibold text-cyan-600 hover:underline"
              >
                grshmdhvn@gmail.com
              </a>
            </div>

            {/* Phone (UPDATED) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition">
              <p className="text-sm text-slate-500">Phone</p>
              <a
                href="tel:+4915510248683"
                className="text-lg font-semibold text-blue-600 hover:underline"
              >
                +49 155 102 48683
              </a>
            </div>

            {/* LinkedIn */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition">
              <p className="text-sm text-slate-500">LinkedIn</p>
              <a
                href="https://www.linkedin.com/messaging/compose?recipient=girish-madhavan-anusuri"
                target="_blank"
                rel="noreferrer"
                className="text-lg font-semibold text-indigo-600 hover:underline"
              >
                Connect on LinkedIn
              </a>
            </div>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl transition">
              <p className="text-sm text-slate-500">Location</p>
              <p className="text-lg font-semibold text-slate-800">
                Cham, Germany
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}