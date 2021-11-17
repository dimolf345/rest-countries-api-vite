import ErrorActionTypes from "./errortest.types";

export const ResetError = () => ({
  type: ErrorActionTypes.RESET_ERROR,
});

export const SetErrorMessage = (message) => ({
  type: ErrorActionTypes.SET_ERROR_MESSAGE,
  payload: message,
});
