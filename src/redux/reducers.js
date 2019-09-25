import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import searchService from '../services/SearchService/reducer';

import { NAMESPACE as searchServiceReducer } from '../services/SearchService/constants';

const reducers = history =>
  combineReducers({
    router: connectRouter(history),
    [searchServiceReducer]: searchService,
  });

export default reducers;
