"use client"

import Image from "next/image"
import { Timeline } from "./ui/timeline"

export default function Experience() {
  const data = [
    {
      title: "Web Developer intern @ CollegeTips.in",
      date: "May 2025 – Jun 2025",
      content: (
        <>
          <p>
            Completed a <strong>Web Development Internship at CollegeTips.in</strong>, where I built and 
            enhanced interactive, user-friendly web pages focusing on <strong>responsive design</strong>, 
            <strong>photo gallery layouts</strong>, and <strong>accessibility features</strong>. 
            Gained hands-on experience with <strong>HTML, CSS, JavaScript, and React</strong> to create 
            visually engaging interfaces while ensuring <strong>cross-device compatibility</strong>. 
            Contributed to improving site performance, UI animations, and overall user engagement, 
            while collaborating with a creative team to align designs with brand goals.
          </p>
          <Image 
            src="/Certificate1.png" 
            alt="CollegeTips Internship" 
            width={600} 
            height={400} 
            className="rounded-xl shadow-lg mt-4"
          />
        </>
      )
    },
    {
      title: "Project Management intern @ Excelerate",
      date: "May 2025 – Jun 2025",
      content: (
        <>
          <p>
            Contributed to the <strong>Excelerate Global Career Fair</strong> by leading the development 
            and integration of <strong>AI-powered project management tools</strong> such as Notion AI, ClickUp, 
            and Asana. Conducted <strong>automation testing</strong> to streamline workflows, enhance team 
            collaboration, and improve event execution efficiency. Played a key role in <strong>strategic 
            event planning</strong>, including project timeline structuring, AI automation integration, and 
            delivering comprehensive documentation to support long-term scalability of the event’s 
            digital infrastructure.
          </p>
          <Image 
            src="/Certificate2.png" 
            alt="Excelerate Project" 
            width={600} 
            height={400} 
            className="rounded-xl shadow-lg mt-4"
          />
        </>
      ),
    },
    {
      title: "Web Developer intern @ Labmentix",
      date: "2023 – Present",
      content: (
        <>
          <p>
            Worked as a <strong>Web Development Intern at LabMentix</strong>, where I contributed to designing, 
            building, and optimizing responsive web applications. Gained hands-on experience in 
            <strong>front-end development</strong> using <strong>React.js, Next.js, and Tailwind CSS</strong>, while also working with 
            <strong>backend integration</strong> and APIs to deliver functional and scalable solutions. 
            Collaborated with the team to enhance UI/UX, improve performance, and implement modern 
            features that aligned with client requirements and industry standards.
          </p>
          <Image 
            src="/Certificate.png" 
            alt="Labmintix certificate" 
            width={600} 
            height={400} 
            className="rounded-xl shadow-lg mt-4"
          />
        </>
      )
    },
  ]

  return (
    <section className="py-20 bg-background-black text-foreground transition-colors">
      <div className="container mx-auto px-6 ">
        <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Experience
        </h1>
        <Timeline data={data} />
      </div>
    </section>
  )
}
