import Image from "next/image";
import Link from "next/link";
import { insightCategories, insights } from "@/lib/data";

export default function InsightsPage() {
  return (
    <>
      <section className="page-hero border-b border-[var(--line)]">
        <h1 className="display max-w-[14ch]">
          OurCloud <span className="gold">Insights</span>
        </h1>
        <p className="lede mt-6 max-w-[42ch]">
          Practical answers for business owners and leaders — cloud, infrastructure, Microsoft 365,
          connectivity and OurCloud news.
        </p>
      </section>

      <section className="border-b border-[var(--line)] px-[var(--pad)] py-8">
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-[0.9rem] text-[var(--fg-soft)]">
          {insightCategories.map((category) => (
            <span key={category} className="font-medium">
              {category}
            </span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((item) => (
            <Link
              key={item.slug}
              href={`/insights/${item.slug}`}
              className="overflow-hidden rounded-xl bg-card"
            >
              <div className="relative h-[220px]">
                <Image src={item.image} alt="" fill sizes="33vw" className="object-cover" />
              </div>
              <div className="p-6">
                <p className="kicker mb-1">{item.category}</p>
                <time className="text-[0.875rem] text-[var(--fg-soft)]">{item.date}</time>
                <h3 className="mt-3 font-sans text-[1.25rem] font-extrabold tracking-tightish">
                  {item.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.55] text-[var(--fg-soft)]">
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
