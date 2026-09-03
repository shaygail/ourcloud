import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/data";

export default function WorkPage() {
  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <h1 className="display max-w-[16ch]">
          Businesses that trust <span className="gold">OurCloud.</span>
        </h1>
        <p className="lede mt-6">
          Verified customer stories from organisations that needed dependable technology support and infrastructure — not another disconnected vendor.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→ →</span>
        </Link>
      </section>
      <section className="section">
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="h2">Customer outcomes</h2>
          <p className="lede">
            What customers get: hosted systems they can rely on, clearer IT ownership, and a local team that follows through.
          </p>
        </div>
        <div className="grid auto-cols-[minmax(320px,40vw)] grid-flow-col gap-5 overflow-x-auto pb-4 snap-x">
          {cases.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="snap-start">
              <div className="relative mb-4 h-[42vh] overflow-hidden">
                <Image src={item.image} alt="" fill sizes="40vw" className="object-cover" />
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
        <p className="mt-10 text-[0.95rem] text-[var(--fg-soft)]">
          [CONTENT REQUIRED] Add approved customer logos when available. Do not fabricate additional testimonials.
        </p>
      </section>
    </>
  );
}
