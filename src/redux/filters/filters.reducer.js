import filtersActionTypes from "./filters.types";
import { setRegionFilter, searchCountry } from "./filters.action";

const INITIAL_STATE = {
  search: "",
  regionFilter: "",
};

const filtersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case filtersActionTypes.SEARCH_COUNTRY:
      return {
        ...state,
        search: action.payload,
      };

    case filtersActionTypes.SET_REGION_FILTER:
      return {
        ...state,
        regionFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
