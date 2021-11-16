import { ThemeActionTypes } from "./theme.types";

const INITIAL_STATE = {
  isThemeLight: true,
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_THEME:
      return {
        ...state,
        isThemeLight: !state.isThemeLight,
      };
    default:
      return state;
  }
};

export default themeReducer;
