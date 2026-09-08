import Image from "next/image";
import Link from "next/link";
import { capabilityIcons, dataCentreNotes, services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero border-b border-[var(--line)]">
        <h1 className="display max-w-[14ch]">
          Your IT. <span className="gold">One partner.</span>
        </h1>
        <p className="lede mt-6 max-w-[48ch]">
          Managed IT, cloud, data centre infrastructure, Sophos, backup, connectivity, communications
          and consulting — brought together so you are not juggling disconnected providers.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→ →</span>
        </Link>
      </section>

      <section className="border-b border-[var(--line)] px-[var(--pad)] py-[clamp(3rem,6vw,5rem)]">
        <div className="grid grid-cols-3 gap-x-6 gap-y-12 sm:grid-cols-4 md:grid-cols-6">
          {capabilityIcons.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group grid justify-items-center gap-3 text-center"
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
              <span className="font-sans text-[0.8rem] font-semibold tracking-tightish text-[var(--fg-soft)] group-hover:text-[var(--fg)]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section border-b border-[var(--line)] bg-[var(--bg-secondary)]">
        <div className="split">
          <h2 className="h2">Who we help</h2>
          <p className="lede max-w-[48ch]">
            Small and medium businesses, growing organisations, enterprises, teams with limited
            internal IT resources, and businesses looking to replace or supplement an existing IT
            provider — anywhere dependable technology support and infrastructure are needed.
          </p>
        </div>
      </section>

      <section className="px-[var(--pad)] pb-[clamp(4rem,10vw,8rem)]">
        {services.map((item) => (
          <article
            key={item.slug}
            id={item.slug}
            className="grid gap-10 border-b border-[var(--line)] py-14 md:grid-cols-[0.85fr_1.15fr]"
          >
            <div className="flex flex-col gap-5">
              <span className="relative size-[72px] overflow-hidden">
                <Image
                  src={item.icon}
                  alt=""
                  width={72}
                  height={72}
                  className="size-[72px] object-contain"
                />
              </span>
              <h2 className="h2">{item.title}</h2>
              {item.slug === "data-centre" ? (
                <div className="relative mt-2 aspect-[4/3] w-full max-w-[420px] overflow-hidden rounded-xl">
                  <Image
                    src="/images/figma/pillar-dc.png"
                    alt="OurCloud New Zealand data centre server racks"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
            <div>
              <p className="lede max-w-[48ch]">{item.short}</p>
              <p className="lede mt-4 max-w-[48ch]">{item.body}</p>
              <p className="kicker mt-10">What OurCloud provides</p>
              <ul className="mt-3 grid gap-2 text-[var(--fg-soft)]">
                {item.provides.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-yellow" />
                    {line}
                  </li>
                ))}
              </ul>
              <p className="lede mt-6 max-w-[48ch]">{item.whyUs}</p>
              {item.slug === "data-centre" ? (
                <div className="mt-6 space-y-2 text-[0.95rem] text-[var(--fg-soft)]">
                  {dataCentreNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              ) : null}
              <Link className="link-accent" href={item.ctaHref}>
                {item.cta} <span className="arrows">→ →</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
