import { SEARCH_REQUEST, SEARCH_SUCCEEDED, SEARCH_FAILED } from './types';

export function requestSearch(query) {
  return {
    type: SEARCH_REQUEST,
    query,
  };
}

export function searchSucceeded(results) {
  return {
    type: SEARCH_SUCCEEDED,
    results,
  };
}

export function searchFailed(error) {
  return {
    type: SEARCH_FAILED,
    error,
  };
}
