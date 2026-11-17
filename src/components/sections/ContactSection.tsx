import { siteData } from "@/data/academyData";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-amber-600 mb-1">
          Get in Touch
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Contact {siteData.name}
        </h1>
        <p className="mt-2 text-base text-neutral-600">
          Visit our Ganapathy campus in Coimbatore or reach out for course admissions and counseling.
        </p>

        <div className="mt-8 space-y-6 border border-gray-200 rounded-xl p-6 sm:p-8 bg-white">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
              Campus Address
            </h2>
            <p className="mt-1 text-base text-neutral-800 font-medium leading-relaxed">
              {siteData.address}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Phone / WhatsApp
              </h2>
              <p className="mt-1">
                <a
                  href={`tel:${siteData.phone}`}
                  className="text-base font-semibold text-amber-600 hover:underline"
                >
                  {siteData.phone}
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                Training Modes
              </h2>
              <p className="mt-1 text-base text-neutral-800 font-medium">
                {siteData.deliveryModes.join(", ")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
