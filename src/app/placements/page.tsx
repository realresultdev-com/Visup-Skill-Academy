import type { Metadata } from "next";
import PlacementsSection from "@/components/sections/PlacementsSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "100% Placement Support | JRP & IOP Programs in Coimbatore",
  description:
    "Explore Vinsup Skill Academy's placement framework. Our Job Readiness Program (JRP) and Interview Opportunity Program (IOP) provide soft skills, AI mock interviews, and guaranteed interviews in Coimbatore.",
  keywords: [
    "placement support institute coimbatore",
    "software training with placement coimbatore",
    "IT jobs for freshers coimbatore",
    "job readiness program coimbatore",
    "interview opportunity program vinsup",
  ],
  alternates: {
    canonical: `${siteData.url}placements`,
  },
  openGraph: {
    title: "100% Placement Assistance | Vinsup Skill Academy Coimbatore",
    description:
      "Guaranteed interview opportunities and comprehensive job readiness training.",
    url: `${siteData.url}placements`,
  },
};

export default function PlacementsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Placement Assistance - Vinsup Skill Academy",
    url: `${siteData.url}placements`,
    description:
      "Comprehensive placement framework featuring JRP (Job Readiness Program) and IOP (Interview Opportunity Program) with guaranteed interview support.",
    provider: {
      "@id": `${siteData.url}#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PlacementsSection />
    </>
  );
}
