"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-neutral-900 hover:text-neutral-700"
        >
          Visup Skill Academy
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-7"
        >
          {navItems.map((item) => {
            const active = isActive(item.href);
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
                  {item.hasDropdown && (
                    <span className="text-xs text-neutral-400" aria-hidden="true">
                      ▼
                    </span>
                  )}
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
                {item.hasDropdown && (
                  <span className="text-xs text-neutral-400">▼</span>
                )}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
