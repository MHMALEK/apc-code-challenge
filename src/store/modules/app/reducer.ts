import { PayloadAction } from '@reduxjs/toolkit';
import { ActionType } from './types';

const reducers = {
  [ActionType.SAMPLE_ACTION]: (state: any, action: PayloadAction<any>) => {
    state.sample = action.payload;
  },
};
export default reducers;
