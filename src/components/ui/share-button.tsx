"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ShareLink {
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  label?: string;
}

interface ShareButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  links: ShareLink[];
  children: React.ReactNode;
}

const ShareButton = ({
  className,
  links = [],
  children,
  ...props
}: ShareButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl",
          "bg-white dark:bg-black",
          "hover:bg-gray-50 dark:hover:bg-gray-950",
          "text-black dark:text-white",
          "border border-black/10 dark:border-white/10",
          "transition-all duration-300",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2">{children}</span>
      </Button>

      {/* Always visible share icons */}
      <div className="absolute left-0 top-12 flex space-x-2">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <button
              type="button"
              key={index}
              onClick={link.onClick}
              className={cn(
                "h-10 w-10 flex items-center justify-center rounded-full",
                "bg-black dark:bg-white",
                "text-white dark:text-black",
                "border border-white/20 dark:border-black/20",
                "hover:bg-gray-900 dark:hover:bg-gray-100",
                "transition-transform duration-300",
                isHovered ? "scale-110" : ""
              )}
              aria-label={link.label}
            >
              {Icon && <Icon className="w-5 h-5" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ShareButton;
