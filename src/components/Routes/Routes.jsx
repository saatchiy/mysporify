import React from 'react';
import { Switch, Route } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';

import Home from '../../views/Home';
import Search from '../Search';
import { history } from '../../redux/store';

const Routes = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </ConnectedRouter>
  );
};

export default Routes;
