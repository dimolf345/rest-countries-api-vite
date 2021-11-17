import ErrorActionTypes from "./errortest.types";

const INITIAL_STATE = {
  error: "",
};

const ErrorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ErrorActionTypes.RESET_ERROR:
      return {
        ...state,
        error: "",
      };
    case ErrorActionTypes.SET_ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ErrorReducer;
