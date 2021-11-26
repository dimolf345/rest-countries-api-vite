import { combineReducers } from "redux";
//below you import all the reducers you want in your app
import themeReducer from "./theme/theme.reducer";
import countryReducer from "./countries/countries.reducer";
import filtersReducer from "./filters/filters.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  api: countryReducer,
  filters: filtersReducer,
});

export default rootReducer;
