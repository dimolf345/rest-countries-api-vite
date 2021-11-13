import { createSelector } from "reselect";

const selectTheme = (state) => state.theme;

export const themeSelector = createSelector(
  [selectTheme],
  (theme) => theme.isThemeLight
);
