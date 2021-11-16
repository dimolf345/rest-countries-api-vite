import { createSelector } from "reselect";

const selectAPI = (state) => state.api;

export const selectCountriesCollection = createSelector(
  [selectAPI],
  (api) => api.countries
);

export const selectIsFetchingAPI = createSelector(
  [selectAPI],
  (api) => api.isFetching
);

export const selectErrorMessage = createSelector(
  [selectAPI],
  (api) => api.errorMessage
);
