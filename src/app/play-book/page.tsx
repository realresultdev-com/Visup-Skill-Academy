import type { Metadata } from "next";
import PlayBookSection from "@/components/sections/PlayBookSection";

export const metadata: Metadata = {
  title: "Play Book",
  description: "Play Book of Visup Skill Academy",
  alternates: {
    canonical: "/play-book",
  },
};

export default function PlayBookPage() {
  return <PlayBookSection />;
}
