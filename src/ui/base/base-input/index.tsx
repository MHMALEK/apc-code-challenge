import React from 'react';

// model
import { BaseInputPropsType } from './types';

const BaseInput: React.FC<BaseInputPropsType> = ({
  onChange,
  name,
  value,
  ...otherProps
}) => <input onChange={onChange} name={name} value={value} {...otherProps} />;

export default BaseInput;
