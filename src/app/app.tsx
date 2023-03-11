import React, { FC, PropsWithChildren } from 'react';
import useCachedResources from './useCachedResources';
import type { Theme } from '../theme';
import { ThemeProvider } from '../theme';
import { MenuProvider, OverlayProvider } from '../overlays';

export type IAppWrapper = {
  theme: Partial<Theme>;
};

export const AppWrapper: FC<PropsWithChildren<IAppWrapper>> = ({
  children,
  theme,
}) => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ThemeProvider theme={theme}>
        <MenuProvider>
          <OverlayProvider>{children}</OverlayProvider>
        </MenuProvider>
      </ThemeProvider>
    );
  }
};
