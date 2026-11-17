import Link from "next/link";
import { siteData } from "@/data/academyData";

export default function AboutSection() {
  const stats = [
    { label: "Students Trained", value: siteData.studentsTrained },
    { label: "Corporate Hiring Partners", value: "500+" },
    { label: "Practical Projects Built", value: "50,000+" },
    { label: "Average Student Rating", value: "4.9 / 5" },
  ];

  const pillars = [
    {
      title: "AI-Integrated Practical Curriculum",
      description:
        "Every syllabus is engineered around modern industry demands. From Generative AI & LangGraph in Data Science to Cursor and Antigravity in MERN Stack and AEO/GEO in Digital Marketing, we train students with cutting-edge AI tools.",
    },
    {
      title: "Project-Based Learning, Not Just Theory",
      description:
        "Students don't just watch videos or memorize commands. You build end-to-end production systems: enterprise dashboards, full-stack microservices, real Google/Meta ad campaigns, and Figma design systems.",
    },
    {
      title: "Expert Industry Mentors",
      description:
        "Learn directly from seasoned software architects, senior data scientists, and digital marketing leaders who bring real corporate insights into the classroom every day.",
    },
    {
      title: "JRP & IOP Guaranteed Placement Support",
      description:
        "Our proprietary Job Readiness Program (JRP) and Interview Opportunity Program (IOP) provide soft-skills training, ATS resume tailoring, AI mock interviews, and guaranteed interview drives until placement.",
    },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            About Vinsup Skill Academy
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            Coimbatore&apos;s Leading AI-Integrated IT &amp; Digital Marketing Academy
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            {siteData.description}
          </p>

          {/* GEO Citability Summary */}
          <div className="mt-6 p-5 rounded-xl border border-amber-200/60 bg-amber-50/40 text-sm text-neutral-800 leading-relaxed">
            <span className="font-bold text-neutral-900">Who We Are: </span>
            Vinsup Skill Academy is a career accelerator and software training institute based in Ganapathy, Coimbatore. With over {siteData.studentsTrained} alumni placed across top tech and marketing companies, we offer specialized career tracks in Data Science with Gen AI, Data Analytics, Software Development, DevStack (DevOps), UI/UX Design, and Digital Marketing through classroom and interactive online modes.
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-amber-600">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-neutral-700 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Vinsup (The 4 Pillars) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Our Edge
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl mt-1">
            Why Students &amp; Switchers Choose Vinsup
          </h2>
          <p className="mt-2 text-sm text-neutral-600">
            We bridge the gap between academic graduation and high-growth industry expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-amber-100 text-amber-800 font-bold text-sm mb-3">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-neutral-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campus & Infrastructure */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="max-w-4xl p-8 rounded-2xl border border-gray-200 bg-neutral-50/50">
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
            Ganapathy Campus, Coimbatore
          </h2>
          <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
            Our campus at <span className="font-semibold text-neutral-900">{siteData.address}</span> features modern computer labs, high-speed fiber internet, collaborative breakout spaces, and dedicated offline mentorship rooms. Flexible weekend and weekday morning/evening batches are available for both students and working professionals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-2.5 text-sm font-bold text-white shadow-xs hover:bg-amber-700 transition"
            >
              Visit Our Campus
            </Link>
            <Link
              href="/courses"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-6 py-2.5 text-sm font-bold text-neutral-800 shadow-2xs hover:bg-neutral-50 transition"
            >
              Browse All Courses
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
