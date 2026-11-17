import Link from "next/link";
import { siteData } from "@/data/academyData";

export default function PlayBookSection() {
  const steps = [
    {
      num: "01",
      title: "Mental Models & Core Fundamentals",
      summary: "Understand the 'Why' before the 'How'.",
      details:
        "Whether it is database normalization, machine learning algorithms, or marketing unit economics (CAC, LTV), we build deep foundational understanding before teaching tool clicks.",
    },
    {
      num: "02",
      title: "Daily Lab Challenges & Active Coding",
      summary: "Theory is immediately reinforced with live practice.",
      details:
        "Every 60 minutes of conceptual instruction is paired with 90 minutes of dedicated lab challenges under direct mentor guidance at our Ganapathy campus or live online workspace.",
    },
    {
      num: "03",
      title: "AI-Augmented Development Workflows",
      summary: "Modern tools for 3x developer productivity.",
      details:
        "Students are trained in AI-native workflows using Cursor, GitHub Copilot, Cline, and Google Antigravity, teaching how to leverage AI without compromising core analytical and algorithmic problem-solving skills.",
    },
    {
      num: "04",
      title: "PR Reviews & Industry Standards",
      summary: "Learn how modern engineering teams actually build software.",
      details:
        "All code is pushed to GitHub with branching strategies, conventional commits, and mandatory mentor pull-request reviews evaluating code cleanliness, performance, and security.",
    },
    {
      num: "05",
      title: "Production Capstone Architecture",
      summary: "One massive, end-to-end enterprise build.",
      details:
        "Every student architects a full capstone: from raw data/wireframe to a containerized, deployed, cloud-hosted application or multi-channel marketing system ready for technical inspection.",
    },
    {
      num: "06",
      title: "Live Project Internship & Credentialing",
      summary: "Graduate with real project experience.",
      details:
        "Upon capstone defense, students complete a live project internship simulation and receive a recognized Course Completion Certificate and Internship Experience Letter.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            The Vinsup Learning Playbook
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            How We Turn Beginners into Job-Ready Tech Professionals
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            Our Playbook is a battle-tested educational framework refined over training {siteData.studentsTrained} students. We reject rote memorization in favor of hands-on simulation, rigorous peer code reviews, and modern AI workflows.
          </p>
        </div>
      </section>

      {/* Playbook Steps */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-amber-600 mb-2 block">
                  {step.num}
                </span>
                <h2 className="text-lg font-bold text-neutral-900">
                  {step.title}
                </h2>
                <p className="text-xs font-semibold text-amber-800 uppercase tracking-wider mt-1 mb-2">
                  {step.summary}
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="rounded-2xl border border-gray-200 bg-neutral-50/50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Experience the Playbook in Action
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Attend a live class or visit our Ganapathy campus to see our student labs, mentor stations, and live project work firsthand.
            </p>
          </div>
          <Link
            href="/courses"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-amber-700 transition"
          >
            Explore Courses
          </Link>
        </div>
      </section>
    </div>
  );
}
