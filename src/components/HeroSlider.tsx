"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

export interface HeroSlide {
  tagline: string;
  title: string;
  badges: string[];
  subtext: string;
  ctaText: string;
  ctaLink: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tagline: "Learn What No One's Teaching",
    title: "Devstack Engineer",
    badges: ["Project Based Learning", "Expert Mentorship", "Hands on Internship"],
    subtext: "Click to unlock your job-ready future!",
    ctaText: "Grab Your Seat",
    ctaLink: "/courses/devstack-fullstack-devops",
  },
  {
    tagline: "Excel to AI in One Powerful Journey !",
    title: "Data Verse Pro",
    badges: ["Real Time Projects", "Expert Mentorship", "Hands on Internship"],
    subtext: "Click to Unlock Your Job-Ready Future !",
    ctaText: "Enroll Now",
    ctaLink: "/courses/data-verse-pro",
  },
  {
    tagline: "Upgrade Your Skills. Unlock High-Demand Jobs.",
    title: "Data Analytics",
    badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click to Kickstart your Data Career !",
    ctaText: "Begin Your Journey",
    ctaLink: "/courses/data-analytics",
  },
  {
    tagline: "Turn Clicks into Careers",
    title: "Software Development",
    badges: ["Project Based Learning", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click Closer to Your Dream Career !",
    ctaText: "Get Started Today",
    ctaLink: "/courses/mern-stack",
  },
  {
    tagline: "Where Imagination Meets Innovation",
    title: "UI/UX & Graphic Design",
    badges: ["Hands On Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "The Creative World needs you — Tap to Begin",
    ctaText: "Register Now",
    ctaLink: "/courses/ui-ux-design",
  },
  {
    tagline: "Become the Digital Expert Every Company Needs",
    title: "Digital Marketing",
    badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click Closer to Your Dream Career !",
    ctaText: "Join Now",
    ctaLink: "/courses/digital-marketing",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section
      aria-label="Academy Programs Carousel"
      className="relative w-full bg-white border-b border-gray-100 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="relative min-h-[300px] sm:min-h-[260px] flex items-center">
          {heroSlides.map((slide, index) => {
            const isActive = index === current;
            return (
              <div
                key={slide.title}
                className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-out ${
                  isActive
                    ? "opacity-100 translate-x-0 pointer-events-auto"
                    : "opacity-0 translate-x-8 pointer-events-none"
                }`}
                aria-hidden={!isActive}
              >
                {/* Tagline */}
                <p className="text-sm font-semibold tracking-wide text-neutral-600 sm:text-base">
                  {slide.tagline}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                  {slide.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full border border-gray-200 bg-neutral-50 px-3.5 py-1 text-xs font-semibold text-neutral-800 shadow-2xs sm:text-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Subtext */}
                <p className="mt-4 text-sm font-medium italic text-amber-700 sm:text-base">
                  {slide.subtext}
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-2.5 text-sm font-bold text-white shadow-xs hover:bg-amber-700 active:scale-98 transition duration-150"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="mt-10 flex items-center justify-center border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  index === current
                    ? "w-8 bg-amber-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
