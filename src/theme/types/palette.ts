export type ColorPalette = {
  main: string;
  dark: string;
  light: string;
  contrast: string;
};

export type TextColors = {
  textPrimary: string;
  textSecondary: string;
  textDisabled: string;
  hint: string;
  placeholder: string;
  heading: string;
};

export type SurfaceColors = {
  background: string;
  divider: string;
  card: string;
  search: string;
  outline: string;
};

export type AlertColors = {
  success: string;
  danger: string;
  info: string;
  warning: string;
};

export type CommonColors = {
  black: string;
  white: string;
  grey: string;
};

export interface PrimitivePalette {
  primary: ColorPalette;
  secondary: ColorPalette;
  tertiary: ColorPalette;
  quaternary: ColorPalette;
  disabled: ColorPalette;
}

export type Palette = PrimitivePalette & SurfaceColors & AlertColors & TextColors & CommonColors;
