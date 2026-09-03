"use client";

import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

const verbs = ["host", "protect", "connect", "support", "advise"];

export default function Footer() {
  const [sent, setSent] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((n) => (n + 1) % verbs.length), 2200);
    return () => clearInterval(timer);
  }, []);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <footer className="border-t border-[var(--line)] pb-8 pt-[clamp(4rem,10vw,7rem)] pad-x">
      <h2 className="max-w-[14ch] text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.92] tracking-display">
        Let’s{" "}
        <span className="gold">
          <span className="cycle">
            {verbs.map((word, n) => (
              <span key={word} className={n === index ? "on" : ""}>
                {word}
              </span>
            ))}
          </span>
        </span>{" "}
        your technology — together.
      </h2>

      <div className="mt-12 grid items-end gap-12 md:grid-cols-[1.4fr_0.8fr]">
        <div className="flex flex-col gap-4">
          <Link className="link-arrow mt-0" href="/start">
            Talk to OurCloud <span className="arrows">→ →</span>
          </Link>
          <Link className="link-arrow mt-0" href="/services">
            Explore our services <span className="arrows">→ →</span>
          </Link>
        </div>
        <form className="flex max-w-[360px] border-b border-[var(--fg)]" onSubmit={onSubmit}>
          {sent ? (
            <p className="py-3">You’re on the list.</p>
          ) : (
            <>
              <input
                type="email"
                required
                placeholder="OurCloud Insights to my inbox"
                aria-label="Email address"
                className="flex-1 border-0 bg-transparent py-3 outline-none"
              />
              <button type="submit" aria-label="Subscribe" className="px-1 py-3 font-bold">
                → →
              </button>
            </>
          )}
        </form>
      </div>

      <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-[var(--line)] pt-5 text-[0.9rem] text-[var(--fg-soft)]">
        <p>©{new Date().getFullYear()} OurCloud · New Zealand owned and operated</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/company/nakicloud-computing-limited"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="tel:0800687256">0800 OURCLOUD</a>
        </div>
      </div>
    </footer>
  );
}
