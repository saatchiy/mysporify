import { connect } from 'react-redux';

import { NAMESPACE as searchState } from '../../services/SearchService/constants';
import { requestSearch } from '../../services/SearchService/actions';

import Search from './Search';

const mapStateToProps = state => ({
  searchValue: state[searchState].query,
  searchResults: state[searchState].searchResults,
  isFetching: state[searchState].isFetching,
  fetched: state[searchState].fetched,
});

const mapDispatchToProps = {
  requestSearch,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
