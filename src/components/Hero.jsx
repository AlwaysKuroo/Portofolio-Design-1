"use client"

import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-white/20"></div>
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <motion.h2
              className="text-xl md:text-2xl font-light mb-4 text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hello, I'm
            </motion.h2>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <span className="block">YOUR</span>
              <span className="block">NAME</span>
              <span className="text-gray-400">HERE</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I create{" "}
              <span className="relative inline-block">
                <span className="relative z-10">digital experiences</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-white/10 -z-10"></span>
              </span>{" "}
              that merge creativity with functionality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex space-x-4"
            >
              <motion.button
                className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                My Work
              </motion.button>

              <motion.button
                className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Abstract shape decorations */}
              <div className="absolute -top-20 -right-20 w-64 h-64 border border-white/20 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-white/20 rounded-full"></div>

              {/* Profile image with glitch effect */}
              <div className="w-full h-[500px] bg-gradient-to-br from-gray-800 to-black relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-9xl font-bold opacity-20">
                  PORTFOLIO
                </div>
                {/* Replace with your actual profile image */}
                <div className="absolute inset-4 bg-gray-900 flex items-center justify-center">
                  <p className="text-xl">YOUR PHOTO HERE</p>
                </div>

                {/* Glitch lines */}
                <motion.div
                  className="absolute top-1/4 left-0 w-full h-1 bg-white/30"
                  animate={{
                    y: [0, 5, -5, 0],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>

                <motion.div
                  className="absolute top-2/3 left-0 w-full h-1 bg-white/30"
                  animate={{
                    y: [0, -8, 8, 0],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                  }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
        }}
      >
        <div className="flex flex-col items-center">
          <p className="text-sm uppercase tracking-widest mb-2">Scroll</p>
          <div className="w-[1px] h-10 bg-white/50"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
