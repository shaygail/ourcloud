import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getInsight, insights } from "@/lib/data";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getInsight(slug);
  if (!item) notFound();

  return (
    <>
      <section className="pb-12 pt-[calc(7rem+4vw)] pad-x">
        <p className="kicker">
          {item.category} · {item.date}
        </p>
        <h1 className="display max-w-[16ch]">{item.title}</h1>
      </section>
      <div className="relative h-[72vh] w-full">
        <Image src={item.image} alt="" fill sizes="100vw" className="object-cover" priority />
      </div>
      <section className="section">
        <div className="max-w-[62ch] text-[1.12rem] text-[var(--fg-soft)]">
          {item.body.map((paragraph) => (
            <p key={paragraph} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
        <Link className="link-arrow" href="/insights">
          OurCloud Insights <span className="arrows">→ →</span>
        </Link>
        <Link className="link-arrow ml-8" href="/start">
          Talk to an expert <span className="arrows">→ →</span>
        </Link>
      </section>
    </>
  );
}
