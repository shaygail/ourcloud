import Image from "next/image";
import Link from "next/link";
import { audiences, team, values } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero border-b border-[var(--line)]">
        <h1 className="display max-w-[16ch]">
          A complete New Zealand <span className="gold">technology partner.</span>
        </h1>
        <p className="lede mt-6 max-w-[42ch]">
          OurCloud is a New Zealand-owned technology company helping businesses make IT simpler,
          safer and more reliable.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→ →</span>
        </Link>
      </section>

      <div className="relative h-[min(72vh,720px)] w-full overflow-hidden border-b border-[var(--line)]">
        <Image
          src="/images/figma/pillar-dc.png"
          alt="OurCloud New Zealand data centre"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>

      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <div className="split">
          <h2 className="h2">Our story</h2>
          <div className="space-y-4">
            <p className="lede max-w-[48ch]">
              From our own New Zealand data centre to our team of technical specialists and
              consultants, we bring infrastructure, cloud, connectivity, Sophos and support together
              under one roof.
            </p>
            <p className="lede max-w-[48ch]">
              We believe technology should work for your business — not become another problem for
              your team to manage.
            </p>
          </div>
        </div>
      </section>

      <section className="section border-b border-[var(--line)]">
        <h2 className="h2 max-w-none">Who we serve</h2>
        <p className="lede my-4 mb-12 max-w-[42ch]">
          Businesses that need dependable technology support and infrastructure.
        </p>
        <div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
          {audiences.map((item) => (
            <p
              key={item}
              className="border-t border-[var(--line)] py-5 pr-6 font-sans text-[1.125rem] font-semibold tracking-tightish"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <h2 className="h2 max-w-none">Why OurCloud</h2>
        <p className="lede my-4 mb-14 max-w-[42ch]">
          NZ-owned technology and infrastructure, backed by local people.
        </p>
        <div className="grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {values.map((item) => (
            <article key={item.title}>
              <p className="kicker">{item.kicker}</p>
              <h3 className="font-sans text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-tightish">
                {item.title}
              </h3>
              <p className="lede mt-4 max-w-[40ch]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="h2 max-w-[14ch]">The people behind the work</h2>
        <p className="lede my-4 mb-10 max-w-[42ch]">
          Local technical specialists and consultants — more than a remote helpdesk.
        </p>
        <div className="border-t border-[var(--line)]">
          {team.map((person) => (
            <article
              key={person.name}
              className="grid gap-3 border-b border-[var(--line)] py-6 md:grid-cols-[1fr_1fr_1.6fr]"
            >
              <strong className="font-sans text-[1.125rem] font-bold">{person.name}</strong>
              <span className="text-[var(--fg-soft)]">{person.role}</span>
              <p className="text-[0.95rem] leading-[1.5] text-[var(--fg-soft)]">{person.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
