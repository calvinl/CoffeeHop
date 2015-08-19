import * as type from '../constants/ActionTypes';
import { SHOW_NEAR_ZIP } from '../constants/SearchFilters';

// manage the search filters
export default function searchFilters(state = [SHOW_NEAR_ZIP], action) {
  switch (action.type) {

  case type.ADD_SEARCH_FILTER:
    return [action.searchFilter, ...state];

  case type.REMOVE_SEARCH_FILTER:
    // return a filtered array where removed filter doesn't exist
    return state.filter(searchFilter =>
      searchFilter !== action.searchFilter
    );

  default:
    return state;

  }
};
