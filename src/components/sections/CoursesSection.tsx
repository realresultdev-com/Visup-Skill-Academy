import Link from "next/link";
import { coursesData, siteData } from "@/data/academyData";

export default function CoursesSection() {
  return (
    <div className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">
          {siteData.tagline}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Courses in Coimbatore
        </h1>
        <p className="mt-2 text-base text-neutral-600 max-w-3xl">
          Comprehensive career-focused training with live projects, internship, and placement support at Ganapathy, Coimbatore.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {coursesData.map((course) => (
          <article
            key={course.slug}
            className="flex flex-col justify-between p-6 rounded-xl border border-gray-200 bg-white hover:border-amber-400 hover:shadow-xs transition duration-150"
          >
            <div>
              <h2 className="text-xl font-bold text-neutral-900 leading-snug">
                <Link
                  href={`/courses/${course.slug}`}
                  className="hover:text-amber-600"
                >
                  {course.h1}
                </Link>
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                {course.subtitle}
              </p>

              {course.durationHours && (
                <div className="mt-3">
                  <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800">
                    {course.durationHours} Hours Duration
                  </span>
                </div>
              )}

              <div className="mt-4">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                  Tools & Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {course.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-0.5 rounded bg-neutral-100 text-neutral-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {course.careerRoles && course.careerRoles.length > 0 && (
                <div className="mt-4">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                    Career Roles
                  </p>
                  <p className="text-xs text-neutral-700">
                    {course.careerRoles.join(" • ")}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-100">
              <Link
                href={`/courses/${course.slug}`}
                className="w-full inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-neutral-800 transition"
              >
                View Syllabus & Details
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
