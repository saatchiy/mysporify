import { all } from 'redux-saga/effects';
import searchService from '../services/SearchService/saga';

function* rootSaga() {
  const sagas = [searchService()];

  yield all(sagas);
}

export default rootSaga;
