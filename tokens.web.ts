import tokens from './tokens.json';

/**
 * Adaptación de tokens para entornos Web (Tailwind CSS / shadcn)
 */
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

// Generador de variables CSS para el root de la aplicación
export const generateCssVariables = () => {
  return `
    :root {
      --brand-primary: ${tokens.brand.primary};
      --brand-secondary: ${tokens.brand.secondary};
      --status-puntual: ${tokens.semantic.status.puntual};
      --status-tolerancia: ${tokens.semantic.status.tolerancia};
      --status-retardo: ${tokens.semantic.status.retardo};
      --status-falta: ${tokens.semantic.status.falta};
      --status-falta-salida: ${tokens.semantic.status.faltaSalida};
      --status-comision: ${tokens.semantic.status.comision};
      --status-ausencia: ${tokens.semantic.status.ausencia};
      --font-main: "${tokens.typography.family.main}";
    }
  `;
};
