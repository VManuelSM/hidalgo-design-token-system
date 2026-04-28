# Design Token System — App Checador

Fuente de verdad ("Single Source of Truth") para el diseño visual de la **App Checador**. Centraliza colores, tipografía, espaciados y reglas de UI para garantizar una experiencia consistente entre el portal web y la aplicación móvil.

## Colores Institucionales

| Token | Valor | Uso |
|-------|-------|-----|
| `brand.primary` | `#A02142` | Guinda institucional — acciones primarias, headers |
| `brand.secondary` | `#BC955B` | Dorado institucional — acentos decorativos |
| `brand.accent` | `#6F7271` | Gris institucional — elementos secundarios |

## Estructura del repositorio

| Archivo | Descripción |
|---------|-------------|
| `tokens.json` | Fuente de verdad — definición base de todos los tokens |
| `tokens.types.ts` | Interfaces TypeScript que documentan y validan la estructura del JSON |
| `tokens.web.ts` | Adaptación para **Tailwind CSS** y **shadcn/ui** |
| `tokens.native.ts` | Adaptación para **React Native** (Expo) |

> **Nota:** Los tokens `shadow` en `tokens.json` usan sintaxis CSS (`box-shadow`) y son **exclusivos para web**. En React Native, usa `elevation` en su lugar.

---

## Tokens de Superficie — Fondos de UI

Los tokens `surface` definen explícitamente el color de fondo de cada capa de la interfaz, eliminando ambigüedades de transparencia.

### Reglas de uso obligatorias

1. **`surface.modal` y `surface.card` son siempre opacos.** Nunca aplicar opacidad adicional (`opacity`, `alpha`) al contenedor del modal o tarjeta.
2. **`surface.overlay` ya incluye la opacidad correcta (50 %).** No modificar. Se aplica sobre la pantalla completa como scrim detrás del modal.
3. **`surface.alertBg.*` son fondos de relleno tenue.** El color de borde, texto e icono lo provee `semantic.alert.*`, no `surface.alertBg.*`.
4. **`surface.app` es el único fondo gris.** Todos los elementos flotantes (modales, popovers, tarjetas) usan `surface.card` (`#FFFFFF`) sobre ese fondo.

### Tabla de tokens

| Token | Valor | Cuándo usarlo |
|-------|-------|---------------|
| `surface.app` | `#F9FAFB` | Fondo raíz de la pantalla/página completa |
| `surface.card` | `#FFFFFF` | Tarjetas, secciones y contenedores base |
| `surface.modal` | `#FFFFFF` | Fondo del contenido del modal — **siempre opaco** |
| `surface.overlay` | `rgba(0,0,0,0.50)` | Capa oscura detrás del modal (scrim) |
| `surface.popover` | `#FFFFFF` | Dropdowns, tooltips, menús flotantes |
| `surface.toast` | `#1F2937` | Notificaciones tipo toast (fondo oscuro) |
| `surface.alertBg.warning` | `#FEF9C3` | Relleno de alerta — advertencia |
| `surface.alertBg.error` | `#FEE2E2` | Relleno de alerta — error |
| `surface.alertBg.success` | `#DCFCE7` | Relleno de alerta — éxito |
| `surface.alertBg.info` | `#DBEAFE` | Relleno de alerta — información |

### Anatomía visual de capas

```
┌─────────────────────────────────────────┐
│  surface.app (#F9FAFB)  — pantalla      │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  surface.card (#FFF)  — tarjeta   │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ░░░░ surface.overlay rgba(0,0,0,.5) ░░ │  ← aparece al abrir modal
│                                         │
│  ┌───────────────────────────────────┐  │
│  │  surface.modal (#FFF) — modal     │  │
│  │                                   │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │ surface.alertBg.error       │  │  │
│  │  │ + semantic.alert.error      │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
│                                         │
│                     surface.toast ──────┘ ← esquina superior derecha
└─────────────────────────────────────────┘
```

---

## Uso

### Web (Next.js + Tailwind)

Extiende el tema de Tailwind con `tokensWeb`:

```typescript
// tailwind.config.ts
import { tokensWeb } from '../design-tokens/tokens.web';

export default {
  theme: {
    extend: {
      colors: tokensWeb.colors,
      fontFamily: tokensWeb.typography.fontFamily,
      fontSize: tokensWeb.typography.fontSize,
      fontWeight: tokensWeb.typography.fontWeight,
      borderRadius: tokensWeb.borderRadius,
      spacing: tokensWeb.spacing,
      boxShadow: tokensWeb.boxShadow,
      zIndex: tokensWeb.zIndex,
    },
  },
};
```

Inyecta variables CSS en el root del layout:

```typescript
// app/layout.tsx o globals.css (vía script)
import { generateCssVariables } from '../design-tokens/tokens.web';
```

Uso de variables CSS en componentes:

```css
.modal-backdrop { background-color: var(--surface-overlay); }
.modal-content  { background-color: var(--surface-modal); }
.alert-warning  { background-color: var(--surface-alert-bg-warning);
                  border-color: var(--alert-warning); }
```

### Mobile (React Native + Expo)

```typescript
import { tokensNative } from '../design-tokens/tokens.native';

// Pantalla completa
<View style={{ flex: 1, backgroundColor: tokensNative.colors.surface.app }}>

// Tarjeta
<View style={{ backgroundColor: tokensNative.colors.surface.card,
               borderRadius: tokensNative.radius.lg }}>

// Modal — siempre opaco, nunca con opacity < 1
<View style={{ backgroundColor: tokensNative.colors.surface.modal }}>

// Scrim detrás del modal
<View style={{ ...StyleSheet.absoluteFillObject,
               backgroundColor: tokensNative.colors.surface.overlay }}>

// Alerta de error
<View style={{ backgroundColor: tokensNative.colors.surface.alertBg.error,
               borderColor: tokensNative.colors.alert.error }}>
```

---

## Mantenimiento

1. Modificar `tokens.json` primero — es la única fuente de verdad.
2. Propagar los cambios a `tokens.web.ts` y `tokens.native.ts`.
3. Verificar que `tokens.types.ts` siga siendo consistente con la estructura del JSON.
4. Los tokens `shadow` son exclusivos de web — no exportarlos en `tokens.native.ts`.
