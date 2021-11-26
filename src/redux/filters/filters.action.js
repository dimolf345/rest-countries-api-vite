import filtersActionTypes from "./filters.types";

export const setRegionFilter = (region) => ({
  type: filtersActionTypes.SET_REGION_FILTER,
  payload: region,
});

export const searchCountry = (countryName) => ({
  type: filtersActionTypes.SEARCH_COUNTRY,
  payload: countryName,
});
