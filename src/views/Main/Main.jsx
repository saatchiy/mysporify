import React from 'react';

import Sidebar from '../../components/Sidebar';
import Routes from '../../components/Routes';
import './Main.scss';

const Main = () => {
  return (
    <div className="main-wrapper">
      <Sidebar />
      <Routes />
    </div>
  );
};

export default Main;
