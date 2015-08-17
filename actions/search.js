// Action Types
export const SET_SEARCH_FILTERS = 'SET_SEARCH_FILTERS';

// Search Filters
export const SearchFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NEAR_ZIP: 'SHOW_NEAR_ZIP',
  SHOW_WIFI: 'SHOW_WIFI',
  SHOW_OUTLETS: 'SHOW_OUTLETS'
};

// Action Creators
export function setSearchFilters(filters) {
  return { type: SET_SEARCH_FILTERS, filters };
}
