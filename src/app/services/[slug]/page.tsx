import { notFound } from "next/navigation";
import ServiceDetailView from "@/components/ServiceDetailView";
import { getServiceDetail, serviceDetails } from "@/lib/serviceDetails";

export function generateStaticParams() {
  return serviceDetails.map((item) => ({ slug: item.slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = getServiceDetail(slug);
  if (!detail) notFound();

  return <ServiceDetailView detail={detail} />;
}
