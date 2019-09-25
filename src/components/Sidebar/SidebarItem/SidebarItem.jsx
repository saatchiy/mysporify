import React from 'react';
import PropTypes from 'prop-types';

import './SidebarItem.scss';

const propTypes = {
  icon: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const defaultProps = {
  icon: '',
};

const SidebarItem = props => {
  const { label, icon, onClick } = props;

  return (
    <div onClick={onClick} className="sidebar-item-wrapper">
      <img className="sidebar-item-logo" src={icon} alt={label} />
      <span className="sidebar-item-label">{label}</span>
    </div>
  );
};

SidebarItem.propTypes = propTypes;
SidebarItem.defaultProps = defaultProps;

export default SidebarItem;
