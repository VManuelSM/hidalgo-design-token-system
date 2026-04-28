import type { RawTokens } from './tokens.types';
import rawTokens from './tokens.json';

const tokens = rawTokens as unknown as RawTokens;

export const tokensWeb = {
  colors: {
    brand: {
      primary: tokens.brand.primary,
      secondary: tokens.brand.secondary,
      accent: tokens.brand.accent,
    },
    status: tokens.semantic.status,
    alert: tokens.semantic.alert,
    neutral: tokens.neutral,
    surface: tokens.surface,
  },
  typography: {
    fontFamily: {
      sans: [tokens.typography.family.main, 'ui-sans-serif', 'system-ui'],
    },
    fontSize: tokens.typography.size,
    fontWeight: tokens.typography.weight,
  },
  borderRadius: tokens.radius,
  spacing: tokens.spacing,
  boxShadow: tokens.shadow,
  zIndex: tokens.depth,
};

export const generateCssVariables = () => {
  return `
    :root {
      /* Brand */
      --brand-primary: ${tokens.brand.primary};
      --brand-secondary: ${tokens.brand.secondary};
      --brand-accent: ${tokens.brand.accent};

      /* Status de asistencia */
      --status-puntual: ${tokens.semantic.status.puntual};
      --status-tolerancia: ${tokens.semantic.status.tolerancia};
      --status-retardo: ${tokens.semantic.status.retardo};
      --status-falta: ${tokens.semantic.status.falta};
      --status-falta-salida: ${tokens.semantic.status.faltaSalida};
      --status-comision: ${tokens.semantic.status.comision};
      --status-ausencia: ${tokens.semantic.status.ausencia};

      /* Alertas (color de borde/texto/icono) */
      --alert-warning: ${tokens.semantic.alert.warning};
      --alert-info: ${tokens.semantic.alert.info};
      --alert-error: ${tokens.semantic.alert.error};
      --alert-success: ${tokens.semantic.alert.success};

      /* Superficies — fondos explícitos por capa de UI */
      --surface-app: ${tokens.surface.app};
      --surface-card: ${tokens.surface.card};
      --surface-modal: ${tokens.surface.modal};
      --surface-overlay: ${tokens.surface.overlay};
      --surface-popover: ${tokens.surface.popover};
      --surface-toast: ${tokens.surface.toast};
      --surface-alert-bg-warning: ${tokens.surface.alertBg.warning};
      --surface-alert-bg-error: ${tokens.surface.alertBg.error};
      --surface-alert-bg-success: ${tokens.surface.alertBg.success};
      --surface-alert-bg-info: ${tokens.surface.alertBg.info};

      /* Grises neutros */
      --gray-50: ${tokens.neutral.gray['50']};
      --gray-100: ${tokens.neutral.gray['100']};
      --gray-200: ${tokens.neutral.gray['200']};
      --gray-300: ${tokens.neutral.gray['300']};
      --gray-400: ${tokens.neutral.gray['400']};
      --gray-500: ${tokens.neutral.gray['500']};
      --gray-600: ${tokens.neutral.gray['600']};
      --gray-700: ${tokens.neutral.gray['700']};
      --gray-800: ${tokens.neutral.gray['800']};
      --gray-900: ${tokens.neutral.gray['900']};

      /* Tipografía */
      --font-main: "${tokens.typography.family.main}";
    }
  `;
};
