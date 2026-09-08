export type HeroSlide = {
  image: string;
  industry: string;
  audience: string;
  caption: string;
  href: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  headline: string;
  image: string;
  summary: string;
  tags: string[];
  quote: string;
  person: string;
  metric: string;
  metricLabel: string;
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  provides: string[];
  whyUs: string;
  cta: string;
  ctaHref: string;
  icon: string;
};

/** Brand capability icons from Figma (yellow line icons) for services and overview strips. */
export const capabilityIcons = [
  { label: "Cloud & Hosting", src: "/icons/figma/database.svg", href: "/services#cloud-hosting" },
  { label: "Data Centre", src: "/icons/figma/server.svg", href: "/services#data-centre" },
  { label: "File Server", src: "/icons/figma/database.svg", href: "/services#cloud-hosting" },
  { label: "Remote Desktop", src: "/icons/figma/monitor.svg", href: "/services#cloud-hosting" },
  { label: "Web Hosting", src: "/icons/figma/globe.svg", href: "/services#cloud-hosting" },
  { label: "Email", src: "/icons/figma/mail.svg", href: "/services#managed-it" },
  { label: "Hosted Email", src: "/icons/figma/circle-x.svg", href: "/services#managed-it" },
  { label: "Sophos", src: "/icons/figma/shield.svg", href: "/services#sophos" },
  { label: "Connectivity", src: "/icons/figma/wifi.svg", href: "/services#connectivity" },
  { label: "WAN", src: "/icons/figma/network.svg", href: "/services#connectivity" },
  { label: "VoIP", src: "/icons/figma/phone.svg", href: "/services#communications" },
  { label: "Backup", src: "/icons/figma/backup.svg", href: "/services#backup-dr" },
] as const;

