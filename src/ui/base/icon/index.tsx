import StyledIcon from './style';
import './assets/embed.css';
import { IconProps } from './types';

const BaseIcon: React.FunctionComponent<IconProps> = ({
  name,
  size,
  color,
  rotate,
  onClick,
  animation,
}) => (
  <>
    <StyledIcon
      className={`icon-${name}`}
      size={size}
      color={color}
      rotate={rotate}
      onClick={onClick && onClick}
      animation={animation}
    />
  </>
);

export default BaseIcon;
