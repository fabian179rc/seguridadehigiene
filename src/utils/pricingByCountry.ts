export interface PricingInfo {
  offerPrice: string;
  originalPrice: string;
}

const DEFAULT_PRICING: PricingInfo = {
  offerPrice: "$29.990 ARS",
  originalPrice: "$137.990 ARS",
};

const PRICING_BY_REGION: Record<string, PricingInfo> = {
  CO: {
    offerPrice: "$69.900 COP",
    originalPrice: "$359.000 COP",
  },
  MX: {
    offerPrice: "$349 MXN",
    originalPrice: "$1.799 MXN",
  },
  PE: {
    offerPrice: "S/ 69 PEN",
    originalPrice: "S/ 359 PEN",
  },
  AR: {
    offerPrice: "$29.990 ARS",
    originalPrice: "$137.990 ARS",
  },
};

export function getPricingForCountry(): PricingInfo {
  if (typeof navigator === "undefined") return DEFAULT_PRICING;
  const locale = navigator.languages?.[0] ?? navigator.language;
  const region = locale?.split("-")[1]?.toUpperCase();
  if (!region) return DEFAULT_PRICING;
  return PRICING_BY_REGION[region] ?? DEFAULT_PRICING;
}
