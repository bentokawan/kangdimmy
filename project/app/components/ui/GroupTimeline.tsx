import type { TimelineItem } from "../../data/types";

export function GroupTimeline({
  items,
  innerRef,
}: {
  items: TimelineItem[];
  innerRef?: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="timeline" ref={innerRef}>
      {items.map((item, i) => (
        <div
          key={`${item.period}-${item.role}-${item.org}`}
          className="timeline__item reveal"
          style={{ transitionDelay: `${Math.min(i, 5) * 60}ms` }}
        >
          <span className="timeline__period text-[#5E5E5E]">{item.period}</span>
          <div className="card !p-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h4 className="font-display font-bold text-[#111111] text-lg">{item.role}</h4>
              {item.current && <span className="sticker-now">Sekarang</span>}
            </div>
            <p className="text-sm text-[#5E5E5E] mt-1">
              {item.org}
              {item.location ? ` · ${item.location}` : ""}
            </p>
            {item.note && <p className="text-sm text-[#3A3A3A] mt-2 leading-relaxed">{item.note}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
