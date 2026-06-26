import { Droplets } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
        <a href="#" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Droplets className="h-4.5 w-4.5" />
          </span>
          <span>
            LAWDOG<span className="text-primary">DETAILING</span>
          </span>
        </a>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <a href="#packages" className="transition-colors hover:text-foreground">Packages</a>
          <a href="#gallery" className="transition-colors hover:text-foreground">Gallery</a>
          <a href="#reviews" className="transition-colors hover:text-foreground">Reviews</a>
          <a href="#contact" className="transition-colors hover:text-foreground">Contact</a>
        </nav>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} LAWDOG DETAILING
        </p>
      </div>
    </footer>
  )
}
