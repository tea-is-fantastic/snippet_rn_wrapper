import React from 'react';
import { ThemeContext, ThemeContextType } from './provider';
import type { ValueOf } from './utils';
import type { Fonts, Types, Variants, Palette } from './types';

export const useTheme = (): ThemeContextType => React.useContext(ThemeContext);

export const useFont = (s: keyof Fonts): ValueOf<Fonts> =>
  useTheme()?.typography[s];

export const useTypescale = (s: keyof Types): ValueOf<Types> =>
  useTheme()?.typography[s];

export const useVariant = (s: keyof Variants): ValueOf<Variants> =>
  useTheme()?.typography[s];

export const usePaletteColors = (s: keyof Palette): ValueOf<Palette> =>
  useTheme();
