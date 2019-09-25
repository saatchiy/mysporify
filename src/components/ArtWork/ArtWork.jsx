import React from 'react';
import PropTypes from 'prop-types';

import './ArtWork.scss';

const propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  info: PropTypes.object.isRequired,
};

const ArtWork = props => {
  const { info } = props;

  const image = info.artworkUrl60;
  const { artistName, trackName } = info;

  return (
    <div className="art-work-wrapper">
      <img src={image} alt={trackName} />
      <div>{trackName}</div>
      <div>{artistName}</div>
    </div>
  );
};

ArtWork.propTypes = propTypes;

export default ArtWork;
