import type { Palette } from './palette';
import type { Typography } from './typography';
import type { Components } from './components';
import type { Dimensions } from './dimensions';
import { MD3LightTheme } from 'react-native-paper';

const x = MD3LightTheme.fonts;

export interface Theme {
  palette: Palette;
  typography: Typography;
  components: Components;
  dimensions: Dimensions;
}

export interface PartialTheme {
  palette: any;
  typography: any;
  components: any;
  dimensions: any;
}
