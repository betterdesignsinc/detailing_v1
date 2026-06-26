import Image from "next/image"
import { Star, ShieldCheck } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.png"
          alt="Freshly detailed luxury car with glossy finish"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-28 md:py-40">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Premium mobile & studio detailing
          </span>
          <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Showroom shine,
            <span className="block text-primary">delivered to your door.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            LAWDOG DETAILING brings precision care to cars, trucks, boats, RVs and
            powersports. Get an instant, transparent quote in seconds, no calls
            required.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Build your quote
            </a>
            <a
              href="#packages"
              className="rounded-lg border border-border bg-card/50 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-secondary"
            >
              View packages
            </a>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-primary text-primary"
                />
              ))}
            </div>
            <span>Rated 4.9/5 by 1,200+ local customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
