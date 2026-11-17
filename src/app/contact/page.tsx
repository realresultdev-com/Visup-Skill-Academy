import type { Metadata } from "next";
import ContactSection from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Visup Skill Academy",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <ContactSection />;
}
