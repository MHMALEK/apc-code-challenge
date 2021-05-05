import {
  createStore,
  combineReducers,
  Store,
  compose,
  applyMiddleware,
} from 'redux';

import mainReducer from './modules/main';
import { MainInitStateType } from './modules/main/types';
import { sagaMiddleware, sagas } from './root-sagas';

export interface State {
  main: MainInitStateType;
}

const reducers = combineReducers({
  main: mainReducer,
});

const store: Store = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
      ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
      : (noop: null) => noop,
  ),
);

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
