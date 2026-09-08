"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { phoneHref, phoneLabel } from "@/lib/data";

export default function Footer() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer className="bg-[var(--bg-footer)]">
      <div className="grid gap-12 border-b border-[var(--line)] px-[var(--pad)] py-[clamp(4rem,8vw,6.25rem)] md:grid-cols-2 md:gap-20">
        <div>
          <h2 className="max-w-[16ch] font-sans text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.2] tracking-tightish">
            Let’s <span className="gold">connect</span> your technology — together.
          </h2>
          <div className="mt-10 flex flex-col gap-4 font-sans text-[1.125rem] font-bold">
            <Link className="underline underline-offset-4" href="/start">
              Talk to OurCloud <span className="arrows">→ →</span>
            </Link>
            <Link className="link-accent mt-0" href="/services">
              Explore our services <span className="arrows">→ →</span>
            </Link>
          </div>
        </div>

        <form
          className="flex items-center gap-4 self-center border-b border-[var(--line)] py-4"
          onSubmit={onSubmit}
        >
          {sent ? (
            <p className="py-1 text-[var(--fg-soft)]">You’re on the list.</p>
          ) : (
            <>
              <input
                type="email"
                required
                placeholder="OurCloud Insights to my inbox"
                aria-label="Email address"
                className="flex-1 border-0 bg-transparent text-[1.125rem] text-[var(--fg)] outline-none placeholder:text-[var(--fg-soft)]"
              />
              <button type="submit" aria-label="Subscribe" className="font-sans font-bold text-yellow">
                → →
              </button>
            </>
          )}
        </form>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 px-[var(--pad)] py-10 text-[0.875rem]">
        <p className="text-[var(--fg-soft)]">
          ©{new Date().getFullYear()} OurCloud · New Zealand owned and operated
        </p>
        <div className="flex items-center gap-8">
          <a
            href="https://www.linkedin.com/company/nakicloud-computing-limited"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href={phoneHref} className="font-sans font-bold text-yellow">
            {phoneLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}
