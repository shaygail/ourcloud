"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  capabilityIcons,
  clients,
  heroSlides,
  stats,
  thriveVerbs,
} from "@/lib/data";

const managedIcons = [
  { label: "File Server", src: "/icons/line/file-server.svg" },
  { label: "Remote Desktop", src: "/icons/line/remote-desktop.svg" },
  { label: "Connectivity", src: "/icons/line/connectivity.svg" },
  { label: "WAN", src: "/icons/line/wan.svg" },
] as const;

const trustCases = [
  {
    slug: "hughson",
    name: "Hughson & Associates",
    body: "Cloud migration and secure remote desktop solution for seamless professional services.",
    image: "/images/home/case-hughson.jpg",
  },
  {
    slug: "pihms",
    name: "PIHMS",
    body: "Deploying high-speed campus connectivity and hosted mail services for New Zealand's premier hospitality school.",
    image: "/images/home/case-pihms.jpg",
  },
  {
    slug: "chamber",
    name: "Taranaki Chamber of Commerce",
    body: "Ongoing managed IT support, telephony, and security management keeping local commerce connected.",
    image: "/images/home/case-chamber.jpg",
  },
  {
    slug: "hive",
    name: "The Hive",
    body: "Failsafe network infrastructure and backup solutions for a collaborative, high-energy modern workspace.",
    image: "/images/home/case-hive.jpg",
  },
] as const;

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const [thrive, setThrive] = useState(0);
  const current = heroSlides[slide];

  useEffect(() => {
    const slides = setInterval(() => setSlide((n) => (n + 1) % heroSlides.length), 4200);
    const verbs = setInterval(() => setThrive((n) => (n + 1) % thriveVerbs.length), 2800);
    return () => {
      clearInterval(slides);
      clearInterval(verbs);
    };
  }, []);

  return (
    <>
      <section className="home-hero">
        <Image
          src="/images/home/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__content pad-x">
          <h1 className="home-hero__title">
            Connecting{" "}
            <span className="gold">
              <span className="cycle">
                {heroSlides.map((item, i) => (
                  <span key={item.industry} className={i === slide ? "on" : ""}>
                    {item.industry}
                  </span>
                ))}
              </span>
            </span>
            <br />
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
          <Link href={current.href} className="home-hero__cta">
            {current.caption} <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      <section className="home-tagline">
        <Image
          src="/images/home/tagline.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="home-tagline__veil" />
        <p className="home-tagline__text pad-x">
          One technology partner
          <br />
          for your business — we
          <br />
          <span className="gold">
            <span className="cycle">
              {thriveVerbs.map((word, i) => (
                <span key={word} className={i === thrive ? "on" : ""}>
                  {word}
                </span>
              ))}
            </span>
          </span>
          .
        </p>
      </section>

      <section className="home-split pad-x">
        <h2 className="home-split__title">Your IT. One partner.</h2>
        <div>
          <p className="home-split__body">
            OurCloud brings IT support, cloud, infrastructure, Sophos, connectivity, backup and
            consulting into one relationship — so you are not managing a stack of disconnected
            technology providers.
          </p>
          <Link className="home-split__link" href="/about">
            Why OurCloud <span className="arrows">→</span>
          </Link>
        </div>
      </section>

      <div className="home-marquee" aria-hidden="true">
        <div className="home-marquee__track">
          {[...clients, ...clients].map((name, i) => (
            <span key={`${name}-${i}`} className="home-marquee__item">
              {name}
              <span className="home-marquee__dot" />
            </span>
          ))}
        </div>
      </div>

      <section className="home-split pad-x">
        <h2 className="home-split__title">
          More than a <span className="gold">helpdesk</span>
        </h2>
        <div>
          <p className="home-split__body">
            New Zealand-owned technology, infrastructure and support — all working together. From
            everyday IT through to data centre hosting, Sophos and consulting.
          </p>
          <Link className="home-split__link" href="/services">
            Explore our services <span className="arrows">→</span>
          </Link>
        </div>
      </section>

      <section className="home-capabilities pad-x">
        <h2 className="home-capabilities__title">Our Services</h2>
        <div className="home-capabilities__grid">
          {capabilityIcons.map((item) => (
            <Link key={item.label} href={item.href} className="home-capabilities__item">
              <span className="home-capabilities__icon-wrap">
                <img
                  src={item.src}
                  alt=""
                  width={40}
                  height={40}
                  className="home-capabilities__icon"
                />
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-feature">
        <div className="home-feature__mobile-photo">
          <Image
            src="/images/home/mobile-managed.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="home-feature__copy pad-x">
          <h2 className="home-feature__title">Your IT team, without the overhead</h2>
          <p className="home-feature__body">
            Keep your people productive and your business secure. We handle complete IT support,
            Microsoft 365 administration, device deployment, and secure network management — acting
            as your fully outsourced technology team.
          </p>
          <Link className="home-feature__link" href="/services/managed-it">
            Explore Managed IT <span className="arrows">→</span>
          </Link>
        </div>
        <div className="home-feature__visual home-feature__visual--icons">
          <div className="home-feature__icon-grid">
            {managedIcons.map((item) => (
              <div key={item.label} className="home-feature__icon-item">
                <img src={item.src} alt="" width={40} height={40} />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-feature home-feature--reverse">
        <div className="home-feature__mobile-photo">
          <Image
            src="/images/home/mobile-dc.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="home-feature__visual home-feature__visual--stats">
          <div className="home-feature__stat">
            <b>NZ</b>
            <span>owned and operated</span>
            <small>New Zealand-owned technology, infrastructure and support</small>
          </div>
          <div className="home-feature__stat">
            <b>1</b>
            <span>technology partner</span>
            <small>IT, cloud, Sophos, connectivity and infrastructure together</small>
          </div>
        </div>
        <div className="home-feature__copy pad-x">
          <h2 className="home-feature__title">
            Infrastructure you can rely on, right here in{" "}
            <span className="gold">
              <span className="home-feature__nz-full">New Zealand</span>
              <span className="home-feature__nz-short">NZ</span>
            </span>
          </h2>
          <p className="home-feature__body">
            Move your critical servers and applications into a professionally managed environment.
            Backed by OurCloud&apos;s wholly NZ-owned and operated data centre infrastructure, you
            get robust security, redundancy, and local support.
          </p>
          <Link className="home-feature__link" href="/services/data-centre">
            Explore our Data Centre <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      <section className="home-feature">
        <div className="home-feature__mobile-photo">
          <Image
            src="/images/home/mobile-sophos.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="home-feature__copy pad-x">
          <h2 className="home-feature__title">
            <span className="gold">Sophos</span> protection for your devices and network
          </h2>
          <p className="home-feature__body">
            As a certified Sophos partner, we embed world-class endpoint and firewall security
            directly into your managed IT environment. Proactive threat hunting, anti-ransomware,
            and robust web filtering ensure your business data remains secure day and night.
          </p>
          <Link className="home-feature__link" href="/services/sophos">
            Explore Sophos <span className="arrows">→</span>
          </Link>
        </div>
        <div className="home-feature__visual home-feature__visual--photo home-feature__visual--desktop-photo">
          <Image
            src="/images/home/sophos.jpg"
            alt="Network infrastructure with yellow ethernet cables"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="home-trust pad-x">
        <div className="home-trust__header">
          <div>
            <h2 className="home-trust__title">Customer trust</h2>
            <p className="home-trust__lede">
              We partner with local businesses that require dependable, fast, and secure technology
              to power their daily operations.
            </p>
          </div>
          <Link className="home-trust__link" href="/work">
            Explore our work <span className="arrows">→</span>
          </Link>
        </div>
        <div className="home-trust__grid">
          {trustCases.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="home-trust__card">
              <div className="home-trust__media">
                <Image src={item.image} alt="" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="home-trust__body">
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="home-nz-banner" aria-hidden="true">
        <div className="home-nz-banner__track">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="home-nz-banner__item">
              NEW ZEALAND OWNED AND OPERATED
              <span className="home-nz-banner__dot" />
            </span>
          ))}
        </div>
      </div>

      <section className="home-stats pad-x">
        <h2 className="home-stats__title">
          <span className="home-stats__title-full">Why businesses choose OurCloud</span>
          <span className="home-stats__title-short">Why choose us</span>
        </h2>
        <div className="home-stats__grid">
          {stats.map((item) => (
            <p key={item.label} className="home-stats__item">
              <b>{item.value}</b>
              <span>{item.label}</span>
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
