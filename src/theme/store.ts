import create from 'zustand';
import type { Theme } from './types/theme';
import type {
  Fonts,
  PrimitivePalette,
  Typography,
  Types,
  Variants,
  Palette,
} from '@tisf/rn-providers';
import type { ValueOf } from './utils';

export const useTheme = create<Theme>((set) => undefined);

export const useTypography = (k: keyof Typography): ValueOf<Typography> =>
  useTheme((s) => s.typography[k]);

export const useFont = (s: keyof Fonts): ValueOf<Fonts> =>
  useTypography(s) as ValueOf<Fonts>;

export const useTypescale = (s: keyof Types): ValueOf<Types> =>
  useTypography(s) as ValueOf<Types>;

export const useVariant = (s: keyof Variants): ValueOf<Variants> =>
  useTypography(s) as ValueOf<Variants>;

export const usePalette = (k: keyof Palette): ValueOf<Palette> =>
  useTheme((s) => s?.palette[k]);
