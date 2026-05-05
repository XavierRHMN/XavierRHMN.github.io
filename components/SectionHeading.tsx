interface SectionHeadingProps {
  label: string;
  title: string;
  number?: string;
}

export default function SectionHeading({ label, title, number }: SectionHeadingProps) {
  return (
    <div className="mb-16 relative">
      <div className="flex items-end gap-4 sm:gap-6">
        {/* Big number */}
        {number && (
          <div className="relative">
            <div className="p5-display text-accent text-7xl sm:text-8xl leading-none -skew-x-6 drop-shadow-[4px_4px_0_#000]">
              {number}
            </div>
          </div>
        )}

        <div className="flex-1 pb-2">
          {/* Red ribbon label */}
          <div className="inline-block relative mb-3">
            <div className="p5-skew bg-accent border-2 border-black px-3 py-1">
              <div className="p5-skew-content">
                <span className="p5-label text-white">{label}</span>
              </div>
            </div>
          </div>

          {/* Main title */}
          <h2 className="p5-display text-foreground text-4xl sm:text-5xl lg:text-6xl">
            <span className="-skew-x-6 inline-block">{title}</span>
          </h2>
        </div>
      </div>

      {/* Underline stripes */}
      <div className="mt-6 h-2 p5-stripes-thin opacity-90" />
    </div>
  );
}
