import { takeLatest } from 'redux-saga/effects';

import { SEARCH_REQUEST } from './types';
import { watchSearchRequest } from './workers';

function* rootSaga() {
  yield takeLatest(SEARCH_REQUEST, watchSearchRequest);
}

export default rootSaga;
