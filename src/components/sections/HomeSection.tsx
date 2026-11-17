import Link from "next/link";
import { siteData, coursesData } from "@/data/academyData";

export default function HomeSection() {
  return (
    <div className="w-full bg-white">
      {/* Intro Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-2">
            {siteData.tagline}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl">
            {siteData.name}
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            {siteData.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-neutral-700 border-y border-gray-100 py-4">
            <div>
              <span className="font-bold text-neutral-900">Students Trained: </span>
              {siteData.studentsTrained}
            </div>
            <div>
              <span className="font-bold text-neutral-900">Delivery: </span>
              {siteData.deliveryModes.join(" & ")}
            </div>
            <div>
              <span className="font-bold text-neutral-900">Campus: </span>
              Ganapathy, Coimbatore
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border border-gray-100 bg-neutral-50/50">
              <h2 className="font-bold text-sm text-neutral-900">JRP (Job Readiness Program)</h2>
              <p className="text-xs text-neutral-600 mt-1">{siteData.programs.JRP}</p>
            </div>
            <div className="p-4 rounded-lg border border-gray-100 bg-neutral-50/50">
              <h2 className="font-bold text-sm text-neutral-900">IOP (Interview Opportunity Program)</h2>
              <p className="text-xs text-neutral-600 mt-1">{siteData.programs.IOP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses List Section (6 Links) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
              Our Courses
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Select a course to view detailed syllabus, tools, projects, and career roles.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <article
              key={course.slug}
              className="flex flex-col justify-between p-6 rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-xs transition duration-150"
            >
              <div>
                <h3 className="text-lg font-bold text-neutral-900 leading-snug">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="hover:text-amber-600"
                  >
                    {course.h1}
                  </Link>
                </h3>
                <p className="mt-2 text-sm text-neutral-600 line-clamp-3">
                  {course.subtitle}
                </p>

                {course.durationHours && (
                  <span className="inline-block mt-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800">
                    {course.durationHours} Hours Duration
                  </span>
                )}

                <div className="mt-4">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1.5">
                    Tools Covered
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {course.tools.slice(0, 6).map((tool) => (
                      <span
                        key={tool}
                        className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-700"
                      >
                        {tool}
                      </span>
                    ))}
                    {course.tools.length > 6 && (
                      <span className="text-xs px-2 py-0.5 rounded bg-neutral-50 text-neutral-500">
                        +{course.tools.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={`/courses/${course.slug}`}
                  className="text-sm font-semibold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                >
                  View Full Syllabus & Details →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
