import Image from "next/image"

const IMAGES = [
  { src: "/images/gallery-1.png", alt: "Ceramic coating being applied to a car panel", label: "Ceramic Coating" },
  { src: "/images/gallery-2.png", alt: "Freshly detailed leather car interior", label: "Interior Detail" },
  { src: "/images/gallery-3.png", alt: "Foam wash on an SUV exterior", label: "Exterior Wash" },
  { src: "/images/gallery-4.png", alt: "Machine polishing glossy car paint", label: "Paint Correction" },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Gallery
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            The results speak for themselves
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMAGES.map((img, i) => (
            <div
              key={img.src}
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <div className={i === 0 ? "aspect-square sm:aspect-auto sm:h-full" : "aspect-[4/3]"}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full bg-card/80 px-3 py-1 text-xs font-semibold backdrop-blur">
                {img.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
