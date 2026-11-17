import type { Metadata } from "next";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Testimonials for Visup Skill Academy",
  alternates: {
    canonical: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsSection />;
}
