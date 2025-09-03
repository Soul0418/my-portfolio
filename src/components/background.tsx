export default function Background({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen w-full relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">
        {/* Orb + Grid Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
              radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
            `,
            backgroundSize: "40px 40px, 40px 40px, 100% 100%",
            backgroundColor: "transparent", // ✅ ensure base bg comes from Tailwind (light/dark)
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
  