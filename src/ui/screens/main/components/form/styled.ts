import Styled from 'styled-components';

const StyledButtonWrapper = Styled.div`
   margin: ${({ theme }) => theme.dimensions.lg} 0
`;

const StyledForm = Styled.form`

   input, select {
      margin: ${({ theme }) => theme.dimensions.sm};
      height: 40px;
      border-radius: 5px;
      border: 1px solid ${({ theme }) => theme.colors.primary.light};
      padding: 0 8px;
   }
  
`;

export { StyledButtonWrapper, StyledForm };
