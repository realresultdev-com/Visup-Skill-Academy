import Link from "next/link";
import { siteData } from "@/data/academyData";

export default function PlacementsSection() {
  const placementSteps = [
    {
      step: "01",
      title: "Hands-On Curriculum & Projects",
      desc: "Complete your chosen track with live hands-on projects, code reviews, and industry mentor checkpoints.",
    },
    {
      step: "02",
      title: "Portfolio & GitHub / Behance Build",
      desc: "Package your capstone and mini projects into production-ready repositories and case studies that impress hiring managers.",
    },
    {
      step: "03",
      title: "Job Readiness Program (JRP)",
      desc: "Intensive training in technical aptitude, soft skills, communication, and ATS-optimized resume craft.",
    },
    {
      step: "04",
      title: "AI-Augmented Mock Interviews",
      desc: "Rigorous technical mock interviews simulating real enterprise hiring tests with actionable rubric feedback.",
    },
    {
      step: "05",
      title: "Interview Opportunity Program (IOP)",
      desc: "Direct interview scheduling with top corporate recruiters and hiring partners until you secure your job offer.",
    },
    {
      step: "06",
      title: "Offer Letter & Career Onboarding",
      desc: "Salary negotiation guidance, contract onboarding assistance, and continuous alumni community support.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Placement Assurance
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            Guaranteed Placement Assistance &amp; Job Readiness
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            At Vinsup Skill Academy, training doesn&apos;t end when classes finish. Through our dual framework of <span className="font-semibold text-neutral-900">JRP (Job Readiness Program)</span> and <span className="font-semibold text-neutral-900">IOP (Interview Opportunity Program)</span>, we support our students until they land their dream tech or marketing role.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-bold mb-2">
                Program 01
              </span>
              <h2 className="text-lg font-bold text-neutral-900">
                JRP (Job Readiness Program)
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {siteData.programs.JRP}
              </p>
            </div>

            <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs">
              <span className="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-800 text-xs font-bold mb-2">
                Program 02
              </span>
              <h2 className="text-lg font-bold text-neutral-900">
                IOP (Interview Opportunity Program)
              </h2>
              <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                {siteData.programs.IOP}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6-Stage Placement Roadmap */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Proven Roadmap
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mt-1">
            Our 6-Step Placement Process
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            A structured path from day one to your first day on the job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placementSteps.map((item) => (
            <div
              key={item.step}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-extrabold text-amber-600 mb-2 block">
                  {item.step}
                </span>
                <h3 className="text-base font-bold text-neutral-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="rounded-2xl border border-amber-200 bg-amber-50/40 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Ready to Kickstart Your Career Journey?
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
              Talk to our career counselors at our Ganapathy campus or request a personalized syllabus and placement consultation call.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-amber-700 transition"
          >
            Book Free Career Counseling
          </Link>
        </div>
      </section>
    </div>
  );
}
