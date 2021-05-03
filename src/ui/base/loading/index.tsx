import {
  StyledWrapper,
  StyledLoadingLineOne,
  StyledLoadingLineTwo,
  StyledLoadingLineThree,
} from "./style";
const BaseLoading: React.FunctionComponent<{}> = () => {
  return (
    <StyledWrapper>
      <StyledLoadingLineOne />
      <StyledLoadingLineTwo />
      <StyledLoadingLineThree />
    </StyledWrapper>
  );
};

export default BaseLoading;
