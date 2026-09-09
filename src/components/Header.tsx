"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

export default function Header() {
  const pathname = usePathname() ?? "/";
  const { theme, toggleTheme, sound, setSound } = useTheme();
  const [open, setOpen] = useState(false);
  const [onLight, setOnLight] = useState(pathname !== "/");

  useEffect(() => {
    setOpen(false);
    if (pathname !== "/") {
      setOnLight(true);
      return;
    }
    const onScroll = () => setOnLight(window.scrollY > window.innerHeight * 0.72);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 pad-x transition duration-300 ${
          onLight || open
            ? "bg-[color-mix(in_srgb,var(--bg)_92%,transparent)] text-[var(--fg)] backdrop-blur-2xl"
            : "bg-transparent text-[#f4f3ef]"
        } py-[1.1rem] md:py-[1.1rem]`}
      >
        <Link href="/" className="text-[1.25rem] font-extrabold tracking-tightish md:text-[1.55rem]">
          OurCloud
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.95rem] font-medium transition ${
                pathname.startsWith(item.href)
                  ? "rounded-full border border-yellow px-4 py-2 text-yellow"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/start" className="cta">
            Talk to OurCloud
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 md:flex">
            <button
              className="grid h-7 w-[42px] place-items-center"
              aria-label="Toggle light and dark"
              onClick={toggleTheme}
            >
              <span className="relative h-[22px] w-[42px] rounded-full border border-current">
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full bg-current transition ${
                    theme === "light" ? "left-[22px]" : "left-[3px]"
                  }`}
                />
              </span>
            </button>
            <button
              className="grid h-7 w-[42px] place-items-center"
              aria-label="Toggle motion pulse"
              aria-pressed={sound}
              onClick={() => setSound(!sound)}
            >
              <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
                {[40, 80, 60, 100].map((height, index) => (
                  <i
                    key={height}
                    className={`inline-block w-[3px] origin-bottom rounded-sm bg-current ${
                      sound ? "animate-eq" : ""
                    }`}
                    style={{
                      height: `${height}%`,
                      animationDelay: `${index * 0.08}s`,
                    }}
                  />
                ))}
              </span>
            </button>
          </div>

          <Link href="/start" className="site-header__talk md:hidden">
            Talk
          </Link>
          <button
            className="site-header__menu md:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <span className="text-[0.8rem] font-bold">Close</span>
            ) : (
              <img src="/icons/menu.svg" alt="" width={20} height={20} />
            )}
          </button>
        </div>
      </header>

      {open ? (
        <nav
          className="fixed inset-0 z-50 flex flex-col gap-5 bg-[#111] px-5 pb-8 pt-24 text-[2rem] font-bold tracking-tightish text-white md:hidden"
          aria-label="Mobile"
        >
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={pathname.startsWith(item.href) ? "text-yellow" : ""}
            >
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
