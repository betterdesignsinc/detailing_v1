"use client"

import { useMemo, useState } from "react"
import { Check, Car, Sparkles, Plus, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  VEHICLE_TYPES,
  SERVICES,
  ADD_ONS,
  calculateQuote,
} from "@/lib/pricing"

const STEPS = [
  { id: 1, label: "Vehicle", icon: Car },
  { id: 2, label: "Service", icon: Sparkles },
  { id: 3, label: "Add-ons", icon: Plus },
]

export function QuoteCalculator() {
  const [step, setStep] = useState(1)
  const [vehicleId, setVehicleId] = useState<string | null>(null)
  const [serviceId, setServiceId] = useState<string | null>(null)
  const [addOnIds, setAddOnIds] = useState<string[]>([])

  const total = useMemo(
    () => calculateQuote(vehicleId, serviceId, addOnIds),
    [vehicleId, serviceId, addOnIds],
  )

  const selectedVehicle = VEHICLE_TYPES.find((v) => v.id === vehicleId)
  const selectedService = SERVICES.find((s) => s.id === serviceId)

  function toggleAddOn(id: string) {
    setAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    )
  }

  function reset() {
    setStep(1)
    setVehicleId(null)
    setServiceId(null)
    setAddOnIds([])
  }

  return (
    <section id="quote" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Instant Estimate from Lawdog Detailing
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Build your detailing quote
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Pick your vehicle, choose a service, and stack on extras. Your price
            updates the moment you make a selection.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* Steps panel */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
            {/* Step indicator */}
            <div className="mb-8 flex items-center gap-2">
              {STEPS.map((s, i) => {
                const Icon = s.icon
                const active = step === s.id
                const done = step > s.id
                return (
                  <div key={s.id} className="flex flex-1 items-center gap-2">
                    <button
                      onClick={() => setStep(s.id)}
                      className={cn(
                        "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary text-primary-foreground"
                          : done
                            ? "bg-secondary text-foreground"
                            : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-6 w-6 items-center justify-center rounded-full text-xs",
                          active
                            ? "bg-primary-foreground/20"
                            : done
                              ? "bg-primary text-primary-foreground"
                              : "border border-border",
                        )}
                      >
                        {done ? <Check className="h-3.5 w-3.5" /> : s.id}
                      </span>
                      <span className="hidden sm:inline">{s.label}</span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className="h-px flex-1 bg-border" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Step 1 */}
            {step === 1 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Select your vehicle type
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {VEHICLE_TYPES.map((v) => (
                    <SelectCard
                      key={v.id}
                      selected={vehicleId === v.id}
                      onClick={() => setVehicleId(v.id)}
                      title={v.name}
                      subtitle={v.category}
                    />
                  ))}
                </div>
                <StepNav
                  onNext={() => setStep(2)}
                  nextDisabled={!vehicleId}
                />
              </div>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold">Choose a service</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {SERVICES.map((s) => {
                    const price = selectedVehicle
                      ? Math.round(s.basePrice * selectedVehicle.multiplier)
                      : s.basePrice
                    return (
                      <button
                        key={s.id}
                        onClick={() => setServiceId(s.id)}
                        className={cn(
                          "rounded-xl border p-4 text-left transition-colors",
                          serviceId === s.id
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50",
                        )}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold">{s.name}</span>
                          <span className="text-sm font-bold text-primary">
                            ${price}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {s.description}
                        </p>
                      </button>
                    )
                  })}
                </div>
                <StepNav
                  onBack={() => setStep(1)}
                  onNext={() => setStep(3)}
                  nextDisabled={!serviceId}
                />
              </div>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <div>
                <h3 className="mb-4 text-lg font-semibold">
                  Add optional extras
                </h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {ADD_ONS.map((a) => {
                    const checked = addOnIds.includes(a.id)
                    return (
                      <button
                        key={a.id}
                        onClick={() => toggleAddOn(a.id)}
                        className={cn(
                          "flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-colors",
                          checked
                            ? "border-primary bg-primary/10"
                            : "border-border bg-background hover:border-primary/50",
                        )}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={cn(
                              "flex h-5 w-5 items-center justify-center rounded-md border",
                              checked
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border",
                            )}
                          >
                            {checked && <Check className="h-3.5 w-3.5" />}
                          </span>
                          <span className="font-medium">{a.name}</span>
                        </span>
                        <span className="text-sm font-semibold text-primary">
                          +${a.price}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <StepNav onBack={() => setStep(2)} />
              </div>
            )}
          </div>

          {/* Estimate card */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-primary/40 bg-card">
              <div className="border-b border-border bg-primary/10 px-6 py-4">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Estimated Total
                </p>
                <p className="mt-1 text-4xl font-bold tracking-tight">
                  ${total.toLocaleString()}
                </p>
              </div>
              <div className="space-y-4 px-6 py-5 text-sm">
                <SummaryRow
                  label="Vehicle"
                  value={selectedVehicle?.name ?? "Not selected"}
                  muted={!selectedVehicle}
                />
                <SummaryRow
                  label="Service"
                  value={selectedService?.name ?? "Not selected"}
                  muted={!selectedService}
                />
                <div>
                  <p className="text-muted-foreground">Add-ons</p>
                  {addOnIds.length === 0 ? (
                    <p className="mt-1 text-muted-foreground/70">None</p>
                  ) : (
                    <ul className="mt-1 space-y-1">
                      {addOnIds.map((id) => {
                        const a = ADD_ONS.find((x) => x.id === id)!
                        return (
                          <li
                            key={id}
                            className="flex items-center justify-between"
                          >
                            <span>{a.name}</span>
                            <span className="text-muted-foreground">
                              +${a.price}
                            </span>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </div>
              </div>
              <div className="space-y-3 border-t border-border px-6 py-5">
                <a
                  href="#contact"
                  className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Book this package
                </a>
                <button
                  onClick={reset}
                  className="flex w-full items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  Reset quote
                </button>
              </div>
            </div>
            <p className="mt-3 px-2 text-xs leading-relaxed text-muted-foreground">
              Final pricing confirmed after inspection. Estimates are for
              reference and may vary by condition.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}

function SelectCard({
  selected,
  onClick,
  title,
  subtitle,
}: {
  selected: boolean
  onClick: () => void
  title: string
  subtitle: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-xl border p-4 text-left transition-colors",
        selected
          ? "border-primary bg-primary/10"
          : "border-border bg-background hover:border-primary/50",
      )}
    >
      <span className="block text-sm font-semibold leading-snug">{title}</span>
      <span className="mt-1 block text-xs uppercase tracking-wider text-muted-foreground">
        {subtitle}
      </span>
    </button>
  )
}

function SummaryRow({
  label,
  value,
  muted,
}: {
  label: string
  value: string
  muted?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("font-medium", muted && "text-muted-foreground/70")}>
        {value}
      </span>
    </div>
  )
}

function StepNav({
  onBack,
  onNext,
  nextDisabled,
}: {
  onBack?: () => void
  onNext?: () => void
  nextDisabled?: boolean
}) {
  return (
    <div className="mt-6 flex items-center justify-between gap-3">
      {onBack ? (
        <button
          onClick={onBack}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Back
        </button>
      ) : (
        <span />
      )}
      {onNext && (
        <button
          onClick={onNext}
          disabled={nextDisabled}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue
        </button>
      )}
    </div>
  )
}
