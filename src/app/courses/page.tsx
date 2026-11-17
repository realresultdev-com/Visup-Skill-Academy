import type { Metadata } from "next";
import CoursesSection from "@/components/sections/CoursesSection";

export const metadata: Metadata = {
  title: "Courses",
  description: "Courses offered by Visup Skill Academy",
  alternates: {
    canonical: "/courses",
  },
};

export default function CoursesPage() {
  return <CoursesSection />;
}
