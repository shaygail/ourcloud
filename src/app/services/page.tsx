import Image from "next/image";
import Link from "next/link";
import { capabilityIcons, dataCentreNotes, services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <h1 className="display max-w-[16ch]">
          Your IT. <span className="gold">One partner.</span>
        </h1>
        <p className="lede mt-6">
          Managed IT, cloud, data centre infrastructure, Sophos, backup, connectivity, communications and consulting — brought together so you are not juggling disconnected providers.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→</span>
        </Link>
      </section>

      <section className="px-[var(--pad)] pb-8">
        <div className="grid grid-cols-3 gap-4 border-t border-[var(--line)] py-12 sm:grid-cols-4 md:grid-cols-6">
          {capabilityIcons.map((item) => (
            <Link
              key={item.src}
              href={item.href}
              className="group grid justify-items-center gap-2 text-center"
            >
              <Image
                src={item.src}
                alt=""
                width={72}
                height={72}
                className="h-[72px] w-[72px] object-contain transition duration-300 group-hover:scale-105"
              />
              <span className="text-[0.78rem] font-medium tracking-tightish text-[var(--fg-soft)] group-hover:text-[var(--fg)]">
                {item.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-[var(--pad)] pb-8">
        <div className="split border-t border-[var(--line)] py-12">
          <h2 className="h2">Who we help</h2>
          <p className="lede">
            Small and medium businesses, growing organisations, enterprises, teams with limited internal IT resources, and businesses looking to replace or supplement an existing IT provider — anywhere dependable technology support and infrastructure are needed.
          </p>
        </div>
      </section>

      <section className="px-[var(--pad)] pb-[clamp(4rem,10vw,8rem)]">
        {services.map((item) => (
          <article
            key={item.slug}
            id={item.slug}
            className="grid gap-8 border-t border-[var(--line)] py-12 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="flex flex-col gap-5">
              <Image
                src={item.icon}
                alt=""
                width={88}
                height={88}
                className="h-[88px] w-[88px] object-contain"
              />
              <h2 className="h2">{item.title}</h2>
              {item.slug === "data-centre" ? (
                <div className="relative mt-2 aspect-[4/3] w-full max-w-[420px] overflow-hidden">
                  <Image
                    src="/images/data-centre.jpg"
                    alt="OurCloud New Zealand data centre server racks"
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover"
                  />
                </div>
              ) : null}
            </div>
            <div>
              <p className="lede">{item.short}</p>
              <p className="lede mt-4">{item.body}</p>
              <p className="kicker mt-8">What OurCloud provides</p>
              <ul className="mt-2 grid gap-2 text-[var(--fg-soft)]">
                {item.provides.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <p className="lede mt-6">{item.whyUs}</p>
              {item.slug === "data-centre" ? (
                <div className="mt-6 space-y-2 text-[0.95rem] text-[var(--fg-soft)]">
                  {dataCentreNotes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              ) : null}
              <Link className="link-arrow" href={item.ctaHref}>
                {item.cta} <span className="arrows">→ →</span>
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
