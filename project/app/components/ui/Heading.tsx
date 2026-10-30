export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow text-[#5E5E5E] mb-4">{children}</p>;
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-[#111111] leading-[1.1] text-[clamp(1.6rem,3.5vw,2.6rem)] mb-4">
      {children}
    </h2>
  );
}
