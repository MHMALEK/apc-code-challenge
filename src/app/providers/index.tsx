import React from 'react';
// providers
import StoreProvider from './store-provider';
import ErrorBoundary from './error-provider/error-boundary';
import FontProvider from './font-provider';
import RouterProvider from './router-provider';
import ThemeProvider from './theme-provider';

const RootProvider: React.FunctionComponent<Record<string, never>> = () => (
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <FontProvider>
            <RouterProvider />
          </FontProvider>
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  );

export default RootProvider;
