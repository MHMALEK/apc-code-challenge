import React from 'react';
import { DimensionsType } from '../../../app/providers/theme-provider/styled-components';

export enum ElementTypes {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  p = 'p',
  span = 'span',
}

export enum FontWeightTypes {
  BOLD = 'bold',
  ITALIC = 'italic',
  NORMAL = 'normal',
}

interface BaseTypographyProps {
  children: React.ReactNode;
  variant: ElementTypes;
  size: DimensionsType;
  weight: FontWeightTypes;
}

export default BaseTypographyProps;
