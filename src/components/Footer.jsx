"use client"

import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="text-2xl font-bold mb-4 md:mb-0" whileHover={{ scale: 1.05 }}>
            <span className="text-white">PORT</span>
            <span className="text-gray-400">FOLIO</span>
          </motion.div>

          <div className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
