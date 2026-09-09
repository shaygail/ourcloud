import ServicesCarousel from "@/components/ServicesCarousel";

const featuredCards = [
  {
    slug: "managed-it",
    tag: "Managed",
    title: "Managed IT",
    blurb:
      "End-to-end management of your local IT infrastructure, everyday support, and systems alignment.",
    image: "/images/services/managed-it.png",
  },
  {
    slug: "cloud-hosting",
    tag: "Cloud",
    title: "Cloud & Hosting",
    blurb:
      "Secure, local New Zealand hosting architectures built for reliability, scalability and high availability.",
    image: "/images/services/cloud-hosting.png",
  },
  {
    slug: "data-centre",
    tag: "Infrastructure",
    title: "Data Centre",
    blurb:
      "OurCloud’s own New Zealand data centre — secure hosting, private cloud, storage and recovery infrastructure.",
    image: "/images/services/data-centre.png",
  },
  {
    slug: "sophos",
    tag: "Sophos",
    title: "Sophos",
    blurb:
      "Sophos endpoint and network protection, managed alongside your wider OurCloud IT environment.",
    image: "/images/services/sophos.png",
  },
] as const;

export default function ServicesPage() {
  return <ServicesCarousel cards={[...featuredCards]} />;
}
