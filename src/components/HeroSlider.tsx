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
  gradient: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tagline: "Learn What No One's Teaching",
    title: "Devstack Engineer",
    badges: ["Project Based Learning", "Expert Mentorship", "Hands on Internship"],
    subtext: "Click to unlock your job-ready future!",
    ctaText: "Grab Your Seat",
    ctaLink: "/courses/devstack-engineer",
    gradient: "from-[#800a0a] via-[#520505] to-[#1f0101]", // Deep Crimson Red
  },
  {
    tagline: "Excel to AI in One Powerful Journey !",
    title: "Data Verse Pro",
    badges: ["Real Time Projects", "Expert Mentorship", "Hands on Internship"],
    subtext: "Click to Unlock Your Job-Ready Future !",
    ctaText: "Enroll Now",
    ctaLink: "/courses/data-verse-pro",
    gradient: "from-[#082878] via-[#061c5c] to-[#020b2e]", // Deep Royal Cosmic Blue
  },
  {
    tagline: "Upgrade Your Skills. Unlock High-Demand Jobs.",
    title: "Data Analytics",
    badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click to Kickstart your Data Career !",
    ctaText: "Begin Your Journey",
    ctaLink: "/courses/data-analytics",
    gradient: "from-[#853b05] via-[#4d162f] to-[#1a0833]", // Amber to Deep Violet Sunset
  },
  {
    tagline: "Turn Clicks into Careers",
    title: "Software Development",
    badges: ["Project Based Learning", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click Closer to Your Dream Career !",
    ctaText: "Get Started Today",
    ctaLink: "/courses/software-development",
    gradient: "from-[#054d2b] via-[#03331b] to-[#011c0e]", // Deep Emerald Forest Green
  },
  {
    tagline: "Where Imagination Meets Innovation",
    title: "UI/UX & Graphic Design",
    badges: ["Hands On Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "The Creative World needs you — Tap to Begin",
    ctaText: "Register Now",
    ctaLink: "/courses/ui-ux-design",
    gradient: "from-[#4c0f82] via-[#300557] to-[#140129]", // Deep Royal Violet Purple
  },
  {
    tagline: "Become the Digital Expert Every Company Needs",
    title: "Digital Marketing",
    badges: ["Hands on Training", "Expert Mentorship", "Live Project Internship"],
    subtext: "One Click Closer to Your Dream Career !",
    ctaText: "Join Now",
    ctaLink: "/courses/digital-marketing",
    gradient: "from-[#6e0f3e] via-[#460652] to-[#1c022b]", // Warm Amber-Rose to Twilight Magenta
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
      className="relative w-full overflow-hidden text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Gradient Layers with Smooth Cross-Fade */}
      {heroSlides.map((slide, index) => (
        <div
          key={`bg-${slide.title}`}
          className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-opacity duration-700 ease-in-out pointer-events-none ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Subtle Ambient Light Flare & Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.18),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.35),transparent_70%)]" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
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
                <p className="text-sm sm:text-base font-medium tracking-wide text-white/90 drop-shadow-xs">
                  {slide.tagline}
                </p>

                {/* Title */}
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-sm">
                  {slide.title}
                </h2>

                {/* Badges */}
                <div className="mt-4 flex flex-wrap gap-2.5 sm:gap-3">
                  {slide.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full bg-white text-neutral-900 font-semibold px-4 py-1.5 text-xs sm:text-sm shadow-md"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Subtext */}
                <p className="mt-4 text-sm sm:text-base font-semibold italic text-amber-300 drop-shadow-xs">
                  {slide.subtext}
                </p>

                {/* CTA Button */}
                <div className="mt-6">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center rounded-full border-2 border-white bg-white/10 px-8 py-2.5 text-sm font-bold text-white shadow-lg backdrop-blur-xs hover:bg-white hover:text-neutral-950 active:scale-98 transition duration-200"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Indicators */}
        <div className="mt-10 flex items-center justify-center border-t border-white/15 pt-5">
          <div className="flex items-center gap-2">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                className={`h-2 transition-all rounded-full cursor-pointer ${
                  index === current
                    ? "w-8 bg-amber-400 shadow-md"
                    : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
