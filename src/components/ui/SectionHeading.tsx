import { clsx } from "clsx";

export function Eyebrow({ children, className }: { children: string; className?: string }) {
  return (
    <p
      className={clsx(
        "text-xs uppercase tracking-widest2 text-sage",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow className="mb-3">{eyebrow}</Eyebrow> : null}
      <h2 className="text-3xl md:text-4xl font-serif font-medium leading-tight text-navy">
        {title}
      </h2>
      {text ? <p className="mt-4 text-base leading-relaxed text-navy/70">{text}</p> : null}
    </div>
  );
}
