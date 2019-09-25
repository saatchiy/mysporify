import React from 'react';
import PropTypes from 'prop-types';

import ArtWork from '../ArtWork';

const propTypes = {
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};
const SearchResults = props => {
  const { results } = props;

  return (
    <div>
      <div>Albums</div>
      <div>
        {results.map(info => (
          <ArtWork key={info.trackId} info={info} />
        ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = propTypes;

export default SearchResults;
