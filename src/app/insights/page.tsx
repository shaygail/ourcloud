import Image from "next/image";
import Link from "next/link";
import { insightCategories, insights } from "@/lib/data";

export default function InsightsPage() {
  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <h1 className="display max-w-[16ch]">
          OurCloud <span className="gold">Insights</span>
        </h1>
        <p className="lede mt-6">
          Practical answers for business owners and leaders — cyber security, cloud, infrastructure, Microsoft 365, connectivity and OurCloud news.
        </p>
      </section>
      <section className="px-[var(--pad)] pb-4">
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9rem] text-[var(--fg-soft)]">
          {insightCategories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
        <p className="mt-4 text-[0.9rem] text-[var(--fg-soft)]">
          [CONTENT REQUIRED] Add current articles under each category. Future topics can include private vs public cloud, outsourcing IT, recovery planning, and Microsoft 365 security basics.
        </p>
      </section>
      <section className="section">
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <Link key={item.slug} href={`/insights/${item.slug}`}>
              <div className="relative mb-4 h-[38vh]">
                <Image src={item.image} alt="" fill sizes="33vw" className="object-cover" />
              </div>
              <p className="kicker mb-1">{item.category}</p>
              <time className="text-[0.88rem] text-[var(--fg-soft)]">{item.date}</time>
              <h3 className="mt-2 text-[1.45rem] font-bold tracking-tightish">{item.title}</h3>
              <p className="lede mt-3 text-[1.05rem]">{item.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
