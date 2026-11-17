import Link from "next/link";
import { siteData } from "@/data/academyData";

export interface StudentReview {
  name: string;
  course: string;
  role: string;
  highlight: string;
  quote: string;
  rating: number;
}

export const studentReviews: StudentReview[] = [
  {
    name: "Arun Kumar",
    course: "Data Science with Gen AI (Data Verse Pro)",
    role: "Junior Data Scientist",
    highlight: "Non-IT to Data Science in 4 Months",
    quote:
      "Coming from a mechanical background, I was intimidated by Python and Machine Learning. The mentors at Vinsup explained everything step-by-step from scratch and supported me in Tamil whenever I had doubts. Building the RAG document bot gave me the exact confidence I needed in my interviews.",
    rating: 5,
  },
  {
    name: "Priya Dharshini",
    course: "AI-Ready Data Analytics",
    role: "Business Intelligence Analyst",
    highlight: "Cracked BI role through IOP Drives",
    quote:
      "The Power BI and advanced SQL modules are completely practical. I built 4 industry dashboards that I showcased directly during my technical interview. The mock interviews through JRP helped me answer complex business case studies smoothly.",
    rating: 5,
  },
  {
    name: "Karthik Subramanian",
    course: "Software Development (MERN Stack)",
    role: "Full Stack Developer",
    highlight: "Built Production E-Commerce Capstone",
    quote:
      "Most institutes just teach basic HTML and simple React components. At Vinsup, we learned complete architectural patterns, authentication, MongoDB aggregation, and AI workflows using Cursor. I secured my offer letter within 3 weeks of finishing.",
    rating: 5,
  },
  {
    name: "Santhosh M.",
    course: "Devstack Engineer (Full Stack + DevOps)",
    role: "DevOps & Cloud Engineer",
    highlight: "Docker & Jenkins Hands-on Mastery",
    quote:
      "Learning full stack alongside Docker, Jenkins CI/CD, and AWS deployment made my profile stand out completely. The mentors gave real-time server access and guided me through production debugging.",
    rating: 5,
  },
  {
    name: "Nandhini S.",
    course: "UI/UX & Graphic Design",
    role: "Product UI Designer",
    highlight: "Polished Behance Portfolio",
    quote:
      "The focus on design systems, component libraries, and interactive prototyping in Figma was incredible. My mentor personally reviewed my Behance case study 3 times until it looked agency-grade.",
    rating: 5,
  },
  {
    name: "Vignesh R.",
    course: "AI & Digital Marketing",
    role: "Performance Marketing Specialist",
    highlight: "Managed Real Meta & Google Ads Budget",
    quote:
      "Unlike courses that only show screenshots, Vinsup had us set up real Google Ads campaigns, GA4 tracking, and WhatsApp lead automation. The technical SEO module gave me a massive edge over other candidates.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Student Success Stories
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            Hear Directly from Our Placed Alumni
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            Over {siteData.studentsTrained} students, fresh graduates, and career switchers have transformed their careers with Vinsup Skill Academy in Coimbatore. Here is what they have to say about our practical training, mentorship, and placement drives.
          </p>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentReviews.map((review) => (
            <article
              key={review.name}
              className="p-6 rounded-xl border border-gray-200 bg-white shadow-2xs flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3" aria-label="5 out of 5 stars">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                  {review.highlight}
                </p>

                <p className="text-sm text-neutral-700 italic leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100">
                <h2 className="text-base font-bold text-neutral-900">
                  {review.name}
                </h2>
                <p className="text-xs font-semibold text-neutral-800">
                  Placed as {review.role}
                </p>
                <p className="text-xs text-neutral-500 mt-0.5">
                  Track: {review.course}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-gray-100">
        <div className="rounded-2xl border border-gray-200 bg-neutral-50/50 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold text-neutral-900 sm:text-2xl">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-sm text-neutral-600 mt-1 max-w-xl">
              Join a free demo class at our Ganapathy campus or connect with our career counselors to pick the best career track for you.
            </p>
          </div>
          <Link
            href="/contact"
            className="flex-shrink-0 inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-bold text-white shadow-xs hover:bg-amber-700 transition"
          >
            Schedule Free Demo Class
          </Link>
        </div>
      </section>
    </div>
  );
}
