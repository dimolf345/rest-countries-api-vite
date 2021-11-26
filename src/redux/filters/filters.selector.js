import { createSelector } from "reselect";

const selectFilters = (state) => state.filters;

export const selectRegionFilter = createSelector(
  [selectFilters],
  (filters) => filters.regionFilter
);

export const selectSearch = createSelector(
  [selectFilters],
  (filters) => filters.search
);
