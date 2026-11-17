import type { Metadata } from "next";
import TestimonialsSection, {
  studentReviews,
} from "@/components/sections/TestimonialsSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "Student Reviews & Testimonials | Placed Alumni in Coimbatore",
  description:
    "Read real reviews and placement stories from Vinsup Skill Academy alumni placed as Data Scientists, Data Analysts, Full Stack Developers, and Digital Marketers in Coimbatore.",
  keywords: [
    "vinsup skill academy reviews",
    "vinsup testimonials",
    "software training institute coimbatore reviews",
    "student placement stories coimbatore",
    "best IT academy in ganapathy feedback",
  ],
  alternates: {
    canonical: `${siteData.url}testimonials`,
  },
  openGraph: {
    title: "Alumni Reviews & Testimonials | Vinsup Skill Academy",
    description:
      "25,000+ students trained. Read authentic success stories from placed students.",
    url: `${siteData.url}testimonials`,
  },
};

export default function TestimonialsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vinsup Skill Academy Student Testimonials",
    itemListElement: studentReviews.map((review, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: review.name,
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: review.rating,
          bestRating: 5,
        },
        reviewBody: review.quote,
        itemReviewed: {
          "@type": "EducationalOrganization",
          name: siteData.name,
          telephone: siteData.phone,
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TestimonialsSection />
    </>
  );
}
