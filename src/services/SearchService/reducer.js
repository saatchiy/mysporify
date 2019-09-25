import { SEARCH_REQUEST, SEARCH_SUCCEEDED, SEARCH_FAILED } from './types';

export const initialState = () => {
  return {
    query: '',
    fetched: false,
    isFetching: false,
    hasError: false,
    results: [],
    error: undefined,
  };
};

export default (state = initialState(), action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        query: action.query,
        searchResults: [],
        fetched: false,
        isFetching: true,
        error: undefined,
      };
    case SEARCH_SUCCEEDED:
      return {
        ...state,
        searchResults: action.results,
        fetched: true,
        isFetching: false,
        error: undefined,
      };
    case SEARCH_FAILED:
      return {
        ...state,
        searchResults: [],
        error: action.error,
        fetched: true,
        isFetching: false,
      };
    default:
      return state;
  }
};
