import type { Metadata } from "next";
import EventsSection from "@/components/sections/EventsSection";

export const metadata: Metadata = {
  title: "Events",
  description: "Events at Visup Skill Academy",
  alternates: {
    canonical: "/events",
  },
};

export default function EventsPage() {
  return <EventsSection />;
}
