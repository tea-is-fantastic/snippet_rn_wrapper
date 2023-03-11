import React, { PropsWithChildren } from 'react';
import { DialogProvider } from './dialog';
import { SpinnerProvider } from './spinner';
import FlashMessage from 'react-native-flash-message';

export const OverlayProvider: React.FC<PropsWithChildren<any>> = ({
  children,
}) => {
  return (
    <DialogProvider>
      <SpinnerProvider>{children}</SpinnerProvider>
      <FlashMessage position="bottom" />
    </DialogProvider>
  );
};
