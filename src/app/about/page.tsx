import type { Metadata } from "next";
import AboutSection from "@/components/sections/AboutSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "About Us | Best IT & Software Training Institute in Coimbatore",
  description:
    "Learn about Vinsup Skill Academy in Ganapathy, Coimbatore. Over 25,000+ students trained in Data Science, Data Analytics, Full Stack, UI/UX, and Digital Marketing with guaranteed placement support.",
  keywords: [
    "about vinsup skill academy",
    "best software training institute in coimbatore",
    "IT training institute ganapathy coimbatore",
    "data science training institute coimbatore",
    "best institute in coimbatore with placement",
  ],
  alternates: {
    canonical: `${siteData.url}about`,
  },
  openGraph: {
    title: "About Vinsup Skill Academy | IT Training in Coimbatore",
    description:
      "Career-focused, AI-integrated training in Coimbatore with 25,000+ students trained and guaranteed placement support.",
    url: `${siteData.url}about`,
  },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Vinsup Skill Academy",
    url: `${siteData.url}about`,
    description: siteData.description,
    mainEntity: {
      "@id": `${siteData.url}#organization`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutSection />
    </>
  );
}
