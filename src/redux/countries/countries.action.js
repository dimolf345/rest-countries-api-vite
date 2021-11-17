import CountryActionTypes from "./countries.types";
import axios from "axios";

const url = "https://restcountries.com/v2/all";

export const countriesFetchStart = () => ({
  type: CountryActionTypes.COUNTRIES_FETCH_START,
});

//this function will be handled by thunk middleWare
// if data retrieving is ok, we will dispatch countries
// fetch success, otherwise failure
export const countriesFetchStartAsync = () => {
  return (dispatch) => {
    dispatch(countriesFetchFailure(""));
    dispatch(countriesFetchStart());

    fetch(url, { mode: "cors" })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data fetching success");
        dispatch(countriesFetchSuccess(data));
      })
      .catch((error) => dispatch(countriesFetchFailure(error.message)));
  };
};

export const countriesFetchSuccess = (countriesData) => ({
  type: CountryActionTypes.COUNTRIES_FETCH_SUCCESS,
  payload: countriesData,
});

export const countriesFetchFailure = (message) => ({
  type: CountryActionTypes.COUNTRIES_FETCH_FAILURE,
  payload: message,
});