export type Insight = {
  slug: string;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
  body: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const phone = "0800 687 256";
export const phoneLabel = "0800 OURCLOUD";
export const phoneHref = "tel:0800687256";
export const email = "support@ourcloud.nz";
export const address = "256 Devon Street East, New Plymouth";
export const officeHours = "Monday–Friday, 8:30–17:00";
/** [VERIFY SUPPORT HOURS] Existing ourcloud.nz copy also referenced after-hours / 24hr engineer cover. */
export const supportNote = "Engineers on call outside office hours. [VERIFY SUPPORT HOURS]";

export const heroSlides: HeroSlide[] = [
  {
    image: "/images/nakicloud-desk.jpg",
    industry: "businesses",
    audience: "one partner.",
    caption: "Hughson & Associates",
    href: "/work/hughson",
  },
  {
    image: "/images/data-centre.jpg",
    industry: "systems",
    audience: "NZ infrastructure.",
    caption: "Explore our Data Centre",
    href: "/services#data-centre",
  },
  {
    image: "/images/speedster.jpg",
    industry: "teams",
    audience: "fast connectivity.",
    caption: "Explore Connectivity",
    href: "/services#connectivity",
  },
  {
    image: "/images/nakicloud-tablet.jpg",
    industry: "organisations",
    audience: "clear advice.",
    caption: "Taranaki Chamber",
    href: "/work/chamber",
  },
  {
    image: "/images/switches-detail.jpg",
    industry: "retailers",
    audience: "dependable IT.",
    caption: "The Hive",
    href: "/work/hive",
  },
  {
    image: "/images/nakicloud-tablet-2.jpg",
    industry: "growing firms",
    audience: "technology strategy.",
    caption: "Explore Consulting",
    href: "/services#consulting",
  },
];

export const thriveImages = [
  "/images/data-centre.jpg",
  "/images/switches.jpg",
  "/images/nakicloud-desk.jpg",
  "/images/switches-detail.jpg",
  "/images/speedster.jpg",
];

export const thriveVerbs = ["host", "protect", "connect", "support", "advise"] as const;

/** Verified customer references only. */
export const clients = [
  "Hughson & Associates",
  "PIHMS",
  "Taranaki Chamber of Commerce",
  "The Hive",
];

export const audiences = [
  "Small businesses",
  "Medium businesses",
  "Growing businesses",
  "Enterprise organisations",
  "Teams with limited internal IT",
  "Businesses replacing an IT provider",
];

export const homePillars = [
  {
    title: "Your IT team, without the overhead",
    body: "Keep your people productive and your business secure. We handle complete IT support, Microsoft 365 administration, device deployment, and secure network management — acting as your fully outsourced technology team.",
    image: "/images/figma/pillar-it.png",
    alt: "OurCloud managed IT workspace",
    href: "/services#managed-it",
    cta: "Explore Managed IT",
    reverse: false,
    goldWord: null as string | null,
  },
  {
    title: "Infrastructure you can rely on, right here in New Zealand",
    body: "Move your critical servers and applications into a professionally managed environment. Backed by OurCloud's wholly NZ-owned and operated data centre infrastructure, you get robust security, redundancy, and local support.",
    image: "/images/figma/pillar-dc.png",
    alt: "OurCloud New Zealand data centre server racks",
    href: "/services#data-centre",
    cta: "Explore our Data Centre",
    reverse: true,
    goldWord: "New Zealand",
  },
  {
    title: "Sophos protection for your devices and network",
    body: "As a certified Sophos partner, we embed world-class endpoint and firewall security directly into your managed IT environment. Proactive threat hunting, anti-ransomware, and robust web filtering ensure your business data remains secure day and night.",
    image: "/images/figma/pillar-sophos.png",
    alt: "Network infrastructure with Sophos protection",
    href: "/services#sophos",
    cta: "Explore Sophos",
    reverse: false,
    goldWord: "Sophos",
  },
] as const;

export const services: Service[] = [
  {
    slug: "managed-it",
    title: "Managed IT",
    short: "Keep your team productive with IT support and technology management handled by one local team.",
    body: "OurCloud helps businesses manage their everyday technology environment — more than break/fix. From day-to-day technical issues to longer-term planning, we provide the expertise your people need to stay productive.",
    provides: [
      "IT support and helpdesk",
      "Desktop and remote support",
      "Microsoft 365",
      "Device and user management",
      "Network management",
      "IT administration",
      "Technology advice",
    ],
    whyUs:
      "New Zealand-owned, local technical expertise, and the same partner who can also host, secure and connect your environment.",
    cta: "Explore Managed IT",
    ctaHref: "/start",
    icon: "/icons/figma/monitor.svg",
  },
  {
    slug: "cloud-hosting",
    title: "Cloud & Hosting",
    short: "Host your critical systems in professionally managed infrastructure without the overhead of running it yourself.",
    body: "Cloud services built around reliability, flexibility and OurCloud’s New Zealand-based infrastructure. Move line-of-business systems into a managed environment while we look after the platform underneath.",
    provides: [
      "Private cloud",
      "Server hosting",
      "Application hosting",
      "Data storage",
      "Remote desktop",
      "Infrastructure hosting",
    ],
    whyUs:
      "Cloud and hosting sit on OurCloud’s own NZ data centre foundation — not a disconnected third-party relationship.",
    cta: "Explore Cloud & Hosting",
    ctaHref: "/start",
    icon: "/icons/figma/database.svg",
  },
  {
    slug: "data-centre",
    title: "Data Centre",
    short: "Infrastructure you can rely on, right here in New Zealand.",
    body: "OurCloud operates its own New Zealand-based data centre. It is the foundation behind hosting, private cloud, storage, backup, disaster recovery and business connectivity for many of our customers.",
    provides: [
      "Server hosting",
      "Private cloud",
      "Application hosting",
      "Data storage",
      "Backup",
      "Disaster recovery",
      "Infrastructure hosting",
      "Connectivity",
    ],
    whyUs:
      "Own NZ infrastructure, local people, and services designed around that platform — not a helpdesk bolted onto someone else’s racks.",
    cta: "Explore our Data Centre",
    ctaHref: "/start",
    icon: "/icons/figma/server.svg",
  },
  {
    slug: "sophos",
    title: "Sophos",
    short: "Endpoint and network protection with Sophos, managed alongside your wider OurCloud IT environment.",
    body: "OurCloud provides Sophos protection for businesses that need dependable endpoint and network security — installed, managed and supported by the same local team looking after your IT.",
    provides: [
      "Sophos endpoint protection",
      "Sophos network protection",
      "Deployment and ongoing management",
      "Support as part of managed IT",
    ],
    whyUs:
      "Sophos sits with your managed IT and infrastructure under one New Zealand partner — not a separate security vendor bolted on the side.",
    cta: "Explore Sophos",
    ctaHref: "/start",
    icon: "/icons/figma/shield.svg",
  },
  {
    slug: "backup-dr",
    title: "Backup & Disaster Recovery",
    short: "When something goes wrong, a copy of your data is only the beginning — your business needs a plan to recover.",
    body: "Backup and business continuity are related but not the same. OurCloud helps businesses prepare for hardware failure, accidental deletion, cyber incidents, system outages and wider disruption.",
    provides: [
      "Data backup",
      "System backup",
      "Disaster recovery",
      "Business continuity planning",
      "Data restoration",
      "Recovery planning",
    ],
    whyUs:
      "Recovery planning connected to the same infrastructure and support team that runs your environment day to day.",
    cta: "Talk to an expert",
    ctaHref: "/start",
    icon: "/icons/figma/backup.svg",
  },
  {
    slug: "connectivity",
    title: "Connectivity",
    short: "Keep your business connected with reliable business-grade connectivity.",
    body: "Connectivity is business infrastructure, not just “internet”. It links people, offices, cloud services, applications, customers and remote workers.",
    provides: [
      "Business fibre",
      "Internet",
      "Network connectivity",
      "Wi-Fi",
      "Business networking",
    ],
    whyUs:
      "Connectivity that works with your wider OurCloud environment — cloud, communications and support in one relationship.",
    cta: "Talk to OurCloud",
    ctaHref: "/start",
    icon: "/icons/figma/wifi.svg",
  },
  {
    slug: "communications",
    title: "Business Communications",
    short: "Keep your team connected with business communications that work alongside your wider IT environment.",
    body: "VoIP and business phone systems as part of the OurCloud technology ecosystem — not a standalone phone company bolted on the side.",
    provides: ["VoIP", "Business phone systems", "Hosted voice", "Business communications"],
    whyUs: "Voice that sits with your IT, connectivity and support under one New Zealand partner.",
    cta: "Talk to OurCloud",
    ctaHref: "/start",
    icon: "/icons/figma/phone.svg",
  },
  {
    slug: "consulting",
    title: "Consulting",
    short: "Technology should support your business strategy — not exist separately from it.",
    body: "OurCloud consulting helps organisations decide where technology should go next, improve how decisions are made, and design and deliver solutions that fit how the business actually works.",
    provides: [
      "IT strategy",
      "IT governance",
      "Technology reviews",
      "Solution design",
      "Solution delivery",
      "Fractional IT leadership",
    ],
    whyUs:
      "Advice from a team that also runs infrastructure, cloud, Sophos and support — strategy connected to delivery.",
    cta: "Book a consultation",
    ctaHref: "/start",
    icon: "/icons/figma/globe.svg",
  },
];

export const dataCentreNotes = [
  "OurCloud operates its own New Zealand-based data centre.",
  "Customer systems can be hosted within New Zealand through OurCloud’s own infrastructure.",
  "[ADD CURRENT DATA CENTRE SPECIFICATIONS]",
  "[VERIFY DATA CENTRE LOCATION DETAILS FOR PUBLICATION]",
  "[VERIFY UPTIME]",
  "[VERIFY CERTIFICATIONS]",
  "[VERIFY POWER / COOLING / PHYSICAL SECURITY DETAILS]",
];

export const cases: CaseStudy[] = [
  {
    slug: "hughson",
    name: "Hughson & Associates",
    headline: "Cloud migration and secure remote desktop solution for seamless professional services.",
    image: "/images/figma/case-hughson.png",
    summary:
      "A New Plymouth professional practice moved server hosting into OurCloud’s data centre so the firm no longer had to maintain office hardware, while keeping daily backups and security in a managed environment.",
    tags: ["Cloud & Hosting", "Data Centre", "Backup", "Managed IT"],
    quote:
      "Everything is securely hosted within the OurCloud data centre in New Plymouth. Our whole team can now work from home seamlessly.",
    person: "Mark Hughson, Owner / Director",
    metric: "[CONTENT REQUIRED]",
    metricLabel: "Add a verified outcome metric with OurCloud",
  },
  {
    slug: "pihms",
    name: "PIHMS",
    headline:
      "Deploying high-speed campus connectivity and hosted mail services for New Zealand's premier hospitality school.",
    image: "/images/figma/case-pihms.png",
    summary:
      "Pacific International Hotel Management School worked with OurCloud on advice and delivery that improved the campus technology environment and day-to-day productivity for staff and management.",
    tags: ["Managed IT", "Consulting", "Infrastructure"],
    quote:
      "The outcome is an infinitely superior IT solution that has greatly enhanced staff and management productivity.",
    person: "Bill McCallum, Chief Executive Officer",
    metric: "[CONTENT REQUIRED]",
    metricLabel: "Add a verified outcome metric with OurCloud",
  },
  {
    slug: "chamber",
    name: "Taranaki Chamber of Commerce",
    headline:
      "Ongoing managed IT support, telephony, and security management keeping local commerce connected.",
    image: "/images/figma/case-chamber.png",
    summary:
      "The Chamber needed an IT partner that understood membership-organisation challenges and delivered practical solutions, including simplifying the online entry process for the TSB Business Excellence Awards.",
    tags: ["Managed IT", "Consulting", "Connectivity"],
    quote:
      "They understand our IT challenges and then deliver complete solutions with excellent follow up service.",
    person: "Arun Chaudhari, Chief Executive Officer",
    metric: "[CONTENT REQUIRED]",
    metricLabel: "Add a verified outcome metric with OurCloud",
  },
  {
    slug: "hive",
    name: "The Hive",
    headline:
      "Failsafe network infrastructure and backup solutions for a collaborative, high-energy modern workspace.",
    image: "/images/figma/case-hive.png",
    summary:
      "A retail business wanted technology that matched how the shop actually runs: backups, antivirus and a team they could talk to, brought together on one monthly invoice.",
    tags: ["Managed IT", "Sophos", "Backup"],
    quote:
      "Having a great group of people to talk to and then implement what I need onto one monthly invoice has been a game changer.",
    person: "Clair Marshall, Owner",
    metric: "[CONTENT REQUIRED]",
    metricLabel: "Add a verified outcome metric with OurCloud",
  },
];

export const stats = [
  {
    value: "150+",
    label: "businesses supported",
    note: "",
  },
  {
    value: "NZ",
    label: "owned and operated",
    note: "",
  },
  {
    value: "1",
    label: "technology partner",
    note: "",
  },
  {
    value: "Own",
    label: "NZ data centre",
    note: "",
  },
];

export const team: TeamMember[] = [
  {
    name: "Steve Collett",
    role: "General Manager",
    bio: "With OurCloud since its early days. Combines hands-on technical problem solving with running the business. [CONTENT REQUIRED: refresh bio with OurCloud]",
  },
  {
    name: "Alistair Elliott",
    role: "Technical Operations Manager",
    bio: "Leads networking and systems operations. [CONTENT REQUIRED: refresh bio with OurCloud]",
  },
  {
    name: "Ryan Eagar",
    role: "Director",
    bio: "Director involved in growing OurCloud’s managed services and related offerings. [CONTENT REQUIRED: refresh bio with OurCloud]",
  },
];

export const values = [
  {
    kicker: "New Zealand owned and operated",
    title: "NZ owned",
    body: "A New Zealand-owned technology company with local technical expertise and local support.",
  },
  {
    kicker: "Infrastructure you can rely on",
    title: "Own infrastructure",
    body: "OurCloud operates its own New Zealand-based data centre — the foundation behind many of our hosting, cloud and recovery services.",
  },
  {
    kicker: "Your IT. One partner.",
    title: "One technology partner",
    body: "IT support, cloud, Sophos, connectivity, backup and consulting through one relationship — not a stack of disconnected providers.",
  },
  {
    kicker: "Local people, local knowledge",
    title: "Local expertise",
    body: "Access to New Zealand-based technical knowledge and support from people who understand how local businesses actually run.",
  },
  {
    kicker: "Built around commercial reality",
    title: "Business focused",
    body: "Technology solutions designed around business requirements — so IT supports the strategy instead of living separately from it.",
  },
  {
    kicker: "From tickets to strategy",
    title: "End-to-end capability",
    body: "Support that ranges from everyday IT issues through to infrastructure, Sophos and strategic consulting.",
  },
];

export const insights: Insight[] = [
  {
    slug: "why-where-data-is-hosted-matters",
    title: "Why where your data is hosted matters",
    date: "12 August 2026",
    category: "Infrastructure",
    image:
      "https://images.unsplash.com/photo-1451188502541-149adc79ae36?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Public cloud is a tool. For many New Zealand businesses, the question is whether critical systems also need a local infrastructure foundation.",
    body: [
      "Most businesses do not need a cloud philosophy. They need systems that stay available, backups that restore, and a partner who understands the environment.",
      "OurCloud operates its own New Zealand-based data centre. That means hosting, private cloud and recovery services can sit on infrastructure in this country, supported by local people.",
      "Global SaaS still has a place. The decision is which systems should live there — and which should sit on professionally managed NZ infrastructure. [VERIFY WITH OURCLOUD for any location-specific claims beyond NZ-based ownership.]",
    ],
  },
  {
    slug: "one-technology-partner",
    title: "When should your business outsource IT?",
    date: "3 July 2026",
    category: "Business IT",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "If your technology is split across helpdesks, hosting providers, security tools and phone companies, nobody owns the join.",
    body: [
      "IT sprawl rarely starts with a grand plan. It starts with a good deal on broadband, a leftover phone system, and a server under someone’s desk.",
      "When those pieces report to different companies, gaps appear between support, security, backup and connectivity.",
      "OurCloud’s positioning is simple: one technology partner for your business — bringing IT support, cloud, infrastructure, Sophos, connectivity and consulting into one relationship.",
    ],
  },
  {
    slug: "prepared-for-cyber-incident",
    title: "How prepared is your business for a cyber incident?",
    date: "18 May 2026",
    category: "Business IT",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Protection, backup and a partner who knows your environment matter more than a stack of disconnected security tools.",
    body: [
      "A cyber incident is not only a technical event. It is a business continuity event — can people still work, can you restore systems, and who is coordinating the response?",
      "OurCloud provides Sophos endpoint and network protection as part of managed IT, alongside backup and recovery planning with a partner who already knows your environment.",
      "OurCloud does not claim systems are unhackable or “100% secure”. We help businesses keep protection and recovery connected to everyday IT support.",
    ],
  },
];

export const insightCategories = [
  "Cloud",
  "Infrastructure",
  "Business IT",
  "Microsoft 365",
  "Connectivity",
  "OurCloud News",
] as const;

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}
