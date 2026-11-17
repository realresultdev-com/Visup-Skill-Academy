import type { Metadata } from "next";
import CoursesSection from "@/components/sections/CoursesSection";
import { siteData } from "@/data/academyData";

export const metadata: Metadata = {
  title: "Courses in Coimbatore | IT & Digital Marketing Training",
  description:
    "Explore job-oriented courses in Data Science, Data Analytics, MERN Stack, UI/UX Design, and Digital Marketing with live projects and 100% placement support in Coimbatore.",
  keywords: siteData.keywords,
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Courses in Coimbatore | Vinsup Skill Academy",
    description:
      "Explore job-oriented courses in Data Science, Data Analytics, MERN Stack, UI/UX Design, and Digital Marketing.",
    url: `${siteData.url}courses`,
  },
};

export default function CoursesPage() {
  return <CoursesSection />;
}
