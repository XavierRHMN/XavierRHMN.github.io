interface SectionHeadingProps {
  label: string;
  title: string;
  number?: string;
}

export default function SectionHeading({ label, title, number }: SectionHeadingProps) {
  return (
    <div className="mb-12 sm:mb-16 relative">
      <div className="flex items-end gap-3 sm:gap-6">
        {/* Big number */}
        {number && (
          <div className="relative flex-shrink-0">
            <div
              className="p5-display p5-num-shadow-lg text-accent text-5xl sm:text-7xl lg:text-8xl leading-none -skew-x-6"
              data-text={number}
            >
              {number}
            </div>
          </div>
        )}

        <div className="flex-1 min-w-0 pb-1 sm:pb-2">
          {/* Red ribbon label */}
          <div className="inline-block relative mb-2 sm:mb-3 ml-2 sm:ml-3">
            <div className="p5-skew bg-accent border-2 border-black px-3 py-1">
              <div className="p5-skew-content">
                <span className="p5-label text-white text-[10px] sm:text-xs">{label}</span>
              </div>
            </div>
          </div>

          {/* Main title */}
          <h2 className="p5-display text-foreground text-3xl sm:text-5xl lg:text-6xl">
            <span className="-skew-x-6 inline-block">{title}</span>
          </h2>
        </div>
      </div>

      {/* Underline stripes */}
      <div className="mt-4 sm:mt-6 h-2 p5-stripes-thin opacity-90" />
    </div>
  );
}
