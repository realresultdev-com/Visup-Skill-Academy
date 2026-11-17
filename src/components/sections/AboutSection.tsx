import { siteData } from "@/data/academyData";

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">
          {siteData.tagline}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          About {siteData.name}
        </h1>
        <p className="mt-4 text-lg text-neutral-700 leading-relaxed">
          {siteData.description}
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <h2 className="text-sm font-bold text-neutral-900">Students Trained</h2>
            <p className="text-2xl font-extrabold text-amber-600 mt-1">{siteData.studentsTrained}</p>
          </div>
          <div className="p-5 rounded-lg border border-gray-200 bg-white">
            <h2 className="text-sm font-bold text-neutral-900">Campus Location</h2>
            <p className="text-base font-semibold text-neutral-800 mt-1">Ganapathy, Coimbatore</p>
          </div>
        </div>
      </div>
    </section>
  );
}
