import type { Metadata } from "next";
import PlacementsSection from "@/components/sections/PlacementsSection";

export const metadata: Metadata = {
  title: "Placements",
  description: "Placements at Visup Skill Academy",
  alternates: {
    canonical: "/placements",
  },
};

export default function PlacementsPage() {
  return <PlacementsSection />;
}
