import * as types from '../actions/actionsTypes';
import initialState from './initialState';

export default function newsReducer(state = initialState.news, action) {
  switch (action.type) {
    case types.LOAD_NEWS:
      return action.data;
    default:
      return state;
  }
}
