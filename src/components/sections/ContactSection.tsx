"use client";

import { useState } from "react";
import { siteData, coursesData } from "@/data/academyData";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: coursesData[0]?.h1 || "",
    mode: "Classroom (Ganapathy campus)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero Header */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-gray-100">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
            Admissions &amp; Campus Location
          </span>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl leading-tight">
            Contact Vinsup Skill Academy
          </h1>
          <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
            Have questions about course fees, batch schedules, or placement assistance? Visit our Ganapathy campus in Coimbatore or submit an inquiry below to schedule a free counseling call.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Campus Info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Inquiry Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border border-gray-200 bg-white shadow-2xs">
            <h2 className="text-xl font-bold text-neutral-900 mb-1">
              Book a Free Demo Class or Counseling Session
            </h2>
            <p className="text-xs text-neutral-600 mb-6">
              Our career mentors will call you to walk you through syllabus details, batch timings, and placement terms.
            </p>

            {submitted ? (
              <div className="p-6 rounded-xl bg-amber-50 border border-amber-200 text-center">
                <span className="text-3xl">✓</span>
                <h3 className="text-lg font-bold text-neutral-900 mt-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-neutral-700 mt-1">
                  Your inquiry has been received. Our senior academic counselor will reach out to you at{" "}
                  <span className="font-semibold text-neutral-900">{formData.phone}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Arun Kumar"
                    className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="arun@example.com"
                      className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="course" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Course of Interest
                    </label>
                    <select
                      id="course"
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden bg-white"
                    >
                      {coursesData.map((c) => (
                        <option key={c.slug} value={c.h1}>
                          {c.h1.split(" course in Coimbatore")[0]}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mode" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                      Training Mode
                    </label>
                    <select
                      id="mode"
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full rounded-md border border-gray-300 px-3 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden bg-white"
                    >
                      <option value="Classroom (Ganapathy campus)">
                        Classroom (Ganapathy Campus, Coimbatore)
                      </option>
                      <option value="Online">Live Interactive Online</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                    Your Questions / Background
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your educational background or questions regarding batches..."
                    className="w-full rounded-md border border-gray-300 px-3.5 py-2.5 text-sm text-neutral-900 focus:border-amber-600 focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-amber-600 py-3 text-sm font-bold text-white shadow-xs hover:bg-amber-700 transition cursor-pointer"
                >
                  Submit Inquiry &amp; Book Free Demo
                </button>
              </form>
            )}
          </div>

          {/* Campus Location & NAP */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl border border-gray-200 bg-neutral-50/50">
              <h2 className="text-lg font-bold text-neutral-900 mb-4">
                Campus Contact (NAP)
              </h2>

              <div className="space-y-4 text-sm text-neutral-700">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Academy Name
                  </p>
                  <p className="font-bold text-neutral-900 mt-0.5">
                    {siteData.name}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Physical Address
                  </p>
                  <p className="font-medium text-neutral-800 leading-relaxed mt-0.5">
                    {siteData.address}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Direct Phone / WhatsApp
                  </p>
                  <p className="mt-0.5">
                    <a
                      href={`tel:${siteData.phone}`}
                      className="font-bold text-amber-600 hover:underline"
                    >
                      {siteData.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Operating Hours
                  </p>
                  <p className="font-medium text-neutral-800 mt-0.5">
                    Monday to Saturday: 9:00 AM – 7:00 PM (IST)
                  </p>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Geographic Coordinates
                  </p>
                  <p className="text-xs text-neutral-600 font-mono mt-0.5">
                    Lat: {siteData.geo.lat}, Lng: {siteData.geo.lng} ({siteData.geo.placename}, {siteData.geo.region})
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col gap-2.5">
                <a
                  href={`https://maps.google.com/?q=${siteData.geo.lat},${siteData.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white py-2.5 text-xs font-bold text-neutral-800 shadow-2xs hover:bg-neutral-100 transition"
                >
                  📍 Open Location in Google Maps
                </a>
                <a
                  href={`https://wa.me/${siteData.phone.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-green-600 py-2.5 text-xs font-bold text-white shadow-2xs hover:bg-green-700 transition"
                >
                  💬 Chat on WhatsApp with Counselor
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
