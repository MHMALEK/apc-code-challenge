import { all } from 'redux-saga/effects';
import AppSaga from './modules/app/saga';

export default function* sagas() {
  yield all([...AppSaga]);
}
