import { ThemeActionTypes } from "./theme.types";

export const changeTheme = () => {
  return {
    type: ThemeActionTypes.TOGGLE_THEME,
  };
};
