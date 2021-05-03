import BaseIcon from "../icon";
import {
  StyledWrapper,
  StyledIncreaseDecreaseWrapper,
  StyledValueWrapper,
} from "./styles";

const BaseUpDown: React.FunctionComponent<any> = ({
  onIncrease,
  onDecrease,
  value,
}) => {
  return (
    <StyledWrapper>
      <StyledIncreaseDecreaseWrapper
        data-cypress-id="updown-decrease-btn"
        onClick={onDecrease}
      >
        <BaseIcon name="remove" color="primary" size="xl" />
      </StyledIncreaseDecreaseWrapper>

      <StyledValueWrapper data-cypress-id="updown-value">{value}</StyledValueWrapper>

      <StyledIncreaseDecreaseWrapper
        data-cypress-id="updown-increase-btn"
        onClick={onIncrease}
      >
        <BaseIcon name="add" color="primary" size="xl" />
      </StyledIncreaseDecreaseWrapper>
    </StyledWrapper>
  );
};

BaseUpDown.defaultProps = {
  minValue: 0,
  maxValue: 5,
  defaultValue: 0,
};

export default BaseUpDown;
