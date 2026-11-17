import Link from "next/link";
import { siteData } from "@/data/academyData";

export interface AcademyEvent {
  title: string;
  category: string;
  date: string;
  time: string;
  mode: string;
  summary: string;
  topics: string[];
}

export const academyEvents: AcademyEvent[] = [
  {
    title: "Masterclass: Breaking into Data Science & Generative AI in 2026",
    category: "Data Science & AI",
    date: "Every Saturday",
    time: "10:00 AM – 1:00 PM IST",
    mode: "Ganapathy Campus (Offline) + Live Stream",
    summary:
      "A hands-on introductory masterclass exploring the 2026 data science roadmap: from Python and SQL to fine-tuning LLMs, RAG pipelines, and landing your first Data Science job.",
    topics: [
      "2026 AI Career Landscape",
      "Python & SQL Live Case Study",
      "Building a RAG Pipeline in 30 Mins",
      "1-on-1 Career Roadmap Q&A",
    ],
  },
  {
    title: "Workshop: Building Full-Stack Web Apps with AI Coding Assistants",
    category: "Full Stack & DevOps",
    date: "Every Sunday",
    time: "2:00 PM – 5:00 PM IST",
    mode: "Live Interactive Online Lab",
    summary:
      "Discover how modern engineers build software 3x faster using React 19, Node.js, Docker, and AI-native coding assistants like Cursor and Google Antigravity.",
    topics: [
      "Modern MERN Stack Architecture",
      "AI Prompt Engineering for Developers",
      "Dockerizing a Full Stack App",
      "GitHub CI/CD Deployment Walkthrough",
    ],
  },
  {
    title: "Masterclass: Technical SEO, Core Web Vitals & High-ROAS Ads",
    category: "Digital Marketing",
    date: "Every Wednesday",
    time: "6:00 PM – 8:00 PM IST",
    mode: "Ganapathy Campus (Offline) + Live Stream",
    summary:
      "Go beyond basic social media posting. Learn how search engines actually crawl and render pages, how to fix Core Web Vitals, and how to scale Meta & Google ads profitably.",
    topics: [
      "How Googlebot Crawls & Renders Code",
      "Structured Data & Schema.org Rich Results",
      "Google Performance Max & Meta CBO Ads",
      "GA4 Server-Side Measurement",
    ],
  },
  {
    title: "Design Sprint: UI/UX Wireframing & Figma Component Mastery",
    category: "UI/UX & Design",
    date: "Every Thursday",
    time: "5:00 PM – 7:30 PM IST",
    mode: "Ganapathy Campus Design Lab",
    summary:
      "An intensive design sprint on user research, empathy mapping, design systems, and building interactive prototypes in Figma with AI design tools.",
    topics: [
      "UX Research & User Persona Frameworks",
      "Figma Auto-Layout & Interactive Components",
      "AI Wireframing with Relume & Claude",
      "Designing a Portfolio-Ready Case Study",
    ],
  },
];

export default function EventsSection() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Free Community Learning
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            Upcoming Masterclasses, Tech Workshops &amp; Free Demo Classes
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            Experience Vinsup Skill Academy&apos;s practical training before you enroll. Join our free weekly masterclasses and interactive tech workshops hosted live at our Ganapathy campus in Coimbatore and online.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {academyEvents.map((evt) => (
            <article
              key={evt.title}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
                    {evt.category}
                  </span>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Free Entry / 100% Scholarship
                  </span>
                </div>

                <h2 className="text-xl font-bold text-neutral-900 leading-snug">
                  {evt.title}
                </h2>

                <div className="mt-3 text-xs text-neutral-600 space-y-1">
                  <p>
                    <span className="font-semibold text-neutral-800">Schedule: </span>
                    {evt.date} · {evt.time}
                  </p>
                  <p>
                    <span className="font-semibold text-neutral-800">Location: </span>
                    {evt.mode}
                  </p>
                </div>

                <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                  {evt.summary}
                </p>

                <div className="mt-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                    What You Will Learn:
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-neutral-600">
                    {evt.topics.map((t) => (
                      <li key={t} className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-neutral-500 font-medium">
                  Limited to 25 Seats per Session
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-amber-600 px-5 py-2 text-xs font-bold text-white shadow-xs hover:bg-amber-700 transition"
                >
                  Reserve Free Seat
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Campus Info Callout */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="p-8 rounded-2xl border border-gray-200 bg-neutral-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900">
              Need a 1-on-1 Career Consultation Instead?
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Walk into our Ganapathy campus anytime from Monday to Saturday (9 AM – 7 PM) for an in-person skill assessment with our senior academic counselors.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-neutral-900 px-6 py-3 text-sm font-bold text-white hover:bg-neutral-800 transition"
          >
            Get Campus Directions
          </Link>
        </div>
      </section>
    </div>
  );
}
