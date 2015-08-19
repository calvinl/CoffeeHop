import { combineReducers } from 'redux';
import locations from './locations';
import searchFilters from './searchFilters';

const rootReducer = combineReducers({
  searchFilters,
  locations
});

export default rootReducer;
