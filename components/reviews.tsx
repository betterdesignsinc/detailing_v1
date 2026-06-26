import { Star } from "lucide-react"

const REVIEWS = [
  {
    name: "Marcus T.",
    vehicle: "Audi A5 — Full Service Detail",
    text: "Car looks better than the day I bought it. The interior smelled brand new and the paint had a mirror finish. Booking the quote took under a minute.",
  },
  {
    name: "Dana R.",
    vehicle: "Ford F-150 — Ceramic Coating",
    text: "Worth every penny. Water just rolls right off now and washing it is effortless. Professional, on time, and meticulous with the details.",
  },
  {
    name: "Priya S.",
    vehicle: "Sea Ray — Large Boat Detail",
    text: "They handled my boat with so much care. The oxidation on the hull is completely gone. I'll be a customer for years.",
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Reviews
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Trusted by drivers and owners
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                {`"${r.text}"`}
              </blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold">{r.name}</p>
                <p className="text-sm text-muted-foreground">{r.vehicle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
