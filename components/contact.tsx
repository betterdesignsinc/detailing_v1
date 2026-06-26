"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Check } from "lucide-react"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Contact
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Ready to book? Let&apos;s talk.
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Send us your details and the package you&apos;re interested in.
              We&apos;ll confirm availability and your final quote within one
              business day.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow icon={Phone} label="(276) 791-4---" />
              <ContactRow icon={Mail} label="hello@lawdogdetailing.com" />
              <ContactRow icon={MapPin} label="Serving the greater metro area" />
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-xl font-semibold">Request sent!</h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  Thanks for reaching out. We&apos;ll be in touch shortly to
                  confirm your detailing appointment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
                className="space-y-4"
              >
                <Field label="Full name" id="name">
                  <input
                    id="name"
                    required
                    className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Jordan Smith"
                  />
                </Field>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Email" id="email">
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="you@email.com"
                    />
                  </Field>
                  <Field label="Phone" id="phone">
                    <input
                      id="phone"
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                      placeholder="(555) 000-0000"
                    />
                  </Field>
                </div>
                <Field label="Tell us about your vehicle & service" id="message">
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="2021 Tesla Model 3, interested in a full service detail + ceramic coating..."
                  />
                </Field>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request my appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

function Field({
  label,
  id,
  children,
}: {
  label: string
  id: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium">
        {label}
      </label>
      {children}
    </div>
  )
}
