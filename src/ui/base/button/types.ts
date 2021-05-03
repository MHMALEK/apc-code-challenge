export enum ButtonVariants {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export enum ButtonSizes {
  FULL = '100%',
  AUTO = 'auto',
}

export interface StyledButtonProps {
  size?: ButtonSizes | string | undefined;
  width?: ButtonSizes | string;
  variant?: ButtonVariants;
  disabled?: boolean;
}

export interface BaseButtonProps {
  type?: 'reset' | 'submit';
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: ButtonVariants;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: ButtonSizes | string;
  size?: ButtonSizes;
  isLoading?: boolean;
}
