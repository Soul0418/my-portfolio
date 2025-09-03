"use client";

import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const resizeObserver = new ResizeObserver(() => {
        setHeight(ref.current?.getBoundingClientRect().height || 0);
      });

      resizeObserver.observe(ref.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="max-w-7xl mx-auto rounded-3xl p-6 bg-transparent border border-white-800">
      <div className="rounded-3xl p-5 bg-white/10 dark:bg-black/20 backdrop-blur border border-white-700 dark:border-white/5">
        <div
          ref={containerRef}
          className="w-full text-foreground font-sans md:px-10 transition-colors"
        >
          {/* Header */}
          <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Internships
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto md:mx-0">
              The experience I have gained by working as an intern at these companies.
            </p>
          </div>

          {/* Timeline */}
          <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="flex justify-start pt-10 md:pt-40 md:gap-10 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot + label */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  <div className="h-10 w-10 absolute left-3 md:left-3 rounded-full bg-background flex items-center justify-center border border-border">
                    {/* Glowing pulse effect */}
                    <motion.div
                      className="absolute h-10 w-10 rounded-full bg-purple-500/20"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border border-white" />
                  </div>
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-extrabold text-muted-foreground group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>

                {/* Content */}
                <motion.div
                  className="relative pl-20 pr-4 md:pl-4 w-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  <h3 className="md:hidden block text-2xl mb-4 font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {item.title}
                  </h3>
                  {item.content}
                </motion.div>
              </motion.div>
            ))}

            {/* Animated vertical line */}
            <div
              style={{ height: height + "px" }}
              className="absolute left-8 top-0 overflow-hidden w-[2px] 
                bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
                from-transparent via-border to-transparent 
                [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
            >
              <motion.div
                style={{
                  height: heightTransform,
                  opacity: opacityTransform,
                }}
                className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-b 
                  from-purple-500 via-pink-500 to-blue-500 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
