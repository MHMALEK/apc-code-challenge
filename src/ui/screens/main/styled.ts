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
const StyledPaginationWrapper = styled.div`
  .pagination {
    display: flex;
    li {
      list-style-type: none;
      border-radius: 8px;
      width: 40px;
      height: 20px;
      display: flex;
      align-items: center;
      margin: 16px;
      justify-content: center;
      cursor: pointer;
      &.previous,
      &.next {
        width: auto;
        padding: 2px 5px;
        border: 1px solid ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.main};
      }
      &.active {
        background-color: ${({ theme }) => theme.colors.primary.main};
        color: white;
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export {
  StyledHeaderSection,
  StyledMainSection,
  StyledPageTitle,
  StyledPaginationWrapper,
};
