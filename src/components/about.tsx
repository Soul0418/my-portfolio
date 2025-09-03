"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";
import { AuroraText } from "./magicui/aurora-text";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

export function AboutSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-black dark:text-white transition-colors duration-300">
      
      {/* Heading */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeInUp}
        className="text-4xl md:text-5xl font-bold mb-6 text-center"
      >
        About Me
      </motion.h2>

      {/* Description */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={fadeInUp}
        className="text-neutral-700 dark:text-neutral-400 text-shadow-lg md:text-2xl  max-w-4xl text-center mb-10 leading-relaxed"
      >
        I am a{" "}
        <AuroraText className="font-bold">
          Full Stack Developer
        </AuroraText>
        {" "}
        passionate about creating beautiful, interactive, and responsive web experiences. 
        I specialize in{" "}
        <LinkPreview url="https://react.dev" className="font-bold">React</LinkPreview>,{" "}
        <LinkPreview url="https://nextjs.org" className="font-bold">Next.js</LinkPreview>,{" "}
        <LinkPreview url="https://www.typescriptlang.org" className="font-bold">TypeScript</LinkPreview>,{" "}
        <LinkPreview url="https://tailwindcss.com" className="font-bold">Tailwind CSS</LinkPreview> and{" "}
        <LinkPreview url="https://framer.com/motion" className="font-bold">Framer Motion</LinkPreview>{" "}
        to build modern, sleek, and high-performance websites.
        On the backend, I work with{" "}
        <LinkPreview url="https://nodejs.org" className="font-bold">Node.js</LinkPreview>,{" "}
        <LinkPreview url="https://expressjs.com" className="font-bold">Express</LinkPreview>,{" "}
        <LinkPreview url="https://www.prisma.io" className="font-bold">Prisma</LinkPreview>, and{" "}
        <LinkPreview url="https://www.postgresql.org" className="font-bold">PostgreSQL</LinkPreview>{" "}
        to create robust, scalable server-side applications.
      </motion.p>
    </section>
  );
}
