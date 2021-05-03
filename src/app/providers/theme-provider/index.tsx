import React from 'react';
import { ThemeProvider as StyledComponentThemeProvider } from 'styled-components';
import { ThemeProviderProps } from './types';
import apcDefaultTheme from './themes/apc-default';
import GlobalDefaultStyles from './defaults';

// transitions
import './styles/transition.css';

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  children,
}) => (
    <>
      <StyledComponentThemeProvider theme={apcDefaultTheme}>
        <GlobalDefaultStyles />
        {children}
      </StyledComponentThemeProvider>
    </>
  );

export default ThemeProvider;
