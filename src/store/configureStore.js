import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducers';
import reduxImnumableStateInvariant from 'redux-immutable-state-invariant';

// API AJAX
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImnumableStateInvariant()));
}
