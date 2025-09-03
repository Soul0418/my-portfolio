"use client"

import React from "react"
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiShadcnui,
  SiPython,
  SiSupabase,
} from "react-icons/si"
import { motion } from "framer-motion"
import clsx from "clsx"

const DURATION = 0.25
const STAGGER = 0.025

interface FlipLinkProps {
  children: string
  href: string
}
const FlipLink: React.FC<FlipLinkProps> = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      target="_blank"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-2xl font-bold uppercase dark:text-white/90 sm:text-0xl md:text-3xl"
      style={{ lineHeight: 0.90 }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  )
}

const techStack = [
  {
    name: "TAILWIND CSS",
    href: "https://tailwindcss.com/",
    icon: <SiTailwindcss size={48} color="#38b2ac" />,
  },
  {
    name: "REACT.JS",
    href: "https://reactjs.org/",
    icon: <FaReact size={48} color="#61dafb" />,
  },
  {
    name: "JAVASCRIPT",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: <FaJs size={48} color="#f7df1e" />,
  },
  {
    name: "NEXT.JS",
    href: "https://nextjs.org/",
    icon: <SiNextdotjs size={48} color="#e5e7eb" />,
  },
  {
    name: "SHADCN UI",
    href: "https://ui.shadcn.com/",
    icon: <SiShadcnui size={48} color="#e5e7eb" />,
  },
  {
    name: "POSTGRESQL",
    href: "https://www.postgresql.org/",
    icon: <SiPostgresql size={48} color="#336791" />,
  },
  {
    name: "MYSQL",
    href: "https://www.mysql.com/",
    icon: <SiMysql size={48} color="#4479a1" />,
  },
  {
    name: "MONGODB",
    href: "https://www.mongodb.com/",
    icon: <SiMongodb size={48} color="#47a248" />,
  },
  {
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    icon: <FaHtml5 size={48} color="#e34c26" />,
  },
  {
    name: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    icon: <FaCss3Alt size={48} color="#2965f1" />,
  },
  {
    name: "PYTHON",
    href: "https://developer.mozilla.org/en-US/docs/Web/PYTHON",
    icon: <SiPython size={48} color="#3776AB" />, // Python blue color
  },
  {
    name: "SUPABASE",
    href: "https://supabase.com/",
    icon: <SiSupabase size={48} color="#3ECF8E" />, // Supabase green color
  }
]

export default function TechStackFlipGrid() {
  return (
    <div className="container mx-auto px-6 pt-5 mt-35">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center">
        Skills
      </h2>
  
      <div className="min-h-screen flex items-start justify-center bg-background-black px-4 mt-30">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-5 gap-x-3 max-w-5xl w-full justify-center">
          {techStack.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:underline group"
            >
              <span
                className={clsx(
                  "inline-flex items-center justify-center w-14 h-14",
                  "filter grayscale transition duration-300 ease-in-out",
                  "group-hover:filter-none"
                )}
              >
                {item.icon}
              </span>
              <FlipLink href={item.href}>{item.name}</FlipLink>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
  
  
}
