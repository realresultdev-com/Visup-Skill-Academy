import type { Metadata } from "next";
import EventsSection, { academyEvents } from "@/components/sections/EventsSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "Free Tech Masterclasses & Workshops in Coimbatore | Events",
  description:
    "Join free weekly masterclasses, webinars, and hands-on workshops in Data Science, Full Stack, UI/UX, and Digital Marketing at Vinsup Skill Academy, Ganapathy, Coimbatore.",
  keywords: [
    "free tech workshops coimbatore",
    "data science masterclass coimbatore",
    "full stack workshop coimbatore",
    "digital marketing seminar coimbatore",
    "vinsup academy events",
  ],
  alternates: {
    canonical: `${siteData.url}events`,
  },
  openGraph: {
    title: "Free Tech Workshops & Masterclasses | Vinsup Skill Academy",
    description:
      "Join free workshops in Data Science, AI, Full Stack, and Marketing at our Ganapathy campus.",
    url: `${siteData.url}events`,
  },
};

export default function EventsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Upcoming Tech & Marketing Masterclasses at Vinsup Skill Academy",
    itemListElement: academyEvents.map((evt, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Event",
        name: evt.title,
        description: evt.summary,
        eventStatus: "https://schema.org/EventScheduled",
        eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
        location: [
          {
            "@type": "Place",
            name: "Vinsup Skill Academy Ganapathy Campus",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy",
              addressLocality: "Coimbatore",
              addressRegion: "Tamil Nadu",
              postalCode: "641006",
              addressCountry: "IN",
            },
          },
          {
            "@type": "VirtualLocation",
            url: `${siteData.url}events`,
          },
        ],
        isAccessibleForFree: true,
        organizer: {
          "@type": "EducationalOrganization",
          name: siteData.name,
          url: siteData.url,
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
      <EventsSection />
    </>
  );
}
