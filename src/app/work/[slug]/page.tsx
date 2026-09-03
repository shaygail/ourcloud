import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, getCase } from "@/lib/data";

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <p className="kicker">Customer trust</p>
        <h1 className="display">{item.name}</h1>
        <p className="lede mt-6">{item.headline}</p>
      </section>
      <div className="relative h-[62vh] w-full">
        <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" priority />
      </div>
      <section className="section split">
        <p className="max-w-[24ch] text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.25] tracking-tightish">
          “{item.quote}”
        </p>
        <div>
          <p className="lede">{item.summary}</p>
          <p className="lede mt-4">{item.person}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[0.88rem]">
            {item.tags.map((tag) => (
              <Link key={tag} href="/services" className="border-b border-[var(--line)] pb-0.5">
                {tag} <span className="arrows">→ →</span>
              </Link>
            ))}
          </div>
          <Link className="link-arrow" href="/start">
            Talk to OurCloud <span className="arrows">→ →</span>
          </Link>
        </div>
      </section>
      <section className="section bg-ink text-[#f4f3ef]">
        <p>
          <b className="block text-[clamp(1.6rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-tightish text-yellow">
            {item.metric}
          </b>
          <span className="mt-3 block">{item.metricLabel}</span>
        </p>
      </section>
      <section className="section">
        <Link className="link-arrow" href="/work">
          All customer stories <span className="arrows">→ →</span>
        </Link>
      </section>
    </>
  );
}
