import CountryActionTypes from "./countries.types";

const INITIAL_STATE = {
  isFetching: false,
  errorMessage: "",
  countries: [],
};

const countryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryActionTypes.COUNTRIES_FETCH_START:
      console.log("Starting to fetch");
      return {
        ...state,
        isFetching: true,
      };

    case CountryActionTypes.COUNTRIES_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        countries: action.payload,
      };

    case CountryActionTypes.COUNTRIES_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
