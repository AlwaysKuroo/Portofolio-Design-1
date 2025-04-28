"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "py-2 bg-black/80 backdrop-blur-md" : "py-4 bg-transparent"}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
          <span className="text-white">PORT</span>
          <span className="text-gray-400">FOLIO</span>
        </motion.div>

        <nav>
          <ul className="flex space-x-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }} className="relative">
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm uppercase tracking-widest hover:text-gray-300 transition-colors"
                >
                  {item}
                </a>
                <motion.div
                  className="absolute bottom-0 left-0 w-0 h-[1px] bg-white"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.2 }}
                />
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Navbar
