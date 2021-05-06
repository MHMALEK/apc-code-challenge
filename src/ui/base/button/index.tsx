import {
  StyledLoadingWrapper,
  StyledTextWrapper,
  StyledButton,
} from './styled';

import { BaseButtonProps } from './types';

const BaseButton: React.FunctionComponent<BaseButtonProps> = ({
  type,
  icon,
  children,
  variant,
  onClick,
  disabled,
  width,
  size,
  isLoading,
}) => {
  const renderButtonText = () => {
    if (isLoading) {
      return (
        <StyledLoadingWrapper>
          <p>Loading</p>
        </StyledLoadingWrapper>
      );
    }
    return <StyledTextWrapper>{children}</StyledTextWrapper>;
  };
  return (
    <StyledButton
      type={type}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      width={width}
      size={size}
    >
      {renderButtonText()}
    </StyledButton>
  );
};

export default BaseButton;
