export function Chip({
  children,
  tone = "paper",
  hover = false,
}: {
  children: React.ReactNode;
  tone?: "paper" | "white";
  hover?: boolean;
}) {
  const classes = ["chip", tone === "white" ? "!bg-white" : "", hover ? "chip--hover" : ""];
  return <span className={classes.filter(Boolean).join(" ")}>{children}</span>;
}
