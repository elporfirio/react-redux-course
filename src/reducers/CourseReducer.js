import * as types from '../actions/ActionTypes';

export default function courseReducer(state = [], action){
  switch(action.type) {
    case types.CREATE_COURSE:
      // state.push(action.course);
      // return state;
      return [...state, Object.assign({}, action.course)];
    default:
      return state;
  }
}
