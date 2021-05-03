import BaseTypographyProps, { ElementTypes, FontWeightTypes } from "./types";
import createStyledTypographyTag from "./style";
import { DimensionsType } from "providers/theme-provider/styled-components.d";
const BaseTypography: React.FunctionComponent<BaseTypographyProps> = ({
  variant,
  size,
  weight,
  children,
}) => {
  const CustomTag = createStyledTypographyTag(
    variant,
    size,
    weight
  ) as keyof JSX.IntrinsicElements;
  return <CustomTag>{children}</CustomTag>;
};

BaseTypography.defaultProps = {
  variant: ElementTypes.p,
  size: DimensionsType.normal,
  weight: FontWeightTypes.NORMAL,
};

export default BaseTypography;
