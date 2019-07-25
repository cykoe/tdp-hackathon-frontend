import {
  REQUEST_COUNTRYDATA,
  RECEIVE_COUNTRYDATA,
  RECEIVE_COUNTRYDATA_ERROR,
  COUNTRYDATA_URL
} from "../constants/ActionTypes";

function requestCountryData () {
  return {
    type: REQUEST_COUNTRYDATA
  }
}

function receiveCountryData (json) {
  return {
    type: RECEIVE_COUNTRYDATA,
    countryData: json,
  }
}

function receiveCountryDataError (error) {
  return {
    type: RECEIVE_COUNTRYDATA_ERROR,
    error,
  };
}

export function fetchCountryData (countryName) {
  return (dispatch) => {
    dispatch(requestCountryData());
    return fetch(`${COUNTRYDATA_URL}?country=${countryName}`)
      .then(req => req.json())
      .then(json => {
        if (!json.success) {
          throw new Error(json.message);
        }
        dispatch(receiveCountryData(json));
      })
      .catch(err => dispatch(receiveCountryDataError(err)));
  }
}
