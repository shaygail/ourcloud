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
};

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
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80",
    industry: "businesses",
    audience: "one partner.",
    caption: "Hughson & Associates",
    href: "/work/hughson",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=80",
    industry: "teams",
    audience: "local support.",
    caption: "PIHMS",
    href: "/work/pihms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=80",
    industry: "systems",
    audience: "NZ infrastructure.",
    caption: "Explore our Data Centre",
    href: "/services#data-centre",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
    industry: "organisations",
    audience: "clear advice.",
    caption: "Taranaki Chamber",
    href: "/work/chamber",
  },
  {
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80",
    industry: "retailers",
    audience: "dependable IT.",
    caption: "The Hive",
    href: "/work/hive",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=2000&q=80",
    industry: "growing firms",
    audience: "technology strategy.",
    caption: "Explore Consulting",
    href: "/services#consulting",
  },
];

export const thriveImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1800&q=80",
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
    body: "Keep your people productive with IT support, Microsoft 365, device and network management handled by one local team — from everyday issues through to longer-term technology planning.",
    image:
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1600&q=80",
    alt: "Technology specialist at work",
    href: "/services#managed-it",
    cta: "Explore Managed IT",
  },
  {
    title: "Infrastructure you can rely on, right here in New Zealand",
    body: "Move critical systems into a professionally managed environment backed by OurCloud’s own New Zealand data centre — private cloud, hosting, storage, backup and recovery without running the racks yourself.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
    alt: "Data centre infrastructure",
    href: "/services#data-centre",
    cta: "Explore our Data Centre",
    reverse: true,
  },
  {
    title: "Security built into the environment",
    body: "Protect your people, devices, accounts, email, data and infrastructure. Security isn’t a single product — it’s part of how your technology is designed, managed and supported.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=80",
    alt: "Secure business technology",
    href: "/services#cybersecurity",
    cta: "Explore Cybersecurity",
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
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    short: "Protect your people, devices, accounts and data with security built into your IT environment.",
    body: "Security isn’t a single product. It’s part of how your technology environment is designed, managed and supported — covering people, devices, accounts, email, data and infrastructure.",
    provides: [
      "Endpoint protection",
      "Email security",
      "Identity and access protection",
      "Security monitoring",
      "Cybersecurity consulting",
      "Backup",
      "Disaster recovery",
    ],
    whyUs:
      "Security sits alongside managed IT, cloud and recovery planning with one New Zealand partner — without unsupported “100% secure” claims.",
    cta: "Explore Cybersecurity",
    ctaHref: "/start",
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
      "Advice from a team that also runs infrastructure, cloud, security and support — strategy connected to delivery.",
    cta: "Book a consultation",
    ctaHref: "/start",
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
    headline: "Critical systems hosted locally — the team kept working from anywhere.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
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
    headline: "A clearer IT foundation so staff can focus on teaching and operations.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
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
    headline: "Complete solutions with follow-through — not another disconnected vendor.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80",
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
    headline: "Backups, protection and support on one relationship — explained without jargon.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
    summary:
      "A retail business wanted technology that matched how the shop actually runs: backups, antivirus and a team they could talk to, brought together on one monthly invoice.",
    tags: ["Managed IT", "Cybersecurity", "Backup"],
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
    note: "Figure from existing OurCloud materials. [VERIFY NUMBER OF CUSTOMERS]",
  },
  {
    value: "NZ",
    label: "owned and operated",
    note: "New Zealand-owned technology, infrastructure and support",
  },
  {
    value: "1",
    label: "technology partner",
    note: "IT, cloud, security, connectivity and infrastructure together",
  },
  {
    value: "Own",
    label: "NZ data centre",
    note: "Infrastructure hosted through OurCloud’s own platform. [ADD CURRENT DATA CENTRE SPECIFICATIONS]",
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
    body: "IT support, cloud, cybersecurity, connectivity, backup and consulting through one relationship — not a stack of disconnected providers.",
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
    body: "Support that ranges from everyday IT issues through to infrastructure, security and strategic consulting.",
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
      "OurCloud’s positioning is simple: one technology partner for your business — bringing IT support, cloud, infrastructure, cybersecurity, connectivity and consulting into one relationship.",
    ],
  },
  {
    slug: "prepared-for-cyber-incident",
    title: "How prepared is your business for a cyber incident?",
    date: "18 May 2026",
    category: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Security isn’t a single product. It’s how people, devices, accounts, email, data and infrastructure are designed and supported together.",
    body: [
      "A cyber incident is not only a technical event. It is a business continuity event — can people still work, can you restore systems, and who is coordinating the response?",
      "Endpoint protection, email security, identity controls, monitoring, backup and recovery planning all matter. So does having a partner who already knows your environment.",
      "OurCloud does not claim systems are unhackable or “100% secure”. We help businesses build security into everyday IT management and recovery planning. [VERIFY WITH OURCLOUD before publishing product names or certifications.]",
    ],
  },
];

export const insightCategories = [
  "Cyber Security",
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
