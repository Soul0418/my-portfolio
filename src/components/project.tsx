"use client"

import ExpandableCardDemoStandard from "@/components/expandable-card-demo-standard"

export default function Project() {
  return (
    <section className="py-20 bg-background-black text-foreground transition-colors">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Projects
        </h2>
        <ExpandableCardDemoStandard />
      </div>
    </section>
  )
}
