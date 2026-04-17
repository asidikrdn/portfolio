interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ eyebrow, title, description, align = "left" }: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "mx-auto mb-12 max-w-2xl text-center" : "mb-12 max-w-2xl"}>
      <div
        className={
          align === "center"
            ? "mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-primary"
            : "inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-primary"
        }
      >
        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow-pulse" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
