import { takeEvery } from 'redux-saga/effects';
import { ActionType } from './types';

function* bootstrapAppSaga(action: any) {
  // add some actions for start of the app
  yield action;
}

const Sagas = [takeEvery(ActionType.SAMPLE_ACTION, bootstrapAppSaga)];

export default Sagas;
