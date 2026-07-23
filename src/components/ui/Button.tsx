import Link from "next/link";
import { clsx } from "clsx";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-quiet";

  const variants = {
    primary: "bg-navy text-ivory hover:bg-sea",
    secondary: "border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-ivory",
    onDark: "border border-ivory/30 text-ivory hover:bg-ivory hover:text-navy",
  } as const;

  const styles = variants[variant];

  return (
    <Link href={href} className={clsx(base, styles, className)}>
      {children}
    </Link>
  );
}
