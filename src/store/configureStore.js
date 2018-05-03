import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImnumableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImnumableStateInvariant()));
}
