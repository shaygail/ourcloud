export type ServiceFeature = {
  title: string;
  body: string;
  icon: "activity" | "cpu" | "shuffle" | "user" | "database" | "shield" | "refresh" | "trending" | "server" | "zap" | "lock" | "box" | "eye" | "hard-drive";
};

export type ServiceDetail = {
  slug: string;
  pill: string;
  title: string;
  tagline: string;
  heroImage: string;
  heroAlt: string;
  sectionTitle: string;
  sectionBody: string;
  features: ServiceFeature[];
  processTitle: string;
  processBody: string;
};

export const serviceProcessSteps = [
  {
    n: "01",
    title: "Discovery & Analysis",
    body: "We assess your current technology landscape, workloads, and business objectives to design the ideal framework.",
  },
  {
    n: "02",
    title: "Design & Migration Plan",
    body: "Our engineers construct a clear blueprint and migration strategy aligned to how your New Zealand business actually runs.",
  },
  {
    n: "03",
    title: "Deployment & Optimization",
    body: "Seamless transition into managed IT, cloud systems, or data centre hosting with active testing and validation.",
  },
  {
    n: "04",
    title: "24/7 Management & Review",
    body: "Ongoing monitoring, local support, and strategic reviews to keep your environment reliable and ready to scale.",
  },
] as const;

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "managed-it",
    pill: "Managed IT Services",
    title: "Managed IT Infrastructure",
    tagline: "End-to-end management of your local IT infrastructure.",
    heroImage: "/images/services/hero-managed-it.png",
    heroAlt: "Managed server infrastructure",
    sectionTitle: "Total local infrastructure care",
    sectionBody:
      "Let our specialist engineers handle the heavy-duty maintenance, strategic optimization, and immediate system support so your business flows flawlessly.",
    features: [
      {
        icon: "activity",
        title: "24/7 Monitoring & Support",
        body: "Continuous remote monitoring to preempt failures and provide round-the-clock remediation by certified local IT experts.",
      },
      {
        icon: "cpu",
        title: "Infrastructure Management",
        body: "Bespoke design, installation, maintenance, and strategic scaling of servers, switches, end-user systems, and peripheral hardware.",
      },
      {
        icon: "shuffle",
        title: "Systems Alignment & Optimization",
        body: "Rigorous standards-testing to proactively align systems to corporate operational compliance models, driving down business downtime.",
      },
      {
        icon: "user",
        title: "Dedicated Account Management",
        body: "Direct personal escalation pipelines combined with seasoned vCIO consultation, ensuring your IT matches company milestones.",
      },
    ],
    processTitle: "Engineered for local resilience",
    processBody:
      "How our localized technical team ensures smooth onboarding, bulletproof stability, and proactive modernization.",
  },
  {
    slug: "cloud-hosting",
    pill: "Cloud & Hosting",
    title: "Enterprise Sovereign Cloud",
    tagline: "Secure, New Zealand cloud hosting built for enterprise.",
    heroImage: "/images/services/hero-cloud-hosting.png",
    heroAlt: "Cloud hosting infrastructure",
    sectionTitle: "Secure, ultra-fast NZ cloud hosting",
    sectionBody:
      "Server solutions engineered on OurCloud’s New Zealand infrastructure — low latency, flexible capacity, and local support.",
    features: [
      {
        icon: "database",
        title: "Private & Hybrid Cloud",
        body: "Customizable server infrastructure hosted in New Zealand, designed around your data and application requirements.",
      },
      {
        icon: "shield",
        title: "High-Availability Architecture",
        body: "Hardware clustered environments with dual paths, reducing single points of failure to protect compute uptime.",
      },
      {
        icon: "refresh",
        title: "Automated Backups & DR",
        body: "Snapshot replication and off-site backup structures to help you recover when systems fail.",
      },
      {
        icon: "trending",
        title: "Scalable Compute & Storage",
        body: "On-demand CPU, RAM, and enterprise storage scaling designed to adjust to operational spikes.",
      },
    ],
    processTitle: "Engineered for local resilience",
    processBody:
      "How our localized technical team ensures smooth onboarding, bulletproof stability, and proactive modernization.",
  },
  {
    slug: "data-centre",
    pill: "Data Centre",
    title: "Colocation & Facilities",
    tagline: "State-of-the-art facilities for secure, redundant hosting.",
    heroImage: "/images/services/hero-data-centre.png",
    heroAlt: "OurCloud New Zealand data centre",
    sectionTitle: "Uncompromising physical housing",
    sectionBody:
      "Host critical systems in OurCloud’s New Zealand data centre — professionally managed infrastructure with local people looking after the platform.",
    features: [
      {
        icon: "server",
        title: "Professionally Managed Facilities",
        body: "Infrastructure design featuring resilient power distribution and cooling paths for hosted systems. [VERIFY CERTIFICATIONS]",
      },
      {
        icon: "zap",
        title: "Redundant Power & Cooling",
        body: "Engineered power and cooling redundancy for business-critical workloads. [VERIFY POWER / COOLING DETAILS]",
      },
      {
        icon: "lock",
        title: "Physical Security",
        body: "Controlled access and monitoring for hosted infrastructure. [VERIFY PHYSICAL SECURITY DETAILS]",
      },
      {
        icon: "box",
        title: "Hosting & Dedicated Capacity",
        body: "From managed hosting through to dedicated capacity, optimized for your hardware and applications.",
      },
    ],
    processTitle: "Engineered for local resilience",
    processBody:
      "How our localized technical team ensures smooth onboarding, bulletproof stability, and proactive modernization.",
  },
  {
    slug: "sophos",
    pill: "Sophos",
    title: "Synchronized Threat Defense",
    tagline: "Sophos endpoint and network protection for your business.",
    heroImage: "/images/services/hero-sophos.png",
    heroAlt: "Sophos protected network environment",
    sectionTitle: "Sophos protection, managed locally",
    sectionBody:
      "Protect devices and networks with Sophos — installed, managed and supported by the same OurCloud team looking after your IT.",
    features: [
      {
        icon: "shield",
        title: "Sophos Network Protection",
        body: "Sophos firewall and network controls to help isolate threats before they spread across your environment.",
      },
      {
        icon: "eye",
        title: "Ongoing Visibility",
        body: "Monitoring and alerting so issues are spotted early by a team that already knows your systems.",
      },
      {
        icon: "hard-drive",
        title: "Sophos Endpoint Protection",
        body: "Endpoint agents deployed to help neutralize ransomware and malicious scripts on business devices.",
      },
      {
        icon: "refresh",
        title: "Managed as Part of Your IT",
        body: "Endpoints, servers and network protection sitting with one New Zealand partner — not a bolt-on vendor.",
      },
    ],
    processTitle: "Engineered for local resilience",
    processBody:
      "How our localized technical team ensures smooth onboarding, bulletproof stability, and proactive modernization.",
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((item) => item.slug === slug);
}
