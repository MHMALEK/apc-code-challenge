import { shallow, mount } from 'enzyme';
import apcDefaultTheme from 'src/app/providers/theme-provider/themes/apc-default';
import { ThemeProvider } from 'styled-components';

const themeMock = {
  ...apcDefaultTheme,
  dimensions: {
      xs: '2px'
  }
};

const ThemeProviderWrapper = ({ children }) => (
  <ThemeProvider theme={themeMock}>{children}</ThemeProvider>
);

export const shallowWithTheme = (tree) =>
  shallow(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });

export const mountWithTheme = (tree) =>
  mount(tree, {
    wrappingComponent: ThemeProviderWrapper,
  });
