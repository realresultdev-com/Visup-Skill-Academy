import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { coursesData, getCourseBySlug, siteData } from "@/data/academyData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const title = course.seoTitle || `${course.h1} | Vinsup Skill Academy`;
  const canonicalUrl = `${siteData.url}courses/${course.slug}`;
  const ogImageUrl = `${siteData.url}og/${course.slug}.jpg`;

  return {
    title,
    description: course.metaDescription,
    keywords: course.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description: course.metaDescription,
      url: canonicalUrl,
      siteName: siteData.name,
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: course.h1,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: course.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Schema.org structured data for SEO
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.h1,
    description: course.metaDescription,
    provider: {
      "@type": "EducationalOrganization",
      name: siteData.name,
      sameAs: siteData.url,
      telephone: siteData.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "148, A B Gopalsamy Koil Street, Sridevi Nagar, Ganapathy",
        addressLocality: "Coimbatore",
        addressRegion: "Tamil Nadu",
        postalCode: "641006",
        addressCountry: "IN",
      },
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: "onsite",
        location: {
          "@type": "Place",
          name: "Vinsup Skill Academy Ganapathy Campus",
          address: siteData.address,
        },
      },
      {
        "@type": "CourseInstance",
        courseMode: "online",
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteData.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: `${siteData.url}courses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: course.h1,
        item: `${siteData.url}courses/${course.slug}`,
      },
    ],
  };

  const faqSchema = course.faqs && course.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: course.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="w-full bg-white">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="border-b border-gray-100 py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-neutral-500"
        >
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-amber-600">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/courses" className="hover:text-amber-600">
                Courses
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-neutral-900 truncate">
              {course.h1}
            </li>
          </ol>
        </nav>

        {/* Hero Section: H1 & Subtitle */}
        <header className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
              Career-Focused Certification
            </span>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
              {course.h1}
            </h1>
            <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
              {course.subtitle}
            </p>

            {/* Quick Specs */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm text-neutral-700">
              {course.durationHours && (
                <div className="rounded-md bg-neutral-50 border border-gray-200 px-3.5 py-1.5 font-medium">
                  <span className="text-neutral-500">Duration: </span>
                  {course.durationHours} Hours
                </div>
              )}
              <div className="rounded-md bg-neutral-50 border border-gray-200 px-3.5 py-1.5 font-medium">
                <span className="text-neutral-500">Mode: </span>
                Classroom (Ganapathy) / Online
              </div>
              <div className="rounded-md bg-neutral-50 border border-gray-200 px-3.5 py-1.5 font-medium">
                <span className="text-neutral-500">Support: </span>
                JRP & IOP Guaranteed Interviews
              </div>
            </div>

            {/* Syllabus Download Button (if available) */}
            {course.syllabusPdf && (
              <div className="mt-6">
                <a
                  href={course.syllabusPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-700 transition"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download Syllabus PDF
                </a>
              </div>
            )}
          </div>
        </header>

        {/* Tools Section */}
        {course.tools && course.tools.length > 0 && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl mb-4">
              Tools & Technologies Covered
            </h2>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Syllabus Section (Numbered Modules with Sub-topics) */}
        {course.modules && course.modules.length > 0 && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <div className="mb-6">
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                Course Syllabus
              </h2>
              <p className="text-sm text-neutral-600 mt-1">
                Detailed module breakdown and curriculum topics.
              </p>
            </div>

            <div className="space-y-4">
              {course.modules.map((module, index) => (
                <div
                  key={module.title}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <h3 className="text-base font-bold text-neutral-900 flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center h-6 w-6 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                      {index + 1}
                    </span>
                    <span>{module.title}</span>
                  </h3>
                  <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 pl-9 text-sm text-neutral-600">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects Section (Capstone + Mini Projects) */}
        {course.projects && course.projects.length > 0 && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl mb-4">
              Hands-On Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.projects.map((project, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 bg-white p-5 flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-base font-bold text-neutral-900">
                      {project.area}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Career Roles Section */}
        {course.careerRoles && course.careerRoles.length > 0 && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl mb-4">
              Career Roles You Can Target
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {course.careerRoles.map((role) => (
                <span
                  key={role}
                  className="rounded-full bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-neutral-800"
                >
                  {role}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Syllabus PDF Download Card */}
        {course.syllabusPdf && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <div className="rounded-xl border border-amber-200 bg-amber-50/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-neutral-900">
                  Download Full Curriculum Brochure
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  Get the complete syllabus outline, practical schedule, and project guidelines.
                </p>
              </div>
              <a
                href={course.syllabusPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-md bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-amber-700 transition"
              >
                Download PDF
              </a>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {course.faqs && course.faqs.length > 0 && (
          <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
            <h2 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl mb-6">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-4">
              {course.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-gray-200 bg-white p-5"
                >
                  <dt className="text-base font-bold text-neutral-900">
                    {faq.q}
                  </dt>
                  <dd className="mt-2 text-sm text-neutral-600 leading-relaxed">
                    {faq.a}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </article>
    </>
  );
}
