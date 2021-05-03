import React from 'react';
// providers
import StoreProvider from './providers/store-provider';
import ErrorBoundary from './providers/error-provider/error-boundary';
import FontProvider from './providers/font-provider';
import RouterProvider from './providers/router-provider';

const RootProvider: React.FunctionComponent<{}> = () => {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <FontProvider>
          <RouterProvider />
        </FontProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
};

export default RootProvider;
