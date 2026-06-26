import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

const PACKAGES = [
  {
    name: "Express Refresh",
    price: "150",
    blurb: "A quick exterior reset for the daily driver.",
    features: [
      "Hand wash & dry",
      "Wheels & tires cleaned",
      "Spray sealant protection",
      "Glass & exterior trim",
    ],
    featured: false,
  },
  {
    name: "Full Service Detail",
    price: "300",
    blurb: "Our most popular complete interior & exterior package.",
    features: [
      "Everything in Express Refresh",
      "Deep interior vacuum & shampoo",
      "Surfaces cleaned & protected",
      "Paint decontamination",
      "Tire dressing & finish",
    ],
    featured: true,
  },
  {
    name: "Ceramic Protection",
    price: "700",
    blurb: "Long-term gloss and protection for your paint.",
    features: [
      "Multi-stage paint prep",
      "Ceramic coating application",
      "Multi-year durability",
      "Hydrophobic finish",
      "Maintenance guidance",
    ],
    featured: false,
  },
]

export function Packages() {
  return (
    <section id="packages" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Packages
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Detailing built around your ride
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Starting prices for coupes & sedans. Use the calculator for an exact
            estimate on any vehicle.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-6",
                pkg.featured
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card",
              )}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold">{pkg.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {pkg.blurb}
              </p>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">from</span>
                <span className="text-3xl font-bold tracking-tight">
                  ${pkg.price}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#quote"
                className={cn(
                  "mt-6 rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-90",
                  pkg.featured
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-secondary text-foreground",
                )}
              >
                Get this package
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
