import * as types from './actionsTypes';
import API from '../api';

export function loadCompanySuccess(data) {
  return {type: types.LOAD_NEWS, data};
}
export function getNews() {
  return (dispatch) => {

    API().then(data=>{
      dispatch(loadCompanySuccess(data));
    }).catch(err=>{
      console.log(err);
    })    
  }
}
