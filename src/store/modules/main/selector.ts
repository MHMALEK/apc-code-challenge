import { RootState } from '../..';

export const selectRepoNameAndInfo = (state: RootState) =>
  state.main.searchData;
