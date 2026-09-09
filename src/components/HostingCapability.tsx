"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STACK = [
  { id: "host", label: "host", width: "92%" },
  { id: "store", label: "store", width: "74%" },
  { id: "backup", label: "backup", width: "61%" },
  { id: "remote", label: "remote", width: "48%" },
  { id: "recover", label: "recover", width: "36%" },
] as const;

export default function HostingCapability() {
  const [active, setActive] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const enter = window.setTimeout(() => setEntered(true), 80);
    if (reduce) return () => window.clearTimeout(enter);

    const cycle = window.setInterval(() => {
      setActive((n) => (n + 1) % STACK.length);
    }, 2200);

    return () => {
      window.clearTimeout(enter);
      window.clearInterval(cycle);
    };
  }, []);

  return (
    <section className="hosting-cap bg-ink text-[#f4f3ef]">
      <div className="hosting-cap__grid">
        <div className="hosting-cap__copy">
          <p className="hosting-cap__kicker">04 Capability</p>
          <h2 className="hosting-cap__title">Our managed hosting and server</h2>
          <p className="hosting-cap__body">
            Your critical systems run on OurCloud’s own New Zealand infrastructure — private cloud,
            server hosting, storage and recovery, looked after by the same local team who support
            your IT day to day.
          </p>
          <Link className="hosting-cap__cta" href="/services/cloud-hosting">
            See the stack <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className={`hosting-cap__visual ${entered ? "is-in" : ""}`} aria-hidden="true">
          <div className="hosting-cap__frame">
            <ul className="hosting-cap__stack">
              {STACK.map((row, i) => {
                const on = i === active;
                return (
                  <li key={row.id} className={`hosting-cap__row ${on ? "is-on" : ""}`}>
                    <span className="hosting-cap__dot" />
                    <span className="hosting-cap__bar" style={{ width: row.width }} />
                  </li>
                );
              })}
            </ul>
            <span className="hosting-cap__tag hosting-cap__tag--side">encrypted</span>
            <span className="hosting-cap__tag hosting-cap__tag--base">uplink</span>
          </div>
        </div>
      </div>
    </section>
  );
}
