"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  cases,
  clients,
  heroSlides,
  homePillars,
  stats,
  thriveImages,
  thriveVerbs,
} from "@/lib/data";

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [thrive, setThrive] = useState(0);
  const current = heroSlides[slide];

  useEffect(() => {
    const a = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 4200);
    const b = setInterval(() => setThrive((n) => (n + 1) % thriveImages.length), 3200);
    return () => {
      clearInterval(a);
      clearInterval(b);
    };
  }, []);

  return (
    <>
      <section className="relative grid min-h-[100svh] items-end overflow-hidden text-[#f4f3ef]">
        <div className="absolute inset-0">
          {heroSlides.map((item, i) => (
            <Image
              key={item.image}
              src={item.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className={`object-cover transition-opacity duration-700 ${
                i === slide ? "opacity-100 animate-ken" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
        </div>
        <div className="relative z-10 max-w-[18ch] pb-[clamp(2.5rem,8vh,5.5rem)] pad-x">
          <h1 className="display">
            Connecting{" "}
            <span className="gold">
              <span className="cycle">
                {heroSlides.map((item, i) => (
                  <span key={item.industry} className={i === slide ? "on" : ""}>
                    {item.industry}
                  </span>
                ))}
              </span>
            </span>{" "}
            with{" "}
            <span className="gold">
              <span className="cycle">
                {heroSlides.map((item, i) => (
                  <span key={item.audience} className={i === slide ? "on" : ""}>
                    {item.audience}
                  </span>
                ))}
              </span>
            </span>
          </h1>
          <Link href={current.href} className="mt-6 inline-flex items-center gap-2 text-[1.05rem] font-medium">
            {current.caption} <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      <section className="relative grid min-h-[88vh] place-items-center overflow-hidden text-center text-[#f4f3ef]">
        {thriveImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            sizes="100vw"
            className={`object-cover transition-opacity duration-700 ${i === thrive ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/50" />
        <p className="relative z-10 max-w-[16ch] text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold leading-[1.05] tracking-tightish">
          One technology partner for your business — we{" "}
          <span className="gold">
            <span className="cycle">
              {thriveVerbs.map((word, i) => (
                <span key={word} className={i === thrive % thriveVerbs.length ? "on" : ""}>
                  {word}
                </span>
              ))}
            </span>
          </span>
          .
        </p>
      </section>

      <section className="section split">
        <h2 className="h2">Your IT. One partner.</h2>
        <div>
          <p className="lede">
            OurCloud brings IT support, cloud, infrastructure, cybersecurity, connectivity, backup and consulting into one relationship — so you are not managing a stack of disconnected technology providers.
          </p>
          <Link className="link-arrow" href="/about">
            Why OurCloud <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[var(--line)]">
        <div className="flex w-max animate-marquee gap-14 whitespace-nowrap py-6 text-[clamp(1.4rem,3vw,2.2rem)] font-bold tracking-tightish">
          {[...clients, ...clients].map((name, i) => (
            <span key={`${name}-${i}`} className="opacity-55">
              {name}
            </span>
          ))}
        </div>
      </div>

      <section className="section split">
        <h2 className="h2">More than a helpdesk</h2>
        <div>
          <p className="lede">
            New Zealand-owned technology, infrastructure and support — all working together. From everyday IT through to data centre hosting, security and consulting.
          </p>
          <Link className="link-arrow" href="/services">
            Explore our services <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      {homePillars.map((pillar) => (
        <Pillar
          key={pillar.title}
          title={pillar.title}
          body={pillar.body}
          image={pillar.image}
          alt={pillar.alt}
          href={pillar.href}
          cta={pillar.cta}
          reverse={"reverse" in pillar ? pillar.reverse : false}
        />
      ))}

      <section className="section">
        <div className="mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="h2">Customer trust</h2>
            <p className="lede mt-4">
              Businesses that need dependable technology support and infrastructure — from firms replacing an IT provider through to organisations with limited internal IT resources.
            </p>
          </div>
          <Link className="link-arrow mt-0" href="/work">
            Explore our work <span className="arrows">→ →</span>
          </Link>
        </div>
        <div className="grid auto-cols-[minmax(280px,32vw)] grid-flow-col gap-5 overflow-x-auto pb-4 snap-x">
          {cases.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="snap-start">
              <div className="relative mb-4 h-[42vh] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="32vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />
              </div>
              <h3 className="text-[1.55rem] font-bold tracking-tightish">{item.name}</h3>
              <p className="mt-1 text-[var(--fg-soft)]">{item.headline}</p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.88rem]">
                {item.tags.map((tag) => (
                  <span key={tag} className="border-b border-[var(--line)] pb-0.5">
                    {tag} <span className="arrows">→ →</span>
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="overflow-hidden bg-yellow text-ink text-[0.78rem] font-bold uppercase tracking-[0.18em]">
        <div className="flex w-max animate-marquee-fast gap-14 whitespace-nowrap py-3">
          {Array.from({ length: 10 }, (_, i) => (
            <span key={i}>New Zealand owned and operated</span>
          ))}
        </div>
      </div>

      <section className="section bg-ink text-[#f4f3ef]">
        <h2 className="h2">Why businesses choose OurCloud</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <p key={item.label}>
              <b className="block text-[clamp(3.2rem,7vw,6.2rem)] font-bold leading-none tracking-display text-yellow">
                {item.value}
              </b>
              <span className="mt-3 block">{item.label}</span>
              <small className="mt-2 block text-[#9ea2ab]">{item.note}</small>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}

function Pillar({
  title,
  body,
  image,
  alt,
  href,
  cta,
  reverse = false,
}: {
  title: string;
  body: string;
  image: string;
  alt: string;
  href: string;
  cta: string;
  reverse?: boolean;
}) {
  return (
    <article className="grid min-h-[78vh] md:grid-cols-2">
      <div
        className={`flex flex-col justify-end bg-[var(--bg)] p-[clamp(2.5rem,6vw,5rem)] ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <h2 className="h2 max-w-[14ch]">{title}</h2>
        <p className="lede mt-4">{body}</p>
        <Link className="link-arrow" href={href}>
          {cta} <span className="arrows">→ →</span>
        </Link>
      </div>
      <div className="relative min-h-[52vh]">
        <Image src={image} alt={alt} fill sizes="50vw" className="object-cover" />
      </div>
    </article>
  );
}
