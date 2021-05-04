import React from 'react';
import Select from 'react-select';
import { BaseSelectProps } from './types';

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    fontWeight: 'bold',
    borderColor: '#BED2E9',
  }),
  container: (styles: any) => ({
    ...styles,
    width: '100%',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: (styles: any) => ({
    ...styles,
    color: '#0077FF',
  }),
  option: (styles: any) => ({
    ...styles,
    ':active': {
      color: 'white',
    },
  }),
};

const BaseSelect: React.FunctionComponent<BaseSelectProps> = ({
  options,
  onChange,
  defaultValue,
  otherProps,
}) => (
  <Select
    styles={colourStyles}
    defaultValue={defaultValue || (options && options[0])}
    onChange={onChange}
    options={options}
    {...otherProps}
  />
);

export default BaseSelect;
