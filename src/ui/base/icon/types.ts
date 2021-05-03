export interface IconStyleProps {
  size?: string;
  color?: string;
  rotate?: string;
  onClick?: () => void;
  animation?: 'spin';
}

export interface IconProps extends IconStyleProps {
  name: string;
}
