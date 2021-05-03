import styled from 'styled-components';
import { ElementTypes } from './types';

const createStyledTypographyTag = (
  elementType: ElementTypes,
  size: string,
  weight: string,
) => styled[elementType]`
  font-size: ${size};
  font-weight: ${weight};
`;

export default createStyledTypographyTag;
