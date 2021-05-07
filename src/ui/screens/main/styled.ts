import styled from 'styled-components';

const StyledHeaderSection = styled.section`
  margin: ${({ theme }) => theme.dimensions.normal};
`;
const StyledMainSection = styled.section`
  margin: ${({ theme }) => theme.dimensions.normal};
`;

const StyledPageTitle = styled.div`
  margin: ${({ theme }) => theme.dimensions.normal} 0;
`;

export { StyledHeaderSection, StyledMainSection, StyledPageTitle };
