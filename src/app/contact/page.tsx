import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "Contact Us & Campus Directions | Ganapathy, Coimbatore",
  description:
    "Get in touch with Vinsup Skill Academy at Ganapathy, Coimbatore. Contact us via phone (+91-8248826374), WhatsApp, or visit our campus for free course counseling and demo classes.",
  keywords: [
    "contact vinsup skill academy",
    "software institute ganapathy coimbatore phone",
    "IT academy address coimbatore",
    "course admissions coimbatore",
  ],
  alternates: {
    canonical: `${siteData.url}contact`,
  },
  openGraph: {
    title: "Contact & Campus Directions | Vinsup Skill Academy Coimbatore",
    description:
      "Visit our Ganapathy campus in Coimbatore or book a free counseling session.",
    url: `${siteData.url}contact`,
  },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Vinsup Skill Academy",
    url: `${siteData.url}contact`,
    description:
      "Contact information, admissions inquiry form, and campus location in Ganapathy, Coimbatore.",
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
      <ContactSection />
    </>
  );
}
