import type { Font } from 'react-native-paper/src/types';
import type { MD3Type } from 'react-native-paper/lib/typescript/types';

export type TypeVariants = {
  large: MD3Type;
  medium: MD3Type;
  small: MD3Type;
};

export interface Fonts {
  light: Font;
  medium: Font;
  regular: Font;
  bold: Font;
}

export interface Types {
  primary: MD3Type;
  secondary: MD3Type;
  tertiary: MD3Type;
  quaternary: MD3Type;
}
export interface Variants {
  body: TypeVariants;
  display: TypeVariants;
  headline: TypeVariants;
  title: TypeVariants;
  label: TypeVariants;
  subtitle: TypeVariants;
  button: TypeVariants;
  caption: TypeVariants;
}

export type Typography = Fonts & Types & Variants;
