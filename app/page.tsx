import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { QuoteCalculator } from "@/components/quote-calculator"
import { Packages } from "@/components/packages"
import { Gallery } from "@/components/gallery"
import { Reviews } from "@/components/reviews"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <Hero />
      <QuoteCalculator />
      <Packages />
      <Gallery />
      <Reviews />
      <Contact />
      <SiteFooter />
    </main>
  )
}
