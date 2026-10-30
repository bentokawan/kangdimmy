import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaThreads,
  FaTiktok,
} from "react-icons/fa6";

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const iconProps = {
    className: className ?? "w-5 h-5 shrink-0",
    size: 20,
    "aria-hidden": "true" as const,
  };

  switch (name) {
    case "Email":
      return <FaEnvelope {...iconProps} />;
    case "Instagram":
      return <FaInstagram {...iconProps} />;
    case "TikTok":
      return <FaTiktok {...iconProps} />;
    case "Threads":
      return <FaThreads {...iconProps} />;
    case "LinkedIn":
      return <FaLinkedin {...iconProps} />;
    default:
      return null;
  }
}
