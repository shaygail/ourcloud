import Image from "next/image";
import Link from "next/link";
import { cases } from "@/lib/data";

export default function WorkPage() {
  return (
    <>
      <section className="page-hero border-b border-[var(--line)]">
        <h1 className="display max-w-[16ch]">
          Businesses that trust <span className="gold">OurCloud.</span>
        </h1>
        <p className="lede mt-6 max-w-[42ch]">
          Verified customer stories from organisations that needed dependable technology support and infrastructure — not another disconnected vendor.
        </p>
        <Link className="link-arrow" href="/start">
          Talk to OurCloud <span className="arrows">→ →</span>
        </Link>
      </section>
      <section className="section">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="h2">Customer outcomes</h2>
          <p className="lede max-w-[36ch]">
            What customers get: hosted systems they can rely on, clearer IT ownership, and a local team that follows through.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cases.map((item) => (
            <Link key={item.slug} href={`/work/${item.slug}`} className="overflow-hidden rounded-xl bg-card">
              <div className="relative h-[200px]">
                <Image src={item.image} alt="" fill sizes="25vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-sans text-[1.125rem] font-extrabold tracking-tightish">{item.name}</h3>
                <p className="mt-3 text-[0.875rem] leading-[1.55] text-[var(--fg-soft)]">{item.headline}</p>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.8rem]">
                  {item.tags.map((tag) => (
                    <span key={tag} className="border-b border-[var(--line)] pb-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
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
