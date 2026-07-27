import React, { useEffect, createElement } from "react";
import { MotionConfig } from "framer-motion";
import { Landing } from "./pages/Landing";
import { useScreenInit } from "./useScreenInit";
const META_PIXEL_ID = "1656160899010195";
const PAGE_TITLE =
  "Mega Pack Higiene y Seguridad Blindada — Sistema Completo para Profesionales de Higiene y Seguridad, SST y Seguridad Ocupacional";
const PAGE_DESC =
  "Protocolos, informes, matrices, formularios, checklists, guías y documentos editables para usar desde el primer día en visitas, auditorías, relevamientos, informes y seguimiento de clientes.";
const HERO_IMAGE = `${import.meta.env.BASE_URL}megapack-mockup.webp`;
const HERO_IMAGE_MOBILE = `${import.meta.env.BASE_URL}megapack-mockup-mobile.webp`;

const SITE_URL = "https://seguridadehigiene.tupuntodigital.shop";
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function addLink(
  rel: string,
  href: string,
  attrs: Record<string, string> = {},
) {
  const selector = `link[rel="${rel}"][href="${href}"]`;
  if (document.head.querySelector(selector)) return;
  const el = document.createElement("link");
  el.rel = rel;
  el.href = href;
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  document.head.appendChild(el);
}
export function App() {
  useScreenInit();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = "es-419";
    document.title = PAGE_TITLE;
    addLink("preconnect", "/cdn.magicpatterns.com", {
      crossorigin: "",
    });
    addLink("preconnect", "https://fonts.googleapis.com");
    addLink("preconnect", "https://fonts.gstatic.com", {
      crossorigin: "",
    });
    addLink("preload", HERO_IMAGE_MOBILE, {
      as: "image",
      fetchpriority: "high",
      media: "(max-width: 767px)",
    });
    addLink("preload", HERO_IMAGE, {
      as: "image",
      fetchpriority: "high",
      media: "(min-width: 768px)",
    });
    addLink("canonical", SITE_URL);
    setMeta("name", "description", PAGE_DESC);
    setMeta(
      "name",
      "viewport",
      "width=device-width, initial-scale=1, viewport-fit=cover",
    );
    setMeta("name", "theme-color", "#F9F8F6");
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", PAGE_TITLE);
    setMeta("property", "og:description", PAGE_DESC);
    setMeta("property", "og:locale", "es_419");
    setMeta("property", "og:image", HERO_IMAGE);
    setMeta("property", "og:url", SITE_URL);
    setMeta("property", "og:site_name", "Mega Pack Higiene y Seguridad Blindada");
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:image", HERO_IMAGE);
    setMeta("name", "twitter:title", PAGE_TITLE);
    setMeta("name", "twitter:description", PAGE_DESC);
    const ldId = "ld-product-schema";
    if (!document.getElementById(ldId)) {
      const ld = document.createElement("script");
      ld.id = ldId;
      ld.type = "application/ld+json";
      ld.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Mega Pack Higiene y Seguridad Blindada",
        description: PAGE_DESC,
        image: HERO_IMAGE,
        brand: {
          "@type": "Brand",
          name: "Mega Pack Higiene y Seguridad Blindada",
        },
        offers: {
          "@type": "Offer",
          price: "29",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: "https://mega-pack-higiene-y-seguridad-blindada.impultienda.ar/checkout",
        },
      });
      document.head.appendChild(ld);
    }
    const faqId = "ld-faq-schema";
    if (!document.getElementById(faqId)) {
      const faq = document.createElement("script");
      faq.id = faqId;
      faq.type = "application/ld+json";
      faq.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            q: "¿Es un producto físico o digital?",
            a: "Es un producto 100% digital. Recibirás el acceso al material después de la compra para descargarlo y usarlo desde tu computadora, tablet o teléfono.",
          },
          {
            q: "¿Sirve para cualquier país de Latinoamérica?",
            a: "Sí. El contenido está diseñado en términos generales y debe ser adaptado por cada usuario según la normativa vigente de su país, tipo de empresa y actividad.",
          },
          {
            q: "¿Necesito ser experto o tener documentos propios para usarlo?",
            a: "No. El sistema está pensado para que puedas empezar a usarlo desde el primer día, tanto si estás comenzando como si ya tienes experiencia y quieres ordenar tu gestión.",
          },
          {
            q: "¿Cuándo recibo el acceso?",
            a: "El acceso es inmediato. Tras completar la compra recibirás los datos para acceder al material.",
          },
          {
            q: "¿El precio es en dólares?",
            a: "Sí, el precio está en USD. Al momento del pago puedes ver el equivalente en tu moneda local según el método de pago disponible en tu país.",
          },
          {
            q: "¿Reemplaza la normativa local o incluye asesoría personalizada?",
            a: "No. El Mega Pack es una herramienta de organización y documentación profesional. No reemplaza la normativa vigente de cada país ni constituye asesoramiento legal, técnico o laboral.",
          },
        ].map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      });
      document.head.appendChild(faq);
    }
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined")
      return;
    // Solo se carga el Meta Pixel real (3505657626270665).
    if (!META_PIXEL_ID) return;
    const loadPixel = () => {
      const w = window as any;
      if (w.fbq) {
        w.fbq("track", "PageView");
        return;
      }
      const n: any = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      w.fbq = n;
      if (!w._fbq) w._fbq = n;
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://connect.facebook.net/en_US/fbevents.js";
      const target = document.head || document.body || document.documentElement;
      target.appendChild(script);
      w.fbq("init", META_PIXEL_ID);
      w.fbq("track", "PageView");
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.alt = "";
      img.src = `https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`;
      noscript.appendChild(img);
      target.appendChild(noscript);
    };
    const ric = (window as any).requestIdleCallback as
      | ((
          cb: () => void,
          opts?: {
            timeout: number;
          },
        ) => number)
      | undefined;
    if (ric) {
      ric(loadPixel, {
        timeout: 4000,
      });
    } else {
      const t = setTimeout(loadPixel, 2500);
      return () => clearTimeout(t);
    }
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <Landing />
    </MotionConfig>
  );
}
