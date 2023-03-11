import type { PartialTheme, Theme } from './types/theme';
import { DefaultTheme, Theme as NavTheme } from '@react-navigation/native';
import {
  DefaultTheme as DefaultPaper,
  Theme as PaperTheme,
} from 'react-native-paper';

export const generateTheme = (input: Partial<Theme>): PartialTheme => {
  return {
    palette: {
      primary: input.palette.primary,
    },
  };
};

export const generateNavTheme = (input: PartialTheme): NavTheme => {
  const palette = input.palette;
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: palette.primary.main,
      background: palette.surface.background,
      card: palette.surface.card,
    },
  };
};

export const generatePaperTheme = (input: PartialTheme): PaperTheme => {
  const palette = input.palette;
  return {
    ...DefaultPaper,
    colors: {
      ...DefaultPaper.colors,
      primary: palette.primary.main,
      accent: palette.secondary.main,
      background: palette.surface.background,
      surface: palette.surface.card,
      disabled: palette.disabled.main,
    },
    fonts: {
      regular: input.typography.regular,
      light: input.typography.light,
      thin: input.typography.light,
      medium: input.typography.bold,
    },
  };
};

export const generateRNThemes = (
  input: Partial<Theme>
): { generated: PartialTheme; nav: NavTheme; paper: PaperTheme } => {
  const generated = generateTheme(input);
  return {
    generated,
    paper: generatePaperTheme(generated),
    nav: generateNavTheme(generated),
  };
};
