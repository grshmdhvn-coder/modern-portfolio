"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-xl backdrop-blur-lg border ${
        scrolled
          ? "bg-white/80 border-gray-200 shadow-lg"
          : "bg-white/10 border-white/20"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* NAME (UPDATED GRADIENT) */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-semibold whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-300 bg-clip-text text-transparent">
              Girish Madhavan Anusuri
            </span>
          </motion.div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={`text-sm font-medium transition ${
                  scrolled
                    ? "text-gray-800 hover:text-purple-600"
                    : "text-gray-200 hover:text-white"
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* MOBILE BUTTON */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? "text-gray-800" : "text-white"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 bg-white/90 backdrop-blur-md rounded-lg p-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-gray-800 hover:text-purple-600 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}