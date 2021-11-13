// creates 3 types of action for data fetching
// 1. FETCH_START - to tell the application you're trying to fetch data, iot set loading state to true and render the spinner
// 2. FETCH_SUCCESS - in case you retrieve correctly the data from the API
// 3. FETCH_FAILURE - in case anything goes wrong
const CountryActionTypes = {
  COUNTRIES_FETCH_START: "COUNTRIES_FETCH_START",
  COUNTRIES_FETCH_SUCCESS: "COUNTRIES_FETCH_SUCCESS",
  COUNTRIES_FETCH_FAILURE: "COUNTRIES_FETCH_FAILURE",
};

export default CountryActionTypes;
