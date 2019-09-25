import React from 'react';

import Logo from '../../resources/Spotify_Logo_CMYK_White.png';
import { history } from '../../redux/store';
import Separator from '../Separator';
import SidebarItem from './SidebarItem';
import './Sidebar.scss';

const Sidebar = () => {
  const handleSearchClick = event => {
    event.preventDefault();
    history.push('/search');
  };

  const handleHomeClick = event => {
    event.preventDefault();
    history.push('/');
  };

  return (
    <div className="sidebar-wrapper">
      <img className="sidebar-app-logo" src={Logo} alt="logo" />
      <SidebarItem
        label="Search"
        onClick={handleSearchClick}
        icon="../../resources/search.png"
      />
      <SidebarItem
        label="Home"
        onClick={handleHomeClick}
        icon="../../resources/home.png"
      />
      <SidebarItem label="Your Library" icon="../../resources/lib.png" />
      <div className="sidebar-footer">
        <SidebarItem label="Install App" icon="../../resources/search.png" />
        <Separator />
        <SidebarItem label="mfratz" icon="../../resources/search.png" />
      </div>
    </div>
  );
};

export default Sidebar;
