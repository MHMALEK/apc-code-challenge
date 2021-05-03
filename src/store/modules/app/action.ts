import { ActionType } from './types';

export const sampleAction = (payload: any): any => ({
  type: ActionType.SAMPLE_ACTION,
  payload,
});

export type SampleModuleActionType = any;
