import { mediaQueriesMinWidth } from 'providers/theme-provider/themes/find-hotel-default/responsive';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media screen and ${mediaQueriesMinWidth.tablet} {
    justify-content: space-between;
    width: 20%;
  }
`;
const StyledIncreaseDecreaseWrapper = styled.div`
  background: ${({ theme }) => theme.colors.secondary.main};
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: ${({ theme }) => theme.dimensions.xs};
  padding: ${({ theme }) => theme.dimensions.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const StyledValueWrapper = styled.div`
  padding: 0 ${({ theme }) => theme.dimensions.lg};
  font-weight: bold;
`;

export { StyledWrapper, StyledIncreaseDecreaseWrapper, StyledValueWrapper };
