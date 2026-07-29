# Precio localizado por país (charm pricing) — Diseño

## Contexto

La sección `PricingSection.tsx` muestra hoy un precio fijo en USD (oferta USD 19,
precio tachado USD 97, sticker "-80%" sobre el mockup). El dueño del sitio definió
precios "charm" (números redondeados, atractivos localmente) específicos para
cuatro países de Latinoamérica, distintos de una simple conversión de USD a la
moneda local. El objetivo es mostrar el precio correcto según el país del
visitante, sin selector manual visible: la detección debe ser 100% automática.

## Alcance

- Se modifica **únicamente** `PricingSection.tsx` (tarjeta de precio + contador).
- `FinalPricingCTA.tsx` y el resto del sitio siguen mostrando USD 19 fijo — fuera
  de alcance.
- El schema.org `Product.offers.price` en `App.tsx` sigue siendo `"19"` (USD) —
  es metadata para buscadores, no para visitantes, y no debe variar por país.
- El sticker dorado "-80%" sobre el mockup permanece **estático**, igual para
  los 5 casos (el descuento real varía entre 80,0% y 80,6% según el país —
  imperceptible, no vale la pena la complejidad de hacerlo dinámico).
- No hay selector de país/moneda visible en la UI. No hay persistencia que
  gestionar (no existe una elección manual que guardar).

## Detección de país

Se lee `navigator.language` (o `navigator.languages[0]`) al montar el
componente, se extrae el código de región tras el guión (ej. `"es-CO"` → `CO`),
y se hace un lookup directo:

| Región detectada | País        |
|-------------------|-------------|
| `CO`               | Colombia    |
| `MX`               | México      |
| `PE`               | Perú        |
| `AR`               | Argentina   |
| cualquier otro valor, o `navigator.language` ausente/sin región | Resto del mundo (USD) |

No hay llamadas de red ni servicios externos (se descarta geolocalización por
IP): es instantáneo, no depende de terceros, no se puede caer ni ser bloqueado
por un ad-blocker. Contrapartida aceptada: un visitante con el navegador en
inglés mientras está físicamente en uno de los 4 países caerá al default USD —
se acepta esta imprecisión porque no habrá selector manual para corregirlo.

## Datos de precio por país

Nuevo archivo `src/utils/pricingByCountry.ts`, exportando una función
`getPricingForCountry(): PricingInfo` (internamente usa `navigator.language`)
y el tipo `PricingInfo`:

```ts
interface PricingInfo {
  offerPrice: string;   // ej. "$69.900 COP" — string ya formateado, listo para render
  originalPrice: string; // ej. "$359.000 COP"
  supportText: string;  // "Pagas en tu moneda local" | "Acceso inmediato"
}
```

Valores exactos (montos fijos definidos por el dueño del producto, **no**
conversión de USD en vivo):

| País | Región | Oferta | Tachado | Texto de apoyo |
|---|---|---|---|---|
| Colombia | `CO` | `$69.900 COP` | `$359.000 COP` | Pagas en tu moneda local |
| México | `MX` | `$349 MXN` | `$1.799 MXN` | Pagas en tu moneda local |
| Perú | `PE` | `S/ 69 PEN` | `S/ 359 PEN` | Pagas en tu moneda local |
| Argentina | `AR` | `$29.990 ARS` | `$149.990 ARS` | Pagas en tu moneda local |
| Resto del mundo | default | `$19 USD` | `$97 USD` | Acceso inmediato |

Los strings de precio se guardan ya formateados en la tabla (no hay lógica de
formato de números en tiempo de ejecución) — cada valor se escribe tal cual
debe verse, evitando bugs de redondeo/separadores por generarlos dinámicamente.

## Integración en `PricingSection.tsx`

- Se llama `getPricingForCountry()` una vez, con `useState(() => getPricingForCountry())`
  (lazy initializer, se ejecuta una sola vez en el primer render — no hace
  falta `useEffect` porque `navigator.language` no cambia durante la sesión).
- Se reemplazan los literales hardcodeados:
  - `Precio Normal: USD 97` (tachado) → `pricing.originalPrice`
  - `USD 29` (precio grande) → ya está en `USD 19` actualmente → `pricing.offerPrice`
  - `Pagas en tu moneda local` (pill) → `pricing.supportText`
- El resto del componente (contador, CTA, badges de confianza) no cambia.

## Manejo de errores

- Si `navigator` no existe (SSR / entorno sin DOM) o `navigator.language` es
  `undefined`/vacío, `getPricingForCountry()` devuelve el default de
  Resto del mundo (USD) sin lanzar excepción.

## Testing

Verificación manual en navegador (mismo enfoque que el sticker y el cartelito
de compras): se simula `navigator.language` con Playwright para los 5 casos
(`es-CO`, `es-MX`, `es-PE`, `es-AR`, y un caso default como `en-US`) y se
confirma visualmente el precio/tachado/texto correctos en cada uno. No se
agregan tests automatizados — es de bajo riesgo y puramente presentacional.
