"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col justify-center items-center text-center px-6 md:px-20">
      {/* Name / Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold"
      >
        Hi, I’m <span className="text-gray-500 dark:text-gray-400">Your Name</span> 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        I build creative, minimal, and modern digital experiences on the web.
      </motion.p>

      {/* Call-to-Action */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-6 px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium shadow-lg hover:shadow-xl transition"
      >
        View My Work
      </motion.a>
    </section>
  )
}
