import Link from "next/link";
import { siteData, coursesData } from "@/data/academyData";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 text-neutral-700 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Contact */}
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-neutral-900">{siteData.name}</h2>
          <p className="text-sm text-neutral-600">{siteData.tagline}</p>
          <p className="text-sm font-medium text-neutral-800">
            {siteData.studentsTrained} Students Trained
          </p>
          <div className="text-sm text-neutral-600 space-y-1 pt-2">
            <p>
              <span className="font-semibold text-neutral-800">Address: </span>
              {siteData.address}
            </p>
            <p>
              <span className="font-semibold text-neutral-800">Phone: </span>
              <a
                href={`tel:${siteData.phone}`}
                className="text-amber-600 hover:underline"
              >
                {siteData.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold text-neutral-800">Delivery Modes: </span>
              {siteData.deliveryModes.join(", ")}
            </p>
          </div>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3">
            Courses
          </h3>
          <ul className="space-y-2 text-sm">
            {coursesData.map((course) => (
              <li key={course.slug}>
                <Link
                  href={`/courses/${course.slug}`}
                  className="hover:text-amber-600 transition-colors"
                >
                  {course.h1.split(" course in Coimbatore")[0]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation & Programs */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-900 mb-3">
            Programs & Academy
          </h3>
          <ul className="space-y-2 text-sm mb-4">
            <li>
              <Link href="/about" className="hover:text-amber-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-amber-600">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/placements" className="hover:text-amber-600">
                Placements
              </Link>
            </li>
            <li>
              <Link href="/play-book" className="hover:text-amber-600">
                Play Book
              </Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-amber-600">
                Events
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-amber-600">
                Contact
              </Link>
            </li>
          </ul>
          <div className="text-xs text-neutral-500 space-y-1">
            <p className="font-medium text-neutral-700">JRP: {siteData.programs.JRP}</p>
            <p className="font-medium text-neutral-700">IOP: {siteData.programs.IOP}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-100 mt-8 pt-6 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-2">
        <p>© 2026 {siteData.name}. All rights reserved.</p>
        <p>Gainapathy, Coimbatore, Tamil Nadu</p>
      </div>
    </footer>
  );
}
