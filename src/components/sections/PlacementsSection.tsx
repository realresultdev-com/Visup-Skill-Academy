import { siteData } from "@/data/academyData";

export default function PlacementsSection() {
  return (
    <section id="placements" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">
          Career & Placement Support
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Placements at {siteData.name}
        </h1>
        <p className="mt-2 text-base text-neutral-600">
          Career assistance with dedicated placement readiness and guaranteed interview opportunities.
        </p>

        <div className="mt-8 space-y-4">
          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <h2 className="text-lg font-bold text-neutral-900">JRP (Job Readiness Program)</h2>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {siteData.programs.JRP}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-gray-200 bg-white">
            <h2 className="text-lg font-bold text-neutral-900">IOP (Interview Opportunity Program)</h2>
            <p className="mt-2 text-sm text-neutral-700 leading-relaxed">
              {siteData.programs.IOP}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
