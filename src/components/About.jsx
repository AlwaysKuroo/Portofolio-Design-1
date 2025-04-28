"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 border-t-2 border-r-2 border-white/10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 border-b-2 border-l-2 border-white/10"></div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-white mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square bg-gray-900 relative z-10">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-xl">YOUR PHOTO HERE</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-white/20 z-0"></div>

            {/* Experience indicators */}
            <motion.div
              className="absolute -bottom-10 -left-10 bg-white text-black px-6 py-4 z-20"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <span className="block text-4xl font-bold">5+</span>
              <span className="text-sm uppercase tracking-wider">Years Experience</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              I'm a <span className="text-gray-400">Creative Developer</span> Based in Indonesia
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel orci efficitur dictum.
              Curabitur at dignissim eros, vel pharetra ipsum. Sed consequat justo non pulvinar pellentesque.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec lacinia
              sapien at eros tempus, vel tempor nisi pharetra. Duis finibus tortor in est mattis, id fermentum ex
              efficitur.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="text-xl font-bold mb-2">Name</h4>
                <p className="text-gray-400">Your Name</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Email</h4>
                <p className="text-gray-400">your.email@example.com</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Location</h4>
                <p className="text-gray-400">Jakarta, Indonesia</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2">Availability</h4>
                <p className="text-gray-400">Freelance / Full-time</p>
              </div>
            </div>

            <motion.button
              className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm font-medium flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
