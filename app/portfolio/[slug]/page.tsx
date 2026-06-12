import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import CaseStudyContent from "./case-study-content";

const projects = {
  "alloclients-erp": {
    title: "ClientFlow",
    description: "Complete client management system with invoicing, project tracking, and team collaboration for service agencies.",
  },
  "numa-platform": {
    title: "NexusERP",
    description: "Enterprise inventory and supply chain management with real-time analytics and predictive restocking.",
  },
  "medtrack-mobile": {
    title: "HealthSync",
    description: "Healthcare compliance tracking app with offline sync, biometric auth, and HIPAA-compliant data handling.",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} | Idmisk Portfolio`,
    description: project.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    notFound();
  }

  return (
    <>
      <Header />
      <CaseStudyContent slug={slug} />
      <Footer />
    </>
  );
}
