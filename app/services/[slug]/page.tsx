import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import ServiceDetailContent from "./service-detail-content";

const services = {
  "enterprise-saas": {
    title: "SaaS & Web Applications",
    description: "Design and engineering of robust, high-performance Software as a Service platforms.",
  },
  "erp-crm": {
    title: "Custom ERP & CRM",
    description: "Bespoke business management systems tailored to your exact operational workflows.",
  },
  "backend-apis": {
    title: "Scalable Backend & APIs",
    description: "Secure, lightning-fast database connections and automated workflows.",
  },
  "modern-frontend": {
    title: "Modern Frontends",
    description: "Dynamic, responsive, and intuitive user experiences using the latest web tech.",
  },
  "secure-ecommerce": {
    title: "Secure E-commerce",
    description: "High-converting online stores built for scale and traffic peaks.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: `${service.title} | Idmisk Services`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services[slug as keyof typeof services];

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <ServiceDetailContent slug={slug} />
      <Footer />
    </>
  );
}
