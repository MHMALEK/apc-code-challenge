import theme from './themes/apc-default';

interface ApcDefaultThemeType {
  dimensions: {
    [x: string]: string;
  };
  colors: {
    [x: string]: {
      main: string;
      light?: string;
    };
  };
}

export enum DimensionsType {
  xss = '0.25rem', // 4px
  xs = '0.375rem', // 6px
  sm = '0.5rem', // 8px
  md = '0.75rem', // 12px
  normal = '1rem', // 16px
  lg = '1.25rem', // 20px
  xl = '1.5rem', // 24px
}

export type ApcThemeType = typeof theme & ApcDefaultThemeType;

declare module 'styled-components' {
  export interface DefaultTheme extends ApcThemeType {}
}
