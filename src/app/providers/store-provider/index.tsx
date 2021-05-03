import React from 'react';
import { Provider } from 'react-redux';
import { StoreProviderProps } from './types';
import store from '../../../store';

const StoreController: React.FunctionComponent<StoreProviderProps> = ({
  children,
}) => <Provider store={store}>{children}</Provider>;

export default StoreController;
