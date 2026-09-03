"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { audiences, team, values } from "@/lib/data";

export default function AboutPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <h1 className="display max-w-[16ch]">
          A complete New Zealand <span className="gold">technology partner.</span>
        </h1>
        <p className="lede mt-6">
          OurCloud is a New Zealand-owned technology company helping businesses make IT simpler, safer and more reliable.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→ →</span>
        </Link>
      </section>
      <div className="relative h-[72vh] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80"
          alt="New Zealand landscape"
          fill
          sizes="100vw"
          className="object-cover animate-ken-slow"
        />
      </div>
      <section className="section split">
        <h2 className="h2">Our story</h2>
        <div>
          <p className="lede">
            From our own New Zealand data centre to our team of technical specialists and consultants, we bring infrastructure, cloud, connectivity, security and support together under one roof.
          </p>
          <p className="lede mt-4">
            We believe technology should work for your business — not become another problem for your team to manage.
          </p>
          <p className="lede mt-4 text-[0.95rem]">
            [CONTENT REQUIRED: Add any verified founding history OurCloud still wants published.]
          </p>
        </div>
      </section>
      <section className="section">
        <h2 className="h2">Who we serve</h2>
        <p className="lede my-4 mb-10">
          Businesses that need dependable technology support and infrastructure.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {audiences.map((item) => (
            <p key={item} className="border-t border-[var(--line)] pt-4 font-semibold tracking-tightish">
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="h2">Why OurCloud</h2>
        <p className="lede my-4 mb-12">
          NZ-owned technology and infrastructure, backed by local people.
        </p>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {values.map((item) => (
            <article key={item.title}>
              <p className="kicker">{item.kicker}</p>
              <h3 className="text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[0.95] tracking-tightish">
                {item.title}
              </h3>
              <p className="lede mt-4">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <h2 className="h2">The people behind the work</h2>
        <p className="lede my-4 mb-8">
          Local technical specialists and consultants — more than a remote helpdesk.
        </p>
        <div className="border-t border-[var(--line)]">
          {team.map((person, i) => (
            <button
              key={person.name}
              className={`grid w-full grid-cols-1 gap-3 border-b border-[var(--line)] py-5 text-left md:grid-cols-[1fr_1fr_1.4fr_auto] ${
                open === i ? "bg-yellow text-ink" : ""
              }`}
              onClick={() => setOpen(i)}
            >
              <strong>{person.name}</strong>
              <span>{person.role}</span>
              <span>{open === i ? person.bio : "← ←"}</span>
              <span aria-hidden="true">{open === i ? "−" : "+"}</span>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
