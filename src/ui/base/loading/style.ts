import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
 0% { transform: scale(0.5) }
 50% { transform: scale(1) }
 100% { transform: scale(0.5) }
`;

const loadingAnimationCenterLine = keyframes`
 0% { transform: scale(1) }
 50% { transform: scale(0.5) }
 100% { transform: scale(1) }
`;

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledBaseLoading = styled.div`
  width: 4px;
  height: 24px;
  border-radius: 3px;
  margin: 0 4px;
  background-color: ${({ theme }) => theme.colors.white.main};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const StyledLoadingLineOne = styled(StyledBaseLoading)`
  animation-name: ${loadingAnimation};
`;
const StyledLoadingLineTwo = styled(StyledBaseLoading)`
  animation-name: ${loadingAnimationCenterLine};
`;
const StyledLoadingLineThree = styled(StyledBaseLoading)`
  animation-name: ${loadingAnimation};
`;

export {
  StyledWrapper,
  StyledLoadingLineOne,
  StyledLoadingLineTwo,
  StyledLoadingLineThree,
};
