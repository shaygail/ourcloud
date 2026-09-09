import Image from "next/image";
import Link from "next/link";
import {
  serviceProcessSteps,
  type ServiceDetail,
  type ServiceFeature,
} from "@/lib/serviceDetails";

const iconPaths: Record<ServiceFeature["icon"], string> = {
  activity: "M3 12h4l2-7 4 14 2-7h4",
  cpu: "M9 9h6v6H9zM4 9h2m12 0h2M4 15h2m12 0h2M9 4v2m6-2v2M9 18v2m6-2v2",
  shuffle: "M4 8h4l3 4 3-4h4M4 16h4l3-4",
  user: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-7 8a7 7 0 0 1 14 0",
  database: "M4 6c0 1.7 3.6 3 8 3s8-1.3 8-3-3.6-3-8-3-8 1.3-8 3zm0 6c0 1.7 3.6 3 8 3s8-1.3 8-3M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6",
  shield: "M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3z",
  refresh: "M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6M20 4v5h-5M4 20v-5h5",
  trending: "M3 17 10 10l4 4 7-7M14 7h6v6",
  server: "M4 5h16v5H4zm0 9h16v5H4zm3 2.5h.01M7 7.5h.01",
  zap: "M13 2 4 14h7l-1 8 9-12h-7l1-8z",
  lock: "M8 10V8a4 4 0 0 1 8 0v2m-9 0h10v10H7z",
  box: "M4 8 12 4l8 4v8l-8 4-8-4V8zm0 0 8 4 8-4M12 12v8",
  eye: "M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6zm10 3a3 3 0 1 0-3-3 3 3 0 0 0 3 3z",
  "hard-drive": "M4 16h16v4H4zm0-4 2-8h12l2 8M8 18h.01",
};

function FeatureIcon({ name }: { name: ServiceFeature["icon"] }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={iconPaths[name]}
        stroke="#ffe01b"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ServiceDetailView({ detail }: { detail: ServiceDetail }) {
  return (
    <div className="svc-detail-page">
      <section className="svc-detail-hero pad-x">
        <div className="svc-detail-hero__copy">
          <p className="svc-detail-hero__pill">{detail.pill}</p>
          <h1 className="svc-detail-hero__title">{detail.title}</h1>
          <p className="svc-detail-hero__tagline">{detail.tagline}</p>
          <div className="svc-detail-hero__actions">
            <Link href="/start" className="svc-detail-btn svc-detail-btn--solid">
              Request consultation
            </Link>
            <Link href="/start" className="svc-detail-btn svc-detail-btn--ghost">
              Talk to OurCloud
            </Link>
          </div>
        </div>
        <div className="svc-detail-hero__media">
          <Image
            src={detail.heroImage}
            alt={detail.heroAlt}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 560px"
            className="object-cover"
          />
        </div>
      </section>

      <section className="svc-detail-section pad-x">
        <div className="svc-detail-section__intro">
          <h2>{detail.sectionTitle}</h2>
          <p>{detail.sectionBody}</p>
        </div>
        <div className="svc-detail-features">
          {detail.features.map((feature) => (
            <article key={feature.title} className="svc-detail-feature">
              <span className="svc-detail-feature__icon">
                <FeatureIcon name={feature.icon} />
              </span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="svc-detail-section pad-x">
        <div className="svc-detail-section__intro">
          <h2>{detail.processTitle}</h2>
          <p>{detail.processBody}</p>
        </div>
        <div className="svc-detail-steps">
          {serviceProcessSteps.map((step) => (
            <article key={step.n} className="svc-detail-step">
              <p className="svc-detail-step__n">{step.n}</p>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
