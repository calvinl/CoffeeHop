import { ADD_SEARCH_FILTER, REMOVE_SEARCH_FILTER } from '../constants/ActionTypes';

export function addSearchFilter(searchFilter) {
  return { type: ADD_SEARCH_FILTER, searchFilter };
};

export function removeSearchFilter(searchFilter) {
  return { type: REMOVE_SEARCH_FILTER, searchFilter };
};
