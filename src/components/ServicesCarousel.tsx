"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type ServiceCard = {
  slug: string;
  tag: string;
  title: string;
  blurb: string;
  image: string;
};

type Props = {
  cards: ServiceCard[];
};

export default function ServicesCarousel({ cards }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setEntered(true), reduce ? 0 : 60);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setCanPrev(el.scrollLeft > 8);
      setCanNext(el.scrollLeft < max - 8);
    };

    const onWheel = (event: WheelEvent) => {
      const absX = Math.abs(event.deltaX);
      const absY = Math.abs(event.deltaY);

      // Vertical page scroll should not move the cards sideways.
      if (absY >= absX) {
        event.preventDefault();
        window.scrollBy({ top: event.deltaY, left: 0 });
        return;
      }

      event.preventDefault();
      el.scrollLeft += event.deltaX;
      update();
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", update);
    };
  }, []);

  function scrollByDir(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const amount = Math.min(374, el.clientWidth * 0.85);
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section className={`svc-hub ${entered ? "is-in" : ""}`}>
      <div className="svc-hub__inner">
        <div className="svc-hub__copy">
          <p className="svc-hub__kicker">Enterprise Capabilities</p>
          <h1 className="svc-hub__title">Our Services</h1>
          <p className="svc-hub__lede">
            We bring IT support, cloud hosting, Sophos protection and consulting together under one
            New Zealand-owned infrastructure partner.
          </p>
          <div className="svc-hub__nav">
            <button
              type="button"
              className={`svc-hub__arrow ${canPrev ? "is-active" : ""}`}
              aria-label="Previous services"
              disabled={!canPrev}
              onClick={() => scrollByDir(-1)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M10 3.5 5.5 8 10 12.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              className={`svc-hub__arrow ${canNext ? "is-active" : ""}`}
              aria-label="Next services"
              disabled={!canNext}
              onClick={() => scrollByDir(1)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M6 3.5 10.5 8 6 12.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <p className="svc-hub__hint">Drag or swipe to scroll</p>
          </div>
        </div>

        <div className="svc-hub__carousel" ref={trackRef}>
          {cards.map((card, i) => (
            <Link
              key={card.slug}
              href={`/services/${card.slug}`}
              className="svc-hub__card"
              style={{ ["--i" as string]: i }}
            >
              <div className="svc-hub__card-top">
                <span className="svc-hub__tag">{card.tag}</span>
                <span className="svc-hub__goto" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M4 10 10 4M10 4H5.5M10 4v4.5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <div className="svc-hub__media">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="350px"
                  className="object-cover"
                />
              </div>
              <div className="svc-hub__card-text">
                <h2>{card.title}</h2>
                <p>{card.blurb}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
