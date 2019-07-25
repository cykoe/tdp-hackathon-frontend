import {combineReducers} from 'redux';
import {
  REQUEST_COUNTRYDATA,
  RECEIVE_COUNTRYDATA,
  RECEIVE_COUNTRYDATA_ERROR
} from "../constants/ActionTypes";

export function countryDataReducer (
  state = {
    isFetching: false,
    countryData: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_COUNTRYDATA:
      return {...state, isFetching: true};
    case RECEIVE_COUNTRYDATA:
      return {...state, isFetching: false, countryData: action.countryData};
    case RECEIVE_COUNTRYDATA_ERROR:
      return {...state, isFetching: false, countryData: action.error};
    default:
      return state;
  }
}


const rootReducer = combineReducers({
  countryDataReducer,
});

export default rootReducer;
