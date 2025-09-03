"use client"

import { ContainerTextFlipDemo } from "@/components/ui/container-text-flip-demo"
import { AboutSection } from "@/components/about"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, User, Briefcase, Github, Layers, Wrench, Contact } from "lucide-react"
import Project from "@/components/project"
import Experience from "@/components/experience"
import ThemeToggleButton from "@/components/ui/theme-toggle-button"
import Skills from "@/components/skills"
import CardFlip from "@/components/kokonutui/card-flip"
import DemoFooter from "@/components/footer"
import Background from "@/components/background"

export default function Portfolio() {
  const dockItems = [
    { title: "Home", icon: <Home className="w-5 h-5" />, href: "#" },
    { title: "About", icon: <User className="w-5 h-5" />, href: "#about" },
    { title: "Skills", icon: <Wrench className="w-5 h-5" />, href: "#Skills" },
    { title: "Project", icon: <Briefcase className="w-5 h-5" />, href: "#Project" },
    { title: "Experience", icon: <Layers className="w-5 h-5" />, href: "#Experience" },
    { title: "Contact", icon: <Contact className="w-5 h-5" />, href: "#contact" },
    { title: "Github", icon: <Github className="w-5 h-5" />, href: "https://github.com/Soul0418" },
    { title: "Theme", icon: <ThemeToggleButton /> },
  ]

  return (
    <Background>
      <div className="min-h-screen text-black dark:text-white transition-colors duration-300 relative z-10">
        {/* Hero */}
        <div className="flex items-center justify-center pl-6 pt-39">
          <ContainerTextFlipDemo />
        </div>

        {/* About */}
        <section id="about" className="pt-1">
          <AboutSection />
        </section>

        {/* Skills */}
        <section id="Skills" className="-mt-25">
          <Skills />
        </section>

        {/* Projects */}
        <section id="Project" className="-mt-20">
          <Project />
        </section>

        {/* Experience */}
        <section id="Experience" className="mt-20">
          <Experience />
        </section>

        {/* Contact */}
        <section id="contact" className="pb-40 flex justify-center">
          <CardFlip />
        </section>

        {/* Footer */}
        <DemoFooter />

        {/* Floating Dock */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <FloatingDock items={dockItems} />
        </div>
      </div>
    </Background>
  )
}
