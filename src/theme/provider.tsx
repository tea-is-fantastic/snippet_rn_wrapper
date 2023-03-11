import React, { PropsWithChildren } from 'react';
import { generateRNThemes } from './func';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-native-paper';
import type { PartialTheme } from './types';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type ThemeProviderProps = { theme: PartialTheme };

export const ThemeProvider: React.FC<PropsWithChildren<ThemeProviderProps>> = ({
  children,
  theme,
}) => {
  const { generated, nav, paper } = React.useMemo(
    () => generateRNThemes(theme),
    [theme]
  );
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer theme={nav} onReady={() => RNBootSplash.hide()}>
          <Provider theme={paper}>{children}</Provider>
        </NavigationContainer>
        <StatusBar />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
