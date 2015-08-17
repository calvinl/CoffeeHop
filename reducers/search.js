import { combineReducers } from 'redux';
import { SearchFilters } from '../actions/search.js';
const { SHOW_NEAR_ZIP } = SearchFilters;

// manage the search filters
function searchFilters(state = [SHOW_NEAR_ZIP], action) {
  switch (action.type) {
  case SET_SEARCH_FILTERS:
    return action.filters;
  default:
    return state;
  }
}

// locations
function locations(state = [], action) {
  switch (action.type) {
  default:
    return state;
  }
}

const searchApp = combineReducers({
  searchFilters,
  locations
});

export default searchApp;
