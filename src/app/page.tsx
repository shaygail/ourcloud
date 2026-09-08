import Image from "next/image";
import Link from "next/link";
import {
  capabilityIcons,
  cases,
  clients,
  homePillars,
  stats,
} from "@/lib/data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[860px] flex-col justify-end overflow-hidden border-b border-[var(--line)] text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/figma/hero.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        <div className="relative z-10 w-full px-[var(--pad)] pb-[clamp(4rem,10vh,7.5rem)] pt-40">
          <h1 className="display display-home max-w-[18ch]">
            Connecting <span className="gold">systems</span>
            <br />
            with <span className="gold">NZ</span> infrastructure.
          </h1>
          <Link
            href="/services#data-centre"
            className="mt-6 inline-flex font-sans text-[1.125rem] font-bold underline underline-offset-4"
          >
            Explore our Data Centre <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>

      {/* Tagline band */}
      <section className="relative grid min-h-[480px] place-items-center overflow-hidden border-b border-[var(--line)] px-[var(--pad)] text-center text-white">
        <Image
          src="/images/figma/tagline.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <p className="relative z-10 max-w-[22ch] font-sans text-[clamp(1.75rem,3.5vw,2.375rem)] font-extrabold leading-[1.35]">
          One technology partner for your business — we <span className="gold">host</span>.
        </p>
      </section>

      {/* Your IT. One partner. */}
      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <div className="split">
          <h2 className="h2">Your IT. One partner.</h2>
          <div>
            <p className="lede max-w-[48ch]">
              OurCloud brings IT support, cloud, infrastructure, Sophos, connectivity, backup and
              consulting into one relationship — so you are not managing a stack of disconnected
              technology providers.
            </p>
            <Link className="link-accent" href="/about">
              Why OurCloud →
            </Link>
          </div>
        </div>
      </section>

      {/* Client marquee */}
      <div className="overflow-hidden border-b border-[var(--line)] py-8">
        <div className="flex w-max animate-marquee items-center gap-16 whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((name, i) => (
            <span key={`${name}-${i}`} className="flex items-center gap-8">
              <span className="font-sans text-[1.25rem] font-bold text-[var(--fg-soft)] opacity-80">
                {name}
              </span>
              <Image src="/icons/figma/dot.svg" alt="" width={6} height={6} className="size-1.5" />
            </span>
          ))}
        </div>
      </div>

      {/* More than a helpdesk */}
      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <div className="split">
          <h2 className="h2">
            More than a <span className="gold">helpdesk</span>
          </h2>
          <div>
            <p className="lede max-w-[48ch]">
              New Zealand-owned technology, infrastructure and support — all working together. From
              everyday IT through to data centre hosting, Sophos and consulting.
            </p>
            <Link className="link-accent" href="/services">
              Explore our services →
            </Link>
          </div>
        </div>
      </section>

      {/* Capability icon grid */}
      <section className="border-b border-[var(--line)] px-[var(--pad)] py-[clamp(4rem,8vw,6.25rem)]">
        <div className="grid grid-cols-3 gap-x-8 gap-y-16 sm:grid-cols-4 md:grid-cols-6">
          {capabilityIcons.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group grid justify-items-center gap-4 text-center"
            >
              <span className="relative size-12 overflow-hidden">
                <Image
                  src={item.src}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 object-contain"
                />
              </span>
              <span className="font-sans text-[0.875rem] font-semibold tracking-tightish">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Pillars */}
      {homePillars.map((pillar) => (
        <Pillar key={pillar.title} {...pillar} />
      ))}

      {/* Customer trust */}
      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-[640px]">
            <h2 className="h2 max-w-none">Customer trust</h2>
            <p className="lede mt-4 max-w-[42ch]">
              We partner with local businesses that require dependable, fast, and secure technology
              to power their daily operations.
            </p>
          </div>
          <Link className="link-arrow mt-0 shrink-0" href="/work">
            Explore our work →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <Link
              key={item.slug}
              href={`/work/${item.slug}`}
              className="overflow-hidden rounded-xl bg-card"
            >
              <div className="relative h-[200px]">
                <Image src={item.image} alt="" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-[1.125rem] font-extrabold">{item.name}</h3>
                <p className="mt-3 text-[0.875rem] leading-[1.55] text-[var(--fg-soft)]">
                  {item.headline}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NZ owned banner */}
      <div className="overflow-hidden bg-yellow py-6 text-ink">
        <div className="flex w-max animate-marquee-fast items-center gap-12 whitespace-nowrap">
          {Array.from({ length: 8 }, (_, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className="font-sans text-[1.5rem] font-extrabold uppercase tracking-tightish">
                New Zealand owned and operated
              </span>
              <Image
                src="/icons/figma/dot-dark.svg"
                alt=""
                width={8}
                height={8}
                className="size-2"
              />
            </span>
          ))}
        </div>
      </div>

      {/* Stats */}
      <section className="section border-b border-[var(--line)]">
        <h2 className="h2 max-w-none">Why businesses choose OurCloud</h2>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => (
            <p key={item.label}>
              <b className="block font-sans text-[clamp(3rem,6vw,4rem)] font-extrabold leading-none tracking-display text-yellow">
                {item.value}
              </b>
              <span className="mt-3 block font-semibold">{item.label}</span>
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
  goldWord = null,
}: {
  title: string;
  body: string;
  image: string;
  alt: string;
  href: string;
  cta: string;
  reverse?: boolean;
  goldWord?: string | null;
}) {
  const heading = goldWord ? highlightGold(title, goldWord) : title;

  return (
    <article className="grid min-h-[680px] border-b border-[var(--line)] md:grid-cols-2">
      <div
        className={`flex flex-col justify-center gap-8 bg-[var(--bg)] px-[var(--pad)] py-[clamp(3rem,6vw,6.25rem)] ${
          reverse ? "md:order-2 md:pl-[clamp(2rem,5vw,5rem)] md:pr-[var(--pad)]" : "md:pr-[clamp(2rem,5vw,5rem)]"
        }`}
      >
        <h2 className="h2 max-w-[16ch]">{heading}</h2>
        <p className="lede max-w-[42ch]">{body}</p>
        <Link className="link-accent mt-0" href={href}>
          {cta} {cta.includes("Data Centre") ? <span className="arrows">→ →</span> : "→"}
        </Link>
      </div>
      <div className={`relative min-h-[52vh] ${reverse ? "md:order-1" : ""}`}>
        <Image src={image} alt={alt} fill sizes="50vw" className="object-cover" />
      </div>
    </article>
  );
}

function highlightGold(title: string, goldWord: string) {
  const index = title.indexOf(goldWord);
  if (index < 0) return title;
  return (
    <>
      {title.slice(0, index)}
      <span className="gold">{goldWord}</span>
      {title.slice(index + goldWord.length)}
    </>
  );
}
