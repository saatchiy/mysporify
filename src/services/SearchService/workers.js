import { call, put, select, delay } from 'redux-saga/effects';

import { searchSucceeded, searchFailed } from './actions';
import { NAMESPACE } from './constants';
import { fetchData } from '../../utils/api';

export function* watchSearchRequest() {
  yield delay(300);
  const state = yield select();
  const searchState = yield state[NAMESPACE];

  const { query } = searchState;

  const response = yield call(
    fetchData,
    `https://itunes.apple.com/search?term=${query}`
  );

  if (!response.error) {
    yield put(searchSucceeded(response.results));
  } else {
    yield put(searchFailed(response.error));
  }
}
