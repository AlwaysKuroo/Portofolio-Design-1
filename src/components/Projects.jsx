"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const projects = [
  {
    id: 1,
    title: "Project One",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "A modern web application with clean design and smooth interactions.",
  },
  {
    id: 2,
    title: "Project Two",
    category: "Mobile App",
    image: "/placeholder.svg?height=600&width=800",
    description: "An innovative mobile application with unique user experience.",
  },
  {
    id: 3,
    title: "Project Three",
    category: "UI/UX Design",
    image: "/placeholder.svg?height=600&width=800",
    description: "A comprehensive design system for a large-scale platform.",
  },
  {
    id: 4,
    title: "Project Four",
    category: "Web Development",
    image: "/placeholder.svg?height=600&width=800",
    description: "A high-performance web application with complex functionality.",
  },
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative">
      {/* Diagonal line decoration */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black transform -skew-y-2 origin-top-left"></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A selection of my recent work. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="aspect-video bg-gray-800 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <motion.div
                className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeProject === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-sm text-gray-400 uppercase tracking-wider mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <motion.button
                  className="self-start px-6 py-2 border border-white hover:bg-white hover:text-black transition-colors duration-300 text-sm uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                </motion.button>
              </motion.div>

              {/* Project number */}
              <div className="absolute top-4 right-4 bg-white text-black w-10 h-10 flex items-center justify-center font-bold">
                {project.id.toString().padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.button
            className="px-8 py-3 border-2 border-white hover:bg-white hover:text-black transition-colors duration-300 uppercase tracking-wider text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
