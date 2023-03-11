import type { MD3Type } from 'react-native-paper-v5/lib/typescript/types';
import type { ColorValue, TextStyle } from 'react-native';
import type { IconProps } from 'react-native-paper/lib/typescript/components/MaterialCommunityIcon';

export type ColorStates = {
  active: ColorValue;
  inactive: ColorValue;
  disabled: ColorValue;
};

export type InputStyles = {
  textColor: ColorStates;
  textSize: TextStyle['fontSize'];
  labelColor: ColorStates;
  iconColor: ColorStates;
  iconSize: IconProps['size'];
  placeholderColor: MD3Type;
};

export type InputVariants = {
  text: MD3Type;
  contained: MD3Type;
  outlined: MD3Type;
  otherOne: MD3Type;
  otherTwo: MD3Type;
  otherThree: MD3Type;
};

export type ButtonVariants = {
  text: MD3Type;
  contained: MD3Type;
  outlined: MD3Type;
  otherOne: MD3Type;
  otherTwo: MD3Type;
  otherThree: MD3Type;
};

export interface Components {
  buttons: ButtonVariants;
  inputs: InputVariants;
}
