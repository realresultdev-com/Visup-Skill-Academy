import type { Metadata } from "next";
import HomeSection from "@/components/sections/HomeSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Visup Skill Academy Home",
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return <HomeSection />;
}
