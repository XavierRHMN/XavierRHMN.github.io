interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  variant?: "default" | "red";
}

export default function GlassCard({
  children,
  className = "",
  hoverable = true,
  variant = "default",
}: GlassCardProps) {
  const baseClass = variant === "red" ? "p5-panel-red" : "p5-panel";
  const hoverClass = hoverable ? "p5-panel-hover" : "";

  return (
    <div className={`${baseClass} ${hoverClass} p-6 ${className}`}>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
