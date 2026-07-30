export interface PricingInfo {
  offerPrice: string;
  originalPrice: string;
  supportText: string;
}

const DEFAULT_PRICING: PricingInfo = {
  offerPrice: "$19 USD",
  originalPrice: "$97 USD",
  supportText: "Pagas en tu moneda local",
};

const PRICING_BY_REGION: Record<string, PricingInfo> = {
  CO: {
    offerPrice: "$69.900 COP",
    originalPrice: "$359.000 COP",
    supportText: "Pagas en tu moneda local",
  },
  MX: {
    offerPrice: "$349 MXN",
    originalPrice: "$1.799 MXN",
    supportText: "Pagas en tu moneda local",
  },
  PE: {
    offerPrice: "S/ 69 PEN",
    originalPrice: "S/ 359 PEN",
    supportText: "Pagas en tu moneda local",
  },
  AR: {
    offerPrice: "$29.990 ARS",
    originalPrice: "$149.990 ARS",
    supportText: "Pagas en tu moneda local",
  },
};

export function getPricingForCountry(): PricingInfo {
  if (typeof navigator === "undefined") return DEFAULT_PRICING;
  const locale = navigator.languages?.[0] ?? navigator.language;
  const region = locale?.split("-")[1]?.toUpperCase();
  if (!region) return DEFAULT_PRICING;
  return PRICING_BY_REGION[region] ?? DEFAULT_PRICING;
}
