export interface BrandTokens {
  primary: string;
  secondary: string;
  accent: string;
}

export interface StatusTokens {
  active: string;
  processing: string;
  pending: string;
  failed: string;
  attention: string;
  highlight: string;
  inactive: string;
  completed: string;
}

export interface AlertColorTokens {
  warning: string;
  info: string;
  error: string;
  success: string;
}

/**
 * Fondos explícitos para cada capa de UI.
 * Reglas:
 *   - `modal` y `card` son siempre opacos — nunca aplicar opacidad adicional al contenedor.
 *   - `overlay` ya tiene la opacidad correcta (50 %); no modificar.
 *   - `alertBg.*` son fondos de relleno tenue; el color de borde/texto lo da `semantic.alert.*`.
 */
export interface SurfaceTokens {
  /** Fondo raíz de toda la pantalla / página */
  app: string;
  /** Fondo de tarjetas y contenedores base */
  card: string;
  /** Fondo del contenido del modal — siempre opaco */
  modal: string;
  /** Capa oscura semitransparente detrás del modal (scrim) */
  overlay: string;
  /** Fondo de dropdowns, tooltips y popovers flotantes */
  popover: string;
  /** Fondo de notificaciones tipo toast */
  toast: string;
  /** Fondos de relleno para banners y alertas inline */
  alertBg: AlertColorTokens;
}

export interface NeutralTokens {
  white: string;
  gray: Record<'50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900', string>;
  black: string;
}

export interface TextTokens {
  primary: string;
  secondary: string;
  muted: string;
  disabled: string;
  inverse: string;
  brand: string;
}

export interface BorderTokens {
  default: string;
  hover: string;
  focus: string;
  disabled: string;
  error: string;
  success: string;
}

export interface ActionTokens {
  primary: string;
  primaryHover: string;
  secondary: string;
  secondaryHover: string;
  disabled: string;
  disabledText: string;
}

export interface TypographyTokens {
  family: { main: string };
  size: Record<'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl', string>;
  weight: Record<'light' | 'regular' | 'medium' | 'semibold' | 'bold', string>;
}

export interface RadiusTokens {
  none: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface SpacingTokens {
  '1': string;
  '2': string;
  '3': string;
  '4': string;
  '5': string;
  '6': string;
  '8': string;
  '10': string;
  '12': string;
  '16': string;
}

/** Web-only: usa sintaxis CSS `box-shadow`. No usar en React Native; usar `elevation` en su lugar. */
export interface ShadowTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export type ElevationTokens = Record<'0' | '1' | '2' | '3' | '4' | '5', number>;

export interface DepthTokens {
  base: number;
  surface: number;
  dropdown: number;
  sticky: number;
  overlay: number;
  modal: number;
  popover: number;
  toast: number;
  tooltip: number;
}

export interface OpacityTokens {
  '0': string;
  '25': string;
  '50': string;
  '75': string;
  '100': string;
}

export interface IconSizeTokens {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

export interface TransitionTokens {
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
  easing: {
    linear: string;
    ease: string;
    in: string;
    out: string;
    inOut: string;
  };
}

export interface RawTokens {
  brand: BrandTokens;
  semantic: {
    status: StatusTokens;
    alert: AlertColorTokens;
  };
  neutral: NeutralTokens;
  surface: SurfaceTokens;
  text: TextTokens;
  border: BorderTokens;
  action: ActionTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  spacing: SpacingTokens;
  /** Web-only: sintaxis CSS box-shadow. Ver ShadowTokens. */
  shadow: ShadowTokens;
  elevation: ElevationTokens;
  depth: DepthTokens;
  opacity: OpacityTokens;
  icon: IconSizeTokens;
  transition: TransitionTokens;
}
