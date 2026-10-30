import type { WorkItem } from "../../data/work";

const PATHS: Record<WorkItem["icon"], React.ReactNode> = {
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" />
    </>
  ),
  stage: (
    <>
      <path d="M3 4h18v11H3zM8 20h8M12 15v5" />
      <path d="M7 10h6M7 7h10" />
    </>
  ),
  coach: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
      <path d="M17.5 4.5 20 2" />
    </>
  ),
  community: (
    <>
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.5" />
      <path d="M3 20a6 6 0 0 1 12 0M14 20a5 5 0 0 1 7-4.6" />
    </>
  ),
};

export function WorkIcon({ name }: { name: WorkItem["icon"] }) {
  return (
    <span className="work-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {PATHS[name]}
      </svg>
    </span>
  );
}
