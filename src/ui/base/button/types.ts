export enum BUTTON_VARIANTS {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
}

export enum BUTTON_SIZES {
  FULL = "100%",
  AUTO = "auto",
}

export interface StyledButtonProps {
  size?: BUTTON_SIZES | string | undefined;
  width?: BUTTON_SIZES | string;
  variant?: BUTTON_VARIANTS;
  disabled?: boolean;
}

export interface BaseButtonProps {
  type?: "reset" | "submit";
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: BUTTON_VARIANTS;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  width?: BUTTON_SIZES | string;
  size?: BUTTON_SIZES;
  isLoading?: boolean;
}
