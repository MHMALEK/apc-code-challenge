import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import MainSaga from './modules/main/saga';

const sagaMiddleware = createSagaMiddleware();

function* sagas() {
  yield all([...MainSaga]);
}

export { sagaMiddleware, sagas };
