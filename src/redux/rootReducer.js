import { combineReducers } from "redux";
//below you import all the reducers you want in your app
import themeReducer from "./theme/theme.reducer";
import countryReducer from "./countries/countries.reducer";
import errorReducer from "./errortest/errortest.reducer";

const rootReducer = combineReducers({
  // TODO:
  // -CREATE COUNTRY REDUCER
  theme: themeReducer,
  api: countryReducer,
  test: errorReducer,
});

export default rootReducer;
