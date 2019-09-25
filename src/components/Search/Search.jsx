import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../inputs/TextInput';
import SearchResults from '../SearchResults';
import './Search.scss';

const propTypes = {
  fetched: PropTypes.bool.isRequired,
  searchValue: PropTypes.string.isRequired,
  requestSearch: PropTypes.func.isRequired,
  searchResults: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Search = props => {
  const { requestSearch, fetched, searchValue, searchResults } = props;

  return (
    <div className="search-wrapper">
      <TextInput
        value={searchValue}
        onChange={requestSearch}
        placeholder="Start typing..."
      />
      {!fetched && (
        <div className="search-result-empty-wrapper">
          <div className="search-result-empty-title">Search Spotify</div>
          <div className="search-result-empty-desc">
            Find your favorite songs, artists, albums, podcasts, and playlists.
          </div>
        </div>
      )}
      {fetched && <SearchResults results={searchResults} />}
    </div>
  );
};

Search.propTypes = propTypes;

export default Search;
