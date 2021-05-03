import {
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
} from './responsive';

const apcDefaultTheme = {
  colors: {
    primary: {
      main: '#0077FF',
      light: '#BFDAF9',
    },
    secondary: {
      main: '#F7FBFF',
      light: '#DAE9FA',
    },
    gray: {
      main: '#A3ACB8',
      light: '#eff2f6',
    },
    dark: {
      main: '#232323',
      light: '#232323',
    },
    danger: {
      main: '#D83B3B',
    },
    white: {
      main: '#FFFFFF',
    },
  },
  typography: {
    fontSize: {
      default: '1rem',
    },
    fontFamily: {
      default: 'Inter',
    },
    h5: {
      fontSize: '1rem',
    },
  },
  dimensions: {
    xss: '0.25rem', // 4px
    xs: '0.375rem', // 6px
    sm: '0.5rem', // 8px
    md: '0.75rem', // 12px
    normal: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
  },
  borders: {
    default: '1px solid',
  },
  boxShadow: {
    default:
      '0px 0px 1px rgba(68, 80, 95, 0.08), 0px 1px 4px rgba(68, 80, 95, 0.2)',
  },
  mediaQueriesMaxWidth,
  mediaQueriesMinWidth,
};
export default apcDefaultTheme;
