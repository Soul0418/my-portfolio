"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useState } from "react";


export interface CardFlipProps {
  title?: string;
  subtitle?: string;
  description?: string;
  features?: { icon: React.ReactNode; label: string; href?: string }[];
}

export default function CardFlip({
  title = "Contact Me",
  subtitle = "Let's get in touch",
  description = "I'm available for freelance projects, collaboration, or just a friendly chat. Reach out via any of the methods below.",
  features = [
    {
      icon: <Mail className="w-4 h-4 text-gray-500" />,
      label: "sak.kedare@gmial.com",
      href: "mailto:email@example.com",
    },
    {
      icon: <Phone className="w-4 h-4 text-gray-500" />,
      label: "+91 7718010418",
      href: "tel:+15551234567",
    },
    {
      icon: <Instagram className="w-4 h-4 text-gray-500" />,
    label: "sakshamm.tsx",
    href: "https://instagram.com/sakshamm.tsx",
    },
    {
      icon: <MapPin className="w-4 h-4 text-yellow-500" />,
      label: "Dombivli, India",
      href: "https://www.google.com/maps/place/City+Country",
    },
  ],
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full max-w-[280px] h-[320px] group [perspective:2000px]"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative w-full h-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          isFlipped ? "[transform:rotateY(180deg)]" : "[transform:rotateY(0deg)]"
        )}
      >
        {/* Front of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-white/30 dark:bg-black/30", // translucent background
            "border border-white/30 dark:border-white/20", // semi-transparent borders
            "backdrop-blur-md", // blur background beneath
            "shadow-md dark:shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {title}
              </h3>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">{subtitle}</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          className={cn(
            "absolute inset-0 w-full h-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "p-6 rounded-2xl",
            "bg-white/30 dark:bg-black/30", // translucent background
            "border border-white/30 dark:border-white/20", // semi-transparent borders
            "backdrop-blur-md", // blur background beneath
            "shadow-md dark:shadow-lg",
            "flex flex-col",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            !isFlipped ? "opacity-0" : "opacity-100"
          )}
        >
          <div className="flex-1 space-y-6">
            <p className="text-sm text-zinc-600 dark:text-zinc-400 tracking-tight line-clamp-4">
              {description}
            </p>

            <div className="space-y-3">
              {(features ?? []).map(({ icon, label, href }, index) => {
                const content = (
                  <>
                    {icon}
                    <span>{label}</span>
                  </>
                );

                return href ? (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
                    style={{
                      transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                      transitionProperty: "opacity, transform",
                      transitionTimingFunction: "ease-out",
                      transitionDuration: "500ms",
                    }}
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={label}
                    className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300 hover:text-orange-500 transition-colors"
                    style={{
                      transform: isFlipped ? "translateX(0)" : "translateX(-10px)",
                      opacity: isFlipped ? 1 : 0,
                      transitionDelay: `${index * 100 + 200}ms`,
                      transitionProperty: "opacity, transform",
                      transitionTimingFunction: "ease-out",
                      transitionDuration: "500ms",
                    }}
                  >
                    {content}
                  </div>
                );
                
              })}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
            <button
              onClick={() => setIsFlipped(false)}
              className="group relative inline-flex items-center px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-black hover:text-white transition"
            >
              Close
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
