"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { coursesData } from "@/data/academyData";

interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Courses", href: "/courses", hasDropdown: true },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Placements", href: "/placements" },
  { label: "Play Book", href: "/play-book" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setCoursesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900 hover:text-neutral-700"
        >
          Vinsup Skill Academy
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div
                  key={item.label}
                  ref={dropdownRef}
                  className="relative py-1"
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <button
                    type="button"
                    onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                    aria-expanded={coursesDropdownOpen}
                    className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                      active
                        ? "text-neutral-950 font-bold"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`}
                  >
                    <Link href="/courses">{item.label}</Link>
                    <span className="text-xs text-neutral-400" aria-hidden="true">
                      ▼
                    </span>
                  </button>
                  {active && (
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-amber-500 rounded-full" />
                  )}

                  {/* Dropdown Menu */}
                  {coursesDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-80 rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
                      <Link
                        href="/courses"
                        onClick={() => setCoursesDropdownOpen(false)}
                        className="block rounded-md px-3 py-2 text-xs font-bold text-amber-600 hover:bg-amber-50 uppercase tracking-wider"
                      >
                        All Courses
                      </Link>
                      <div className="my-1 border-t border-gray-100" />
                      {coursesData.map((course) => (
                        <Link
                          key={course.slug}
                          href={`/courses/${course.slug}`}
                          onClick={() => setCoursesDropdownOpen(false)}
                          className="block rounded-md px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-950"
                        >
                          {course.h1.split(" course in Coimbatore")[0]}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div key={item.label} className="relative py-1">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? "text-neutral-950 font-bold"
                      : "text-neutral-600 hover:text-neutral-900"
                  }`}
                >
                  <span>{item.label}</span>
                </Link>
                {active && (
                  <span className="absolute bottom-0 left-0 h-0.5 w-full bg-amber-500 rounded-full" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-1"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);

            if (item.hasDropdown) {
              return (
                <div key={item.label} className="space-y-1">
                  <Link
                    href="/courses"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold ${
                      active
                        ? "bg-amber-50 text-amber-900"
                        : "text-neutral-700 hover:bg-neutral-50"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                  <div className="pl-4 space-y-1">
                    {coursesData.map((course) => (
                      <Link
                        key={course.slug}
                        href={`/courses/${course.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-1.5 text-sm text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                      >
                        {course.h1.split(" course in Coimbatore")[0]}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between rounded-md px-3 py-2 text-base font-semibold ${
                  active
                    ? "bg-amber-50 text-amber-900"
                    : "text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
                }`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
