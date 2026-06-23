import type { RawTokens } from './tokens.types';
import rawTokens from './tokens.json';

const tokens = rawTokens as unknown as RawTokens;

const parsePx = (pxStr: string): number => {
  return parseInt(pxStr.replace('px', ''), 10);
};

export const tokensNative = {
  colors: {
    brand: tokens.brand,
    status: tokens.semantic.status,
    alert: tokens.semantic.alert,
    neutral: tokens.neutral,
    surface: tokens.surface,
    text: tokens.text,
    border: tokens.border,
    action: tokens.action,
  },
  typography: {
    family: tokens.typography.family.main,
    size: {
      xs: parsePx(tokens.typography.size.xs),
      sm: parsePx(tokens.typography.size.sm),
      base: parsePx(tokens.typography.size.base),
      lg: parsePx(tokens.typography.size.lg),
      xl: parsePx(tokens.typography.size.xl),
      '2xl': parsePx(tokens.typography.size['2xl']),
      '3xl': parsePx(tokens.typography.size['3xl']),
      '4xl': parsePx(tokens.typography.size['4xl']),
    },
    weight: tokens.typography.weight,
  },
  radius: {
    none: 0,
    sm: parsePx(tokens.radius.sm),
    md: parsePx(tokens.radius.md),
    lg: parsePx(tokens.radius.lg),
    xl: parsePx(tokens.radius.xl),
    full: parsePx(tokens.radius.full),
  },
  spacing: {
    1: parsePx(tokens.spacing['1']),
    2: parsePx(tokens.spacing['2']),
    3: parsePx(tokens.spacing['3']),
    4: parsePx(tokens.spacing['4']),
    5: parsePx(tokens.spacing['5']),
    6: parsePx(tokens.spacing['6']),
    8: parsePx(tokens.spacing['8']),
    10: parsePx(tokens.spacing['10']),
    12: parsePx(tokens.spacing['12']),
    16: parsePx(tokens.spacing['16']),
  },
  elevation: tokens.elevation,
  zIndex: tokens.depth,
  opacity: {
    0: Number(tokens.opacity['0']),
    25: Number(tokens.opacity['25']),
    50: Number(tokens.opacity['50']),
    75: Number(tokens.opacity['75']),
    100: Number(tokens.opacity['100']),
  },
  icon: {
    sm: parsePx(tokens.icon.sm),
    md: parsePx(tokens.icon.md),
    lg: parsePx(tokens.icon.lg),
    xl: parsePx(tokens.icon.xl),
  },
  transition: {
    duration: {
      fast: parseInt(tokens.transition.duration.fast.replace('ms', ''), 10),
      normal: parseInt(tokens.transition.duration.normal.replace('ms', ''), 10),
      slow: parseInt(tokens.transition.duration.slow.replace('ms', ''), 10),
    },
    easing: tokens.transition.easing,
  },
};
