"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export default function Header() {
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition duration-300 ${
          scrolled || open
            ? "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-[84px] items-center justify-between gap-4 pad-x">
          <Link href="/" className="font-sans text-[1.5rem] font-extrabold tracking-tightish">
            OurCloud
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex" aria-label="Primary">
            {links.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-pill ${active ? "is-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/start" className="cta-nav hidden md:inline-flex">
              Talk to OurCloud
            </Link>
            <button
              className="grid text-[0.9rem] font-semibold md:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <nav className="fixed inset-0 z-50 flex flex-col gap-5 bg-[var(--bg)] pad-x pb-8 pt-28 text-[2rem] font-extrabold tracking-tightish">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/start" className="cta w-fit" onClick={() => setOpen(false)}>
            Talk to OurCloud
          </Link>
        </nav>
      ) : null}
    </>
  );
}
