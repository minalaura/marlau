"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNav } from "@/lib/constants";
import { clsx } from "clsx";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 border-b transition-colors duration-300 ease-quiet",
        scrolled
          ? "border-navy/10 bg-ivory/90 backdrop-blur-sm"
          : "border-transparent bg-ivory"
      )}
    >
      <div className="container-content flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col leading-none shrink-0">
          <span className="text-xl md:text-2xl font-serif tracking-wide text-navy whitespace-nowrap">
            MARLAU
          </span>
          <span className="text-[0.6rem] uppercase tracking-widest2 text-sage mt-1">
            Advisory
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-5">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "text-sm tracking-wide text-navy/80 hover:text-navy transition-colors whitespace-nowrap",
                pathname === item.href && "text-navy"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden xl:block shrink-0">
          <Link
            href="/kontakt"
            className="inline-flex items-center whitespace-nowrap px-6 py-2.5 text-sm tracking-wide bg-navy text-ivory hover:bg-sea transition-colors duration-300 ease-quiet"
          >
            Gespräch vereinbaren
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden flex flex-col gap-1.5 p-2"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={clsx(
              "block h-px w-6 bg-navy transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45"
            )}
          />
          <span
            className={clsx(
              "block h-px w-6 bg-navy transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      {open ? (
        <nav className="xl:hidden border-t border-navy/10 bg-ivory">
          <div className="container-content flex flex-col py-6 gap-5">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base text-navy/85 hover:text-navy"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="mt-2 inline-flex w-fit items-center px-6 py-3 text-sm tracking-wide bg-navy text-ivory"
            >
              Gespräch vereinbaren
            </Link>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
