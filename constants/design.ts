/**
 * Design Token System
 * 
 * POVA TX - Fintech App
 */

export const colors = {
  // Brand
  primary: '#1A73E8', // TradingView blue
  primaryDark: '#1557B0',
  primaryLight: '#4285F4',
  primaryTint: '#E8F0FE',
  
  // Secondary
  secondary: '#27272A',
  secondaryDark: '#18181B',
  secondaryLight: '#3F3F46',
  
  // Neutral (Dark Mode First)
  background: '#09090B', // Deep black
  backgroundSecondary: '#18181B', // Dark gray for surfaces
  backgroundTertiary: '#27272A',
  
  // Text
  text: '#FAFAFA', // White
  textSecondary: '#A1A1AA', // Muted gray
  textTertiary: '#71717A',
  textDisabled: '#52525B',
  textInverse: '#09090B', // Black text on light backgrounds
  
  // Semantic
  success: '#10B981', // Emerald green
  successLight: '#34D399',
  error: '#EF4444', // Red
  errorLight: '#F87171',
  warning: '#F59E0B',
  warningLight: '#FBBF24',
  info: '#3B82F6',
  infoLight: '#60A5FA',
  
  // Accents
  accent: '#F59E0B', // Amber for highlights
  
  // Borders
  border: '#27272A',
  borderLight: '#3F3F46',
  divider: '#1F1F23',
  
  // Special
  white: '#FFFFFF',
  black: '#000000',
  nanoBlack: '#0A0A0A', // Ultra-dark black for maximum readability
  transparent: 'transparent',
  
  // Charts (TradingView)
  chartUp: '#089981',
  chartDown: '#F23645',
  chartVolume: '#26A69A',
};

export const spacing = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
  xxxxl: 96,
};

export const typography = {
  display: {
    fontSize: 40,
    fontWeight: '700' as const,
    lineHeight: 48,
    letterSpacing: -0.5,
  },
  h1: {
    fontSize: 32,
    fontWeight: '700' as const,
    lineHeight: 40,
    letterSpacing: -0.4,
  },
  h2: {
    fontSize: 24,
    fontWeight: '700' as const,
    lineHeight: 32,
    letterSpacing: -0.3,
  },
  h3: {
    fontSize: 20,
    fontWeight: '600' as const,
    lineHeight: 28,
  },
  h4: {
    fontSize: 18,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  body: {
    fontSize: 16,
    fontWeight: '400' as const,
    lineHeight: 24,
  },
  bodyBold: {
    fontSize: 16,
    fontWeight: '600' as const,
    lineHeight: 24,
  },
  caption: {
    fontSize: 14,
    fontWeight: '400' as const,
    lineHeight: 20,
  },
  captionBold: {
    fontSize: 14,
    fontWeight: '600' as const,
    lineHeight: 20,
  },
  small: {
    fontSize: 12,
    fontWeight: '400' as const,
    lineHeight: 16,
  },
  smallBold: {
    fontSize: 12,
    fontWeight: '600' as const,
    lineHeight: 16,
  },
  tiny: {
    fontSize: 10,
    fontWeight: '500' as const,
    lineHeight: 14,
    letterSpacing: 0.5,
  },
};

export const shadows = {
  none: { elevation: 0, shadowOpacity: 0 },
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
};

export const borderRadius = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  full: 9999,
};

export const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
  xxl: 40,
};

export const avatarSize = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80,
  xxl: 120,
};

export const touchTargets = {
  minimum: 44,
  comfortable: 56,
};

export const opacity = {
  disabled: 0.5,
  pressed: 0.8,
  hover: 0.9,
  transparent: 0,
  semiTransparent: 0.5,
  opaque: 1,
};

export const getThemedColor = (light: string, dark: string, isDark: boolean) => isDark ? dark : light;
