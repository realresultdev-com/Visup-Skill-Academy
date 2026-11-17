import type { Metadata } from "next";
import PlayBookSection from "@/components/sections/PlayBookSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "The Learning Playbook | How Vinsup Trains Industry-Ready Engineers",
  description:
    "Discover the Vinsup Skill Academy learning methodology: active coding, AI-augmented workflows, daily lab challenges, code reviews, and enterprise capstone execution in Coimbatore.",
  keywords: [
    "vinsup learning methodology",
    "software training playbook",
    "hands on IT training coimbatore",
    "ai coding workflow institute coimbatore",
  ],
  alternates: {
    canonical: `${siteData.url}play-book`,
  },
  openGraph: {
    title: "The Learning Playbook | Vinsup Skill Academy",
    description:
      "From fundamentals to production deployment: our battle-tested technical training methodology.",
    url: `${siteData.url}play-book`,
  },
};

export default function PlayBookPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemPage",
    name: "Vinsup Skill Academy Learning Playbook",
    url: `${siteData.url}play-book`,
    description:
      "Our 6-step practical learning framework designed to turn learners into industry-ready tech and marketing professionals.",
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
      <PlayBookSection />
    </>
  );
}
