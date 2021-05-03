import styled from 'styled-components';
import { ApcThemeType } from '../../../app/providers/theme-provider/styled-components';
import { ButtonVariants, ButtonSizes, StyledButtonProps } from './types';

const generateThemeBasedOnVariant = (
  variant: ButtonVariants | 'DISABLED',
  theme: ApcThemeType,
) => {
  if (variant === ButtonVariants.PRIMARY) {
    return `
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white.main};
    `;
  }
  if (variant === ButtonVariants.SECONDARY) {
    return `
    background-color: ${theme.colors.secondary.main};
    color: ${theme.colors.primary.main};
    border: 1px solid ${theme.colors.secondary.light};
    `;
  }
  if (variant === 'DISABLED') {
    return `
    background-color: ${theme.colors.gray.main};
    color: ${theme.colors.white.main};
    border: 1px solid ${theme.colors.gray.main};
    cursor: not-allowed;
    `;
  }
  return ``;
};

const BaseStyles = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.dimensions.normal};
  font-weight: bold;
`;

const StyledButton = styled(BaseStyles)<StyledButtonProps>`
  font-size: ${({ theme, size }) =>
    size ? theme.dimensions[size] : theme.dimensions.normal};
  line-height: ${({ theme, size }) =>
    size ? theme.dimensions[size] : theme.dimensions.normal};
  width: ${({ width }) => width || ButtonSizes.FULL};
  border-radius: ${({ theme }) => theme.dimensions.xs};

  ${({ variant, theme }) =>
    variant && generateThemeBasedOnVariant(variant, theme)};
  ${({ disabled, theme }) =>
    disabled && generateThemeBasedOnVariant('DISABLED', theme)}
`;

const StyledTextWrapper = styled.div`
  text-align: center;
`;
const StyledLoadingWrapper = styled.div`
  margin: 0 auto;
`;

const StyledIconWrapper = styled.div`
  margin-right: ${({ theme }) => theme.dimensions.sm};
  @media screen and ${({ theme }) => theme.mediaQueriesMaxWidth.tablet} {
    display: none;
  }
`;

export {
  StyledButton,
  StyledTextWrapper,
  StyledLoadingWrapper,
  StyledIconWrapper,
};
