export type VehicleType = {
  id: string
  name: string
  // multiplier applied to base service price
  multiplier: number
  category: "Automotive" | "Powersports" | "Marine" | "RV"
}

export type Service = {
  id: string
  name: string
  description: string
  // base price (for a Coupe / Sedan) before vehicle multiplier
  basePrice: number
}

export type AddOn = {
  id: string
  name: string
  price: number
}

export const VEHICLE_TYPES: VehicleType[] = [
  { id: "coupe-sedan", name: "Coupe / Sedan", multiplier: 1, category: "Automotive" },
  { id: "suv-pickup", name: "SUV / Pickup Truck", multiplier: 1.3, category: "Automotive" },
  { id: "large-truck-van", name: "Large Truck / Van", multiplier: 1.6, category: "Automotive" },
  { id: "utv-atv-sxs", name: "UTV / ATV / SXS", multiplier: 0.9, category: "Powersports" },
  { id: "small-boat", name: "Small Boat", multiplier: 1.4, category: "Marine" },
  { id: "medium-boat", name: "Medium Boat", multiplier: 1.9, category: "Marine" },
  { id: "large-boat", name: "Large Boat", multiplier: 2.6, category: "Marine" },
  { id: "small-rv", name: "Small RV", multiplier: 2, category: "RV" },
  { id: "medium-rv", name: "Medium RV", multiplier: 2.6, category: "RV" },
  { id: "large-rv", name: "Large RV", multiplier: 3.4, category: "RV" },
]

export const SERVICES: Service[] = [
  {
    id: "exterior",
    name: "Exterior Detail",
    description: "Hand wash, wheels, tires, decontamination & spray sealant.",
    basePrice: 150,
  },
  {
    id: "interior",
    name: "Interior Detail",
    description: "Deep vacuum, shampoo, surfaces wiped & protected.",
    basePrice: 180,
  },
  {
    id: "full",
    name: "Full Service Detail",
    description: "Complete interior and exterior restoration package.",
    basePrice: 300,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    description: "Multi-year paint protection with deep gloss.",
    basePrice: 700,
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    description: "Multi-stage polish to remove swirls and scratches.",
    basePrice: 500,
  },
]

export const ADD_ONS: AddOn[] = [
  { id: "headlight", name: "Headlight Restoration", price: 40 },
  { id: "vinyl", name: "Vinyl / Rubber / Plastic Restore", price: 30 },
  { id: "steam", name: "Steam Cleaning", price: 60 },
  { id: "leather", name: "Leather Conditioner", price: 40 },
  { id: "odor", name: "Odor / Stain Removal", price: 70 },
]

export function calculateQuote(
  vehicleId: string | null,
  serviceId: string | null,
  addOnIds: string[],
): number {
  const vehicle = VEHICLE_TYPES.find((v) => v.id === vehicleId)
  const service = SERVICES.find((s) => s.id === serviceId)

  let total = 0
  if (vehicle && service) {
    total += Math.round(service.basePrice * vehicle.multiplier)
  }
  for (const id of addOnIds) {
    const addOn = ADD_ONS.find((a) => a.id === id)
    if (addOn) total += addOn.price
  }
  return total
}
