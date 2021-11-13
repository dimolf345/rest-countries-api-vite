import { combineReducers } from "redux";
//below you import all the reducers you want in your app
import themeReducer from "./theme/theme.reducer";
import countryReducer from "./countries/countries.reducer";

const rootReducer = combineReducers({
  // TODO:
  // -CREATE COUNTRY REDUCER
  theme: themeReducer,
  countries: countryReducer,
});

export default rootReducer;
