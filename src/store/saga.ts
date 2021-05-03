import { all } from 'redux-saga/effects';
import AppSaga from 'Store/modules/app/saga';

export default function* sagas() {
  yield all([...AppSaga]);
}
