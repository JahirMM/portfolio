interface SectionTickerProps {
  label: string;
}

function SectionTicker({ label }: SectionTickerProps) {
  return (
    <div className="relative py-10 overflow-hidden text-white bg-gray-900 my-28">
      <div className="flex animate-scroll whitespace-nowrap">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex">
            {Array.from({ length: 8 }).map((_, j) => (
              <span key={j} className="mx-8 text-base tracking-wider">
                • {label.toUpperCase()}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionTicker;
