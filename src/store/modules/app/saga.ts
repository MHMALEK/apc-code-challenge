import { takeEvery } from 'redux-saga/effects';
import { ActionType } from './types';

function* bootstrapAppSaga(action: any) {
  // add some actions for start of the app
  yield action;
}

export default [takeEvery(ActionType.SAMPLE_ACTION, bootstrapAppSaga)];
